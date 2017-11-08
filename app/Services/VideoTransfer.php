<?php

namespace App\Services;

use Aws\ElasticTranscoder\ElasticTranscoderClient;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class VideoTransfer
{
    private $etcClient;
    private $file;
    private $getId3;
    private $fileInfo;

    /**
     * VideoTransfer constructor.
     *
     * @param UploadedFile $file
     */
    public function __construct(UploadedFile $file) {
        $this->file = $file;
        $this->getId3 = resolve('GetId3\GetId3Core');
        $this->etcClient = new ElasticTranscoderClient([
            'version' => 'latest',
            'region'  => env('AWS_REGION'),
            'credentials' => [
                'key'    => env('AWS_KEY'),
                'secret' => env('AWS_SECRET')
            ]
        ]);
    }

    public function transfer() {
        $this->fileInfo = $this->getId3->analyze($this->file->path());
        Log::debug($this->fileInfo);
        dd();

        $s3Path = Storage::disk('s3Video')->put(Auth::user()->username, $this->file);
        $pipeId =env('AWS_ETC_VIDEO');

        $promise = $this->etcClient->createJobAsync([
            'PipelineId' => "$pipeId",
            'Input' => [
                'Key' => $s3Path,
                'FrameRate' => 'auto',
                'Resolution' => 'auto',
                'AspectRatio' => 'auto',
                'Interlaced' => 'auto',
                'Container' => 'auto',
            ],
            'Outputs' => [
                'mp4' => [
                    'Key' => $s3Path,
                    'ThumbnailPattern' => "thumb,",
                    'PresetId' => '1351620000001-000001',
                    'Composition' => [
                        'TimeSpan' => [
                            'StartTime' => '00:01:00',
                            'Duration' => '00:1:30'
                        ]
                    ]
                ]
            ]
        ]);
        $promise->then(function($success) {
            Log::debug($success);
        }, function($error) {
           Log::debug($error);
        });

        return ['message' => 'Files transcoding'];
    }
}