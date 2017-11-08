<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlbumArtTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('album_art', function (Blueprint $table) {
            $table->increments('id');
            $table->string('mbid')->unique();
            $table->string('front_image');
            $table->string('front_thumb_sm');
            $table->string('front_thumb_lg');
            $table->string('back_image');
            $table->string('back_thumb_sm');
            $table->string('back_thumb_lg');
            $table->timestamps();
        });

        Schema::table('audio_files', function(Blueprint $table) {
           // $table->integer('album_art_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('album_art');
    }
}
