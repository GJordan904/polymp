<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AudioFile extends Model
{
    use UploadedFile;

    /**
     * The table associated with the model
     *
     * @var string
     */
    protected $table = 'audio_files';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'album_art_id',
        'mbid',
        'file_name',
        'file_size',
        'file_path',
        'file_format',
        'duration',
        'title',
        'artist',
        'album',
        'genre',
        'year'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'playlist_stream',
        'album_art'
    ];

    /**
     * Audio files may be accessed by multiple users
     *
     */
    public function users() {
        return $this->belongsToMany('App\User', 'audio_files_users', 'file_id', 'user_id')->using('App\AudioFilesUser');
    }

    /**
     * Audio files can be associated with one AlbumArt
     *
     */
    public function album_art() {
        return $this->belongsTo('App\AlbumArt');
    }

    /**
     * A UserUpload model is associated with all uploaded files
     *
     */
    public function user_upload() {
        return $this->hasOne('App\UserUpload', 'file_id');
    }

    /**
     *
     * @return string
     */
    public function getPlaylistStreamAttribute() {
        $fUrl = str_replace(' ', '%20', $this->file_path);
        return 'https://audio.polymp.io/'.$fUrl;
    }

    /**
     * Return the audio file attribute
     *
     * @return AudioFile
     */
    public function getAlbumArtAttribute() {
        return $this->album_art()->getResults();
    }
}