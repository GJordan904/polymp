<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MakeAudioFileTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('audio_files', function (Blueprint $table) {
            $table->string('slug');
            $table->unique('slug');
            $table->primary('slug');
            $table->integer('user_id');
            $table->string('file_name');
            $table->string('file_path');
            $table->integer('file_size');
            $table->string('file_format');
            $table->string('title');
            $table->string('album');
            $table->string('artist');
            $table->string('genre');
            $table->string('year');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('audio_files');
    }
}
