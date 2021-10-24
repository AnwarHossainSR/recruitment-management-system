<?php

namespace App\Http\Controllers;

use App\Traits\ApiResponseWithHttpStatus;
use App\User;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class NotificationController extends Controller
{
    use ApiResponseWithHttpStatus;
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    public function getUnreadNotifications()
    {
        $data = Auth::user()->unreadNotifications;
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }
    public function markedNotiAsRead()
    {
        Auth::user()->unreadNotifications->markAsRead();
        return $this->apiResponse('success', null, Response::HTTP_OK, true);
    }
}
