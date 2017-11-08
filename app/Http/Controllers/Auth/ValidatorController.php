<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ValidatorController extends Controller
{
	/**
	 * The Request
	 *
	 * @var Request
	 */
	protected $request;

	/**
	 * ValidatorController constructor.
	 *
	 * @param Request $request
	 */
	public function __construct(Request $request) {
		$this->request = $request;
	}

	/**
	 * Checks if user is logged in
	 */
	public function isAuthenticated() {
		$response = false;
		if(Auth::check()) {
			$response = Auth::user();
		}
		return response()->json(['authenticated' => $response], 200);
	}

	/**
	 * Validates whether the email is already in use
	 *
	 *
	 * @return bool
	 */
	public function emailUnique() {
		$email = $this->request->query('email');
		$hasUser = User::where('email', $email)->get()->count() > 0;
		return response()->json(['unique' => !$hasUser], 200);
	}
}
