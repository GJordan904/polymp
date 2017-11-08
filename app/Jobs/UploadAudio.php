<?php

namespace App\Jobs;

use App\Events\FileUploaded;
use App\Services\AudioTransfer;
use Illuminate\Bus\Queueable;
use Illuminate\Http\UploadedFile;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class UploadAudio implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

	/**
	 * The Uploaded file
	 *
	 * @var $file UploadedFile
	 */
    protected $file;

	/**
	 * Create a new job instance.
	 *
	 * @param UploadedFile $file
	 */
    public function __construct(UploadedFile $file)
    {
        $this->file = $file;
    }

	/**
	 * Execute the job.
	 *
	 * @param AudioTransfer $service
	 *
	 * @return void
	 */
    public function handle(AudioTransfer $service)
    {
    	$response = $service->init($this->file)->execute();
    	if(isset($response['upload'])) {
    		event(new FileUploaded($response['upload']));
	    }
    }
}
