<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'validate'], function() {
	Route::get('email', ['as' => 'valemail', 'uses' => 'Auth\ValidatorController@emailUnique']);
});

Route::group(['middleware' => 'auth:api'], function () {
	// File Transfer
	Route::post('transfer', ['as' => 'api-transfer', 'uses' => 'API\TransferController@transfer']);

	// Playlists
	Route::get('now-playing', ['as' => 'api-now-playing', 'uses' => 'API\PlaylistController@nowPlaying']);

	// Files
	Route::get('latest-uploads', ['as' => 'api-latest', 'uses' => 'API\FilesController@latestUploads']);
	Route::get('audio-files', ['as' => 'api-audio-files', 'uses' => 'API\FilesController@audioFiles']);

	// Stats
	Route::group(['prefix' => 'stats'], function() {
		Route::get('transfer', 'API\StatisticsController@transferStatistics');
	});

	// Cloudfront
	Route::get('cloudfront-cookies', ['as'=>'api-cloudfront-cookies', 'uses' => 'API\PlaylistController@getCookies']);

	Route::options('{all}', function () {
		return response()->json(['msg' => 'success'], 200);
	})->where('all', '.*');
});
