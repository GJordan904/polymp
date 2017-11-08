<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AlbumArt extends Model
{

    /**
     * The table associated with the model
     *
     * @var string
     */
    protected $table = 'album_art';

    /**
     * Fillable Fields
     *
     */
    protected $fillable = [
        'front_image',
        'back_image',
        'front_thumb_sm',
        'front_thumb_lg',
        'back_thumb_sm',
        'back_thumb_lg',
	    'data',
	    'data_type'
    ];

    protected $appends = [
    	'src'
    ];

    public function audio_files() {
        return $this->hasMany('App\AudioFile');
    }

    public function getSrcAttribute() {
    	if($this->data != null) {
    		return $this->data_type . $this->data;
	    }else {
    		return $this->front_image;
	    }
    }
}
