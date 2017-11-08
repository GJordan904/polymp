<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AccountType extends Model
{
	/**
	 * The models associated table
	 *
	 * @var string
	 */
    protected $table = 'account_types';

    /**
     * A Single Account Type Will Have Multiple Users
     *
     *
     */
    public function users() {
    	return $this->hasMany('App\User','account_type');
    }
}
