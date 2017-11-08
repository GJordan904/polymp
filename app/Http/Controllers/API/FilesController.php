<?php

namespace App\Http\Controllers\API;

use App\UserUpload;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class FilesController extends Controller
{
    public function __construct() {

    }

    public function audioFiles(Request $request) {
        $search = $request->input('search');
        $pagination = json_decode($request->input('pagination'));
        $orderBy = $pagination->descending ? 'desc' : 'asc';
        $files = Auth::user()->audio_files()
                             ->whereRaw('
                                title LIKE ? OR
                                artist LIKE ? OR
                                album LIKE ?
                             ', ["%$search%", "%$search%", "%$search%"])
                             ->limit($pagination->rowsPerPage)
                             ->offset(($pagination->rowsPerPage * $pagination->page) - $pagination->rowsPerPage)
                             ->orderBy($pagination->sortBy, $orderBy);

        $count = $files->count();
        $files = $files->get();

        $files->map(function($file){
            if(isset($file->album_art)) {
                $file->thumbnail = $file->album_art->front_thumb_lg;
            }else {
                $file->thumbnail = asset('images/ext_mp3_x64.png');
            }
            $file->duration = floor($file->duration/60).':'.str_pad($file->duration%60, 2, '0', STR_PAD_LEFT);
            return $file;
        });

        return response()->json(['files' => $files, 'count'=> $count], 200);
    }

    public function latestUploads() {
        $latest = UserUpload::latest()->limit(10)->get();
	    return response()->json(['latestUploads' => $latest], 200);
    }
}
