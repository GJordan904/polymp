<?php

namespace App\Console\Commands;

use App\User;
use Illuminate\Console\Command;

class SetUserStats extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'stats:setusers';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sets all the users statistics';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $users = User::all();

        foreach ($users as $user) {
        	$storage = $user->storageUsed();
        	$user->user_statistic->update([
        		'storage' => $storage
	        ]);
        }
    }
}
