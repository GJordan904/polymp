<?php

namespace App\Providers;

use getID3;
use Illuminate\Support\ServiceProvider;

class GetId3ServiceProvider extends ServiceProvider
{

    protected $defer = true;

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(getID3::class, function ($app) {
            return new getID3();
        });
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [getID3::class];
    }
}
