<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserUpload extends Model
{

	use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'file_id',
        'type',
        'size',
        'name',
        'file_table',
	    'free'
    ];

	/**
	 * The attributes that should be mutated to dates.
	 *
	 * @var array
	 */
	protected $dates = ['deleted_at'];

	/**
	 * Every Upload has one User
	 *
	 */
	public function user() {
		return $this->belongsTo('App\User');
	}

    /**
     * The file this model is associated with
     *
     *
     */
    public function file() {
        switch($this->file_table) {
            case 'audio_files':
                return $this->belongsTo('App\AudioFile', 'file_id');
        }
    }
}
