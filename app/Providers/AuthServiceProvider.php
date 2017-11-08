<?php

namespace App\Providers;

use App\Http\Controllers\Auth\CBJTokenGuard;
use Illuminate\Auth\RequestGuard;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\ClientRepository;
use Laravel\Passport\Passport;
use Laravel\Passport\TokenRepository;
use League\OAuth2\Server\ResourceServer;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
	    Passport::routes();
	    Auth::extend('cbj', function($app, $name, array $config) {
		    return new RequestGuard(function ($request) use ($app, $config) {
			    return (new CBJTokenGuard(
				    $app->make(ResourceServer::class),
				    Auth::createUserProvider($config['provider']),
				    $app->make(TokenRepository::class),
				    $app->make(ClientRepository::class),
				    $app->make('encrypter')
			    ))->user($request);
		    }, $app['request']);
	    });
    }
}
