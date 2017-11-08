<?php

namespace App\Providers;

use App\Services\StatisticsService;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Support\ServiceProvider;

class StatisticsServiceProvider extends ServiceProvider
{

	protected $defer = true;

	/**
	 * Bootstrap the application services.
	 *
	 * @param UserProvider $provider
	 *
	 * @return void
	 */
    public function boot()
    {
	    $this->app->singleton(StatisticsService::class, function ($app) {
		    return new StatisticsService();
	    });
    }

	/**
	 * Get the services provided by the provider.
	 *
	 * @return array
	 */
	public function provides()
	{
		return [StatisticsService::class];
	}
}
