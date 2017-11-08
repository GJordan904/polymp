<?php

namespace App\Http\Controllers\API;

use App\AudioFile;
use App\Http\Controllers\Controller;
use App\Utils;
use GuzzleHttp\Client;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class PlaylistController extends Controller
{
    private $request;

    public function __construct(Request $request) {
        $this->request = $request;
    }

    /**
     * Returns the playlist for the mediaplayer
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function nowPlaying() {
        $songs = Auth::user()->audio_files()->latest()->take(15)->get();

        return response()->json($songs, 200);
    }

    /**
     * Set Cookies for a given resource
     *
     * @param Request $request
     *
     * @return JsonResponse
     *
     */
    public function getCookies(Request $request) {
        $cookies = Utils::getCloudFrontCookies($request->query('url'));

        return response()->json(['success ' => true], 200)
            ->withCookie(cookie('CloudFront-Key-Pair-Id', $cookies['CloudFront-Key-Pair-Id'], 0, '/', 'polymp.io'))
            ->withCookie(cookie('CloudFront-Signature', $cookies['CloudFront-Signature'], 0, '/', 'polymp.io'))
            ->withCookie(cookie('CloudFront-Policy', $cookies['CloudFront-Policy'], 0, '/', 'polymp.io'));
    }

}
