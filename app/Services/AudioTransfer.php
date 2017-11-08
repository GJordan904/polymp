<?php

namespace App\Services;

use App\AlbumArt;
use App\AudioFile;
use Aws\ElasticTranscoder\ElasticTranscoderClient;
use getID3;
use GuzzleHttp\Client;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AudioTransfer
{
    private $file;
    private $tempPath;
    private $getId3;
    private $fileInfo;
    private $etcClient;
    private $data = [];
    private $required = [];

    /**
     * AudioTransfer constructor.
     *
     */
    public function __construct(getID3 $getId3)
    {
        $this->getId3 = $getId3;
        $this->etcClient = new ElasticTranscoderClient([
            'region'  => config('aws.REGION'),
            'version' => 'latest',
	        'credentials' => [
	        	'key' => config('aws.KEY'),
		        'secret' => config('aws.SECRET')
	        ]
        ]);
    }

    public function init(UploadedFile $file, $data = array(), $required = array()) {
	    $this->file = $file;
	    $this->tempPath = $file->path();
	    $this->data = $data;
	    $this->required = !empty($required) ? $required :
		    ["album_art_id" => null, "title" => null, "artist" => null];
	    return $this;
    }

    /**
     * This method handles the actual file transfer and saving of an audio file
     *
     *
     * @return array - the response body
     */
    public function execute() {
    	// Set a couple vars we'll need later
    	$errors = false;
    	$user = Auth::user();

    	// Get File Info and decide if we need to analyze with fpcalc
        $this->fileInfo = $this->getId3->analyze($this->tempPath);
        $runFpcalc = $this->analyzeInfo();

        if($runFpcalc) {
        	$errors = $this->fingerprint();
        }

        if($errors) {
        	Log::error($errors);
        	$output = $errors;
        }else {
	        $s3Path = Storage::disk('s3Audio')->putFileAs($this->data["artist"], $this->file, $this->data["file_name"]);
	        $pipeId = config('aws.ETC_AUDIO');

	        $this->etcClient->createJob([
		        'PipelineId' => "$pipeId",
		        'Input' => array(
			        'Key' => $s3Path
		        ),
		        'Outputs' => array(
			        array(
				        'Key' => $s3Path.'/hls64k',
				        'ThumbnailPattern' => "",
				        'PresetId' => '1351620000001-200071',
				        'SegmentDuration' => "10"
			        ),
			        array(
				        'Key' => $s3Path.'/hls160k',
				        'ThumbnailPattern' => "",
				        'PresetId' => '1351620000001-200060',
				        'SegmentDuration' => "10"
			        )
		        ),
		        "Playlists" => array(
			        array(
				        "Format" => "HLSv4",
				        "Name" => $s3Path."/playlist",
				        "OutputKeys" => array(
					        $s3Path.'/hls64k',
					        $s3Path.'/hls160k'
				        )
			        ),
		        )
	        ]);

	        // Save to DB
	        $record = AudioFile::create([
		        'user_id' => $user->getAuthIdentifier(),
		        'album_art_id' => $this->data["album_art_id"],
		        'mbid' => isset($this->data["mbid"]) ? $this->data["mbid"] : null,
		        'file_name' => $this->data["file_name"],
		        'file_size'=> $this->fileInfo["filesize"],
		        'file_path' => $s3Path.'/playlist.m3u8',
		        'file_format' => $this->file->extension(),
		        'duration' => isset($this->fileInfo['playtime_seconds']) ? $this->fileInfo['playtime_seconds'] : 0,
		        'title' => $this->data["title"],
		        'artist' => $this->data["artist"],
		        'album' => $this->data["album"]
	        ]);

	        // Associate User With AudioFile
	        $record->users()->attach($user->getAuthIdentifier(), ['owner' => 1]);

	        // Create UserUpload record
	        $upload = $user->user_uploads()->create([
	        	'file_id' => $record->id,
		        'size' => $record->file_size,
		        'type' => $record->file_format,
		        'name' => $record->file_name,
		        'file_table' => 'audio_files',
		        'free' => 0
	        ]);

	        // Update User Statistics
	        $user->user_statistic()->update([
	        	'storage' => $user->user_statistic()->first()['storage'] + $record->file_size
	        ]);
	        $output = [['success' => 'The file has been saved to the database with the current User as the owner', 'upload' => $upload], 200];
        }
        return $output;
    }

	/**
	 * Analyze the FileInfo and determine if we need to look up the file in music brainz
	 *
	 * @return bool  if true then lookup song in musicbrainz
	 */
	private function analyzeInfo() {
		$lookup = true;
		if (array_has($this->fileInfo, ['title', 'artist', 'album', 'genre', 'year'])) {
			$this->data['title']  = $this->fileInfo['title'];
			$this->data['artist'] = $this->fileInfo['artist'];
			$this->data['album']  = $this->fileInfo['album'];
			$this->data['genre']  = $this->fileInfo['genre'];
			$this->data['year']   = $this->fileInfo['year'];

			$this->required['title']  = $this->fileInfo['title'];
			$this->required['artist'] = $this->fileInfo['artist'];

			if($this->deepSearch(true)) {
				$lookup = false;
				$this->createS3Name();
			};
		}elseif($this->deepSearch(false)) {
			$lookup = false;
			$this->createS3Name();
		}
		return $lookup;
	}

	/**
	 * Digs through the file info to find the data and album art
	 * returns true if enough data is found
	 *
	 * @param $picture  bool  whether to search just for image
	 *
	 * @return bool  true if data found
	 */
	private function deepSearch($picture) {
		// Create an array of details from the multidimensional array $fileInfo
		$filteredInfo = [];
		$hasV1 = array_has($this->fileInfo, 'id3v1');
		$hasV2 = array_has($this->fileInfo, 'id3v2');
		// Check for id3v1 and id3v2 keys. Combine if both exist
		if ($hasV1 && !$hasV2) {
			$filteredInfo = $this->fileInfo["id3v1"];
		}
		if ($hasV2 && !$hasV1) {
			$filteredInfo = $this->fileInfo["id3v2"];
		}
		if ($hasV1 && $hasV2) {
			$filteredInfo = array_merge_recursive($this->fileInfo['id3v2'], $this->fileInfo['id3v1']);
		}
		// If resulting array from above search has comments, move them up to combine the info
		if (array_has($filteredInfo, 'comments')) {
			$comments = $filteredInfo["comments"];
			$filteredInfo = array_merge_recursive($filteredInfo, $comments);
		}
		// Check for comment key and combine it with other info if exists
		if (array_has($this->fileInfo, 'comments')) {
			$filteredInfo = array_merge_recursive($filteredInfo, $this->fileInfo["comments"]);
		}
		// Check for tags_html
		if (array_has($this->fileInfo, 'tags_html')) {
			foreach($this->fileInfo['tags_html'] as $item) {
				if(is_array($item)) {
					$filteredInfo = array_merge_recursive($filteredInfo, $item);
				}else {
					$filteredInfo[] = $item;
				}
			}
		}
		// Check for tags
		if (array_has($this->fileInfo, 'tags')) {
			foreach($this->fileInfo['tags'] as $item) {
				if(is_array($item)) {
					$filteredInfo = array_merge_recursive($filteredInfo, $item);
				}else {
					$filteredInfo[] = $item;
				}
			}
		}

		// If searching just for image
		if ($picture) {
			$this->imageSearch($filteredInfo);
		}else {
			$this->imageSearch($filteredInfo);
			// Search through the new array for the following terms
			// The terms also associate to keys in the $data array
			$searchTerms = [
				'title',
				'artist',
				'album',
				'year',
				'genre'
			];

			foreach ($searchTerms as $term) {
				if (array_has($filteredInfo, $term)) {
					$value = '';
					if (is_array($filteredInfo[$term])) {
						foreach ($filteredInfo[$term] as $_value) {
							if ($_value) {
								$value = $_value;
							}
						}
					} else {
						$value = $filteredInfo[$term];
					}
					$this->data[$term] = $value;
					if($term === 'title' || $term === 'artist') {
						$this->required[$term] = $value;
					}
				}
			}
		}

		// Check if required params have been set
		foreach ($this->required as $req) {
			if($req === null) {
				return false;
			}
		}

		return true;
	}

	private function imageSearch($filteredInfo) {
		$searchTerms = ['picture', 'art', 'album_art'];
		foreach ($searchTerms as $term) {
			if (array_has($filteredInfo, $term)) {
				if(is_array($filteredInfo[$term][0]) && array_has($filteredInfo[$term][0], ["data"])) {
					$artwork = new AlbumArt();
					$artwork->mbid = null;
					$this->data['mbid'] = null;
					$artwork->data = base64_encode($filteredInfo[$term][0]["data"]);
					$type = isset($filteredInfo[$term][0]["image_mime"]) ? $filteredInfo[$term][0]["image_mime"] : 'image/jpeg';
					$artwork->data_type = "data:$type;base64,";
					$artwork->save();
					$this->data['album_art_id'] = $artwork->id;
					$this->required['album_art_id'] = $artwork->id;
				}
			}
		}
	}

	/**
	 * Uses the fpcalc program to create an audio fingerprint
	 * and then checks if it is in the musicbrainz db
	 *
	 *
	 * @return array
	 */
	public function fingerprint() {
		$errors = [['error' => 'unknown fpcalc error'], 505];
		exec('fpcalc '.$this->file, $output, $status);
		if($status == 0) {
			$duration = explode('=', $output[1])[1];
			$body = [
				'form_params' => [
					'client' => env('ACOUSTID_KEY', null),
					'duration' => $duration,
					'fingerprint' => explode('=', $output[2])[1]
				]
			];
			$client = new Client();
			$resp = $client->post('https://api.acoustid.org/v2/lookup?meta=recordings+releaseids+releasegroups+compress', $body);
			// 503 = Too Many Requests
			if($resp->getStatusCode() == 503) {
				sleep(1.25);
				$resp = $client->post('https://api.acoustid.org/v2/lookup?meta=recordings+releaseids+releasegroups+compress', $body);
			}
			// SUCCESS
			if($resp->getStatusCode() == 200) {
				$data = json_decode($resp->getBody(), true);
				if(array_has($data['results'][0], 'recordings')) {
					$this->setTitleArtistArt($data['results'][0]);
					$this->createS3Name();
					$errors = false;
				}else {
					// TODO:: Handle Nothing In Music Brainz, Premium Users
					$errors = [['error' => 'Nothing in music brainz and no meta data found'], 505];
				}
			}else {
				//TODO:: Customize this error return
				$errors = ['error' => $resp->getBody(), $resp->getStatusCode()];
			}
		}
		return $errors;
	}

    /**
     * Extract the title, artist, and album from the musicbrainz data
     *
     * @param $info - the musicbrains data
     */
    private function setTitleArtistArt($info) {
        $titles = array();
        $details = array();
        foreach ($info['recordings'] as $recording) {
            if (!isset($recording['title'])) break;
            if (array_has($titles, $recording['title'])) {
                $titles[$recording['title']]++;
            } else {
                $titles[$recording['title']] = 1;
                $details[$recording['title'] . '_id'] = $recording['id'];
                $details[$recording['title'].'_releases'] = $recording['releasegroups'];
                if (count($recording['artists']) > 1) {
                    $details[$recording['title'] . '_artist'] = '';
                    foreach ($recording['artists'] as $artist) {
                        if (isset($artist['joinphrase'])) {
                            $details[$recording['title'] . '_artist'] = $details[$recording['title'] . '_artist'].$artist['name'].$artist['joinphrase'];
                        } else {
                            $details[$recording['title'] . '_artist'] = $details[$recording['title'] . '_artist'].$artist['name'];
                        }
                    }
                } else {
                    $details[$recording['title'] . '_artist'] = $recording['artists'][0]['name'];
                }
            }
        }
        $winner = array_search(max($titles), $titles);
        arsort($titles);
        $album = "";
        foreach($titles as $title => $count) {
            foreach($details[$title.'_releases'] as $release) {
                if($this->setArtwork($release['id'])) {
                    $winner = $title;
                    $album = $release['title'];
                    break 2;
                }
            }
        }
        $this->data['title'] = $winner;
        $this->data['artist'] = $details[$winner . '_artist'];
        $this->data['album'] = $album;
        $this->data['mbid'] = $details[$winner.'_id'];
    }

    /**
     * Check For the artwork in DB and associate
     * with the track, if not in the db
     * using the MBID, lookup the album art in
     * the cover art archive and save to db.
     *
     * @param $mbid - the musicbrainz id
     *
     * @return bool - whether artwork was found
     */
    private function setArtwork($mbid) {
	    if(!empty($this->data['album_art_id'])) {
		    $found = true;
        }elseif($artwork = AlbumArt::where('mbid', $mbid)->first()) {
            $this->data['album_art_id'] = $artwork->id;
		    $found = true;
        }else {
            $client = new Client([
                'headers' => ['User-Agent' => 'PolyMp 0.1.0 | grant@codebyjordan.com'],
                'http_errors' => false
            ]);
            $resp = $client->get('https://coverartarchive.org/release-group/' . $mbid);
            if ($resp->getStatusCode() == 503) {
                sleep(1.25);
                $resp = $client->get('https://coverartarchive.org/release-group/' . $mbid);
            }
            if ($resp->getStatusCode() == 200) {
                $body = json_decode($resp->getBody(), true);
                $artwork = new AlbumArt();
                $artwork->mbid = $mbid;
                $frontDone = false;
                $backDone = false;
                foreach ($body['images'] as $image) {
                    if ($image['front']) {
                        $artwork->front_image = $image['image'];
                        $artwork->front_thumb_sm = $image['thumbnails']['small'];
                        $artwork->front_thumb_lg = $image['thumbnails']['large'];
                        $frontDone = true;
                    }
                    if ($image['back']) {
                        $artwork->back_image = $image['image'];
                        $artwork->back_thumb_sm = $image['thumbnails']['small'];
                        $artwork->back_thumb_lg = $image['thumbnails']['large'];
                        $backDone = true;
                    }
                    if ($frontDone && $backDone) break;
                }
                $artwork->front_image = str_replace('http', 'https', $artwork->front_image);
                $artwork->front_thumb_sm = str_replace('http', 'https', $artwork->front_thumb_sm);
                $artwork->front_thumb_lg = str_replace('http', 'https', $artwork->front_thumb_lg);
                $artwork->back_image = str_replace('http', 'https', $artwork->back_image);
                $artwork->back_thumb_sm = str_replace('http', 'https', $artwork->back_thumb_sm);
                $artwork->back_thumb_lg = str_replace('http', 'https', $artwork->back_thumb_lg);
                $artwork->save();
                $this->data['album_art_id'] = $artwork->id;
	            $found = true;
            }else{
	            $found = false;
            }
        }
        return $found;
    }

    /**
     * Creates the S3 filename and sets $data['file_name'] to it
     *
     */
    private function createS3Name() {
        $s3Name = explode('/', $this->data["artist"])[0].".".$this->data["title"].".".$this->file->extension();
        $s3Name = preg_replace("/\s/", "", $s3Name);
        $this->data["file_name"] =  strtolower($s3Name);
    }

    /**
     * Validates that the file is not already in the database by
     * ensuring the title is unique with the artist.
     * If the file is already in the DB, the User uploading it is given access to that file
     */
    private function audioValidator() {
        $validator = Validator::make($this->data, [
            'file_name' => "required|unique:audio_files",
        ]);

        if($validator->fails()) {
            $record = AudioFile::where('file_name', $this->data['file_name'])->first();
            if($record) {
                if ($record->user_id == Auth::user()->getAuthIdentifier()) {
                    return [['success' => 'User has already uploaded this file', 'file' => $record], 200];
                } else {
                    $record->users()->attach(Auth::user()->getAuthIdentifier(), ['owner' => 0]);
                    return [['success' => 'File already in database. User granted access', 'file' => $record], 200];
                }
            }else {
                return [['error' => 'Validation error'], 422];
            }
        }
        return true;
    }
}