<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddArtworkColumnsToAudioFiles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('audio_files', function (Blueprint $table) {
            $table->string('art_sm');
            $table->string('art_md');
            $table->string('art_lg');
            $table->string('art_xl');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('audio_files', function (Blueprint $table) {
            $table->dropColumn('art_sm');
            $table->dropColumn('art_md');
            $table->dropColumn('art_lg');
            $table->dropColumn('art_xl');
        });
    }
}
