<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;

class StatisticsService {
	private $user;
	private $super;

	public function __construct() {
		$this->user = Auth::user();
	}

	/**
	 * Checks if the user has enough remaining bytes to upload the file
	 *
	 * @param $size  integer  the file size
	 *
	 * @return bool
	 */
	public function canUpload($size) {
		if($this->super) {
			return true;
		}
		$limit = $this->user->account_type['storage_limit'];
		$used = $this->user->user_statistic['storage'];

		return $limit - $used >= $size;
	}

	/**
	 * Checks if the user has bandwidth remaining to stream the file
	 *
	 * @param $size  integer  the file size
	 *
	 * @return bool
	 */
	public function canStream($size) {
		if($this->super) {
			return true;
		}
		$limit = $this->user->account_type['stream_limit'];
		$used = $this->user->user_statistic['stream'];

		return $limit - $used >= $size;
	}

	/**
	 * Checks if user has transcoding credits available
	 *
	 * @param $seconds  float  the media length in seconds
	 * @param $format  string  the format being transcoded to
	 *
	 * @return bool
	 */
	public function canTranscode($seconds, $format) {
		if($this->super) {
			return true;
		}
		$limit   = $this->user->account_type['transcode_limit'];
		$spent   = $this->user->user_statistic['transcode'];
		$length = $seconds / 60;

		switch($format) {
			case 'hd':
				$needed = $length * .03;
				break;
			case 'sd':
				$needed = $length * .015;
				break;
			case 'audio':
				$needed = $length * .005;
				break;
			default:
				$needed = 0;
		}
		if(!$needed) {
			//TODO Create Exception
			return false;
		}
		return $limit - $spent >= $needed;
	}

	/**
	 * Returns the bytes of storage space the user has remaining and has used
	 *
	 * @return array
	 */
	public function storageSpace() {
		$limit = $this->user->account_type['storage_limit'];
		$used = $this->user->user_statistic['storage'];

		return ['used' => $used, 'remaining' => $limit - $used];
	}

	/**
	 * Returns the bytes of bandwidth the user has remaining and has used
	 *
	 * @return  array
	 */
	public function streamBandwidth() {
		$limit = $this->user->account_type['stream_limit'];
		$used = $this->user->user_statistic['stream'];

		return ['used' => $used, 'remaining' => $limit - $used];
	}

	/**
	 * Returns the transcoding credits the user has remaining and has used
	 *
	 * @return  array
	 */
	public function transcodeTime() {
		$limit = $this->user->account_type['transcode_limit'];
		$used = $this->user->user_statistic['transcode'];

		return ['used' => $used, 'remaining' => $limit - $used];
	}
}