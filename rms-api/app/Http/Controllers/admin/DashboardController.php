<?php

namespace App\Http\Controllers\admin;

use App\Application;
use App\Http\Controllers\Controller;
use App\Job;

class DashboardController extends Controller
{
    public function index()
    {
        try {
            $data['applicants'] = Application::count();
            $data['jobs'] = Job::where('status', 'active')->count();
            $data['accepted'] = Application::where('status', 'accepted')->count();
            $data['rejected'] = Application::where('status', 'rejected')->count();
            return response()->json([
                'status' => true,
                'message' => 'success',
                'data' => $data
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ]);
        }
    }
}
