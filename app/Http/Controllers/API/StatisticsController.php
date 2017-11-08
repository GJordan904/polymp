<?php

namespace App\Http\Controllers\API;

use App\Services\StatisticsService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class StatisticsController extends Controller
{
    public function transferStatistics(StatisticsService $stats) {
    	$stats = [
    		'storage' => $stats->storageSpace(),
	    ];
    	return response()->json($stats, 200);
    }
}
