<?php

namespace App;


use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Query\Builder;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'account_type_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

	/**
	 * All User uploads get a generic UserUpload entry in the database
	 *
	 */
	public function user_uploads() {
		return $this->hasMany('App\UserUpload');
	}

    /**
     * Users may have access to multiple audio files and
     * AudioFiles may be accessed by many people
     *
     * @return Builder | BelongsToMany
     */
    public function audio_files() {
        return $this->belongsToMany('App\AudioFile', 'audio_files_users', 'user_id', 'file_id')->using('App\AudioFilesUser');
    }

	/**
	 * Users have an account type
	 *
	 * @return Builder | BelongsTo
	 */
	public function account_type() {
		return $this->belongsTo('App\AccountType');
	}

	/**
	 * All Users have a statistics record
	 *
	 *
	 */
	public function user_statistic() {
		return $this->hasOne('App\UserStatistic');
	}

	/**
	 * Returns bool indicating if user is super user
	 *
	 *
	 */
	public function isSuper() {
		return $this->account_type->id === 5;
	}

	/**
	 * The sum of all bytes user has in storage, less free audio files
	 *
	 *
	 */
	public function storageUsed() {
		return $this->user_uploads()->whereNotIn('free', [1])->sum('size');
	}

}
