<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserStatistic extends Model
{
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'user_id', 'storage', 'stream', 'transcode'
	];

	/**
	 * A user statistic record belongs to a single user
	 *
	 *
	 */
	public function user() {
		return $this->belongsTo('App\User');
	}
}
