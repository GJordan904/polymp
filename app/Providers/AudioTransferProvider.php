<?php

namespace App\Providers;

use App\Services\AudioTransfer;
use getID3;
use Illuminate\Support\ServiceProvider;

class AudioTransferProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
	    $this->app->singleton(AudioTransfer::class, function ($app) {
		    return new AudioTransfer($app->make(getID3::class));
	    });
    }

	/**
	 * Get the services provided by the provider.
	 *
	 * @return array
	 */
    public function provides()
    {
	    return [AudioTransfer::class];
    }
}
