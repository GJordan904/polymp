<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Log;
use Laravel\Passport\Guards\TokenGuard;

class CBJTokenGuard extends TokenGuard {

	/**
	 * Determine if the CSRF / header are valid and match.
	 * Additionally, we check the XSRF token as well
	 *
	 * @param  array  $token
	 * @param  \Illuminate\Http\Request  $request
	 * @return bool
	 */
	protected function validCsrf($token, $request)
	{
		$isCsrf = false;
		$isXsrf = false;
		if($csrf = $token['csrf']) {
			$isCsrf = hash_equals(
				$token['csrf'], (string) $request->header('X-CSRF-TOKEN')
			);
			if($request->hasHeader('X-XSRF-TOKEN')) {
				$isXsrf = $this->encrypter->decrypt($request->header('X-XSRF-TOKEN')) === $csrf;
			}
		}
		return $isCsrf || $isXsrf;
	}

}