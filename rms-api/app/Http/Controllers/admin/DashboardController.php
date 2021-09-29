<?php

namespace App\Http\Controllers\admin;

use App\Application;
use App\Http\Controllers\Controller;
use App\MainJob;
use App\Traits\ApiResponseWithHttpStatus;
use Symfony\Component\HttpFoundation\Response;

class DashboardController extends Controller
{
    use ApiResponseWithHttpStatus;

    public function index()
    {
        $data['applicants'] = Application::count();
        $data['jobs'] = MainJob::where('status', 'active')->count();
        $data['accepted'] = Application::where('status', 'accepted')->count();
        $data['rejected'] = Application::where('status', 'rejected')->count();
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }
}
