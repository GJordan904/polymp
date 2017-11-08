<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['prefix' => 'auth'], function() {
	Route::post('login', ['as' => 'login', 'uses' => 'Auth\LoginController@login']);
	Route::post('logout', ['as' => 'logout', 'uses' => 'Auth\LoginController@logout']);
	Route::post('register', ['as' => 'register', 'uses' => 'Auth\RegisterController@register']);
	Route::get('check', ['as' => 'authCheck', 'uses' => 'Auth\ValidatorController@isAuthenticated']);
});


Route::get('{all}', function() {
	return view('index');
})->where('all', '.*');
