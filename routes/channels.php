<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

use App\UserUpload;

Broadcast::channel('uploads.{upload}', function ($user, UserUpload $upload) {
    return (int) $user->id === (int) $upload->user_id;
});
