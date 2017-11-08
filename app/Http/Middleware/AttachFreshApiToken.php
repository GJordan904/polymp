<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Laravel\Passport\Http\Middleware\CreateFreshApiToken;

class AttachFreshApiToken extends CreateFreshApiToken
{
    /**
     * Overriding default behavior by checking $response
     * is an instanceof JsonResponse
     *
     * @param  \Illuminate\Http\Response || JsonResponse  $request
     * @return bool
     */
    protected function responseShouldReceiveFreshToken($response)
    {
        return $response instanceof JsonResponse && !$this->alreadyContainsToken($response) ||
            $response instanceof Response && !$this->alreadyContainsToken($response);
    }
}
