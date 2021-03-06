<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Basic Credentials
    |--------------------------------------------------------------------------
    |
    |
    */
    'KEY' => env('AWS_KEY'),
    'SECRET' => env('AWS_SECRET'),
    'REGION' => env('AWS_REGION'),

    /*
    |--------------------------------------------------------------------------
    | S3 Buckets
    |--------------------------------------------------------------------------
    |
    |
    */
    'S3_AUDIO' =>  env('AWS_AUDIO'),
    'S3_VIDEO' =>  env('AWS_VIDEO'),
    'S3_IMAGES' => env('AWS_IMAGES'),
    'S3_AVATAR' => env('AWS_AVATAR'),
    'S3_TEMP' => env('AWS_TEMP'),

    /*
    |--------------------------------------------------------------------------
    | Cloudfront
    |--------------------------------------------------------------------------
    |
    |
    */
    'CF_KEY_ID' => env('AWS_CF_KEY_ID'),
    'CF_AUDIO' => env('AWS_CF_AUDIO'),

    /*
    |--------------------------------------------------------------------------
    | Elastic Transcoder
    |--------------------------------------------------------------------------
    |
    |
    */
    'ETC_VIDEO' => env('AWS_ETC_VIDEO'),
    'ETC_AUDIO' => env('AWS_ETC_AUDIO'),
];