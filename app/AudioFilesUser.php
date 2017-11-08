<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\Pivot;

class AudioFilesUser extends Pivot
{
    /**
     * The name of the foreign key column.
     *
     * @var string
     */
    protected $foreignKey = 'user_id';

    /**
     * The name of the "other key" column.
     *
     * @var string
     */
    protected $relatedKey = 'file_id';
    /**
     * The models table
     *
     */
    protected $table = 'audio_files_users';

    /**
     * Fillable Fields
     *
     */
    protected $fillable = [
        'user_id',
        'file_id',
        'owner'
    ];


}
