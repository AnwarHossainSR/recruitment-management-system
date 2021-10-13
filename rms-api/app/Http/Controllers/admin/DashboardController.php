<?php

namespace App\Http\Controllers\admin;

use App\Application;
use App\Http\Controllers\Controller;
use App\Http\Helpers\Helper;
use App\Http\Requests\ProfileUpdateRequest;
use App\JobCategory;
use App\MainJob;
use App\Trainer;
use App\Traits\ApiResponseWithHttpStatus;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $data['trainers'] = Trainer::where('status', 'active')->count();
        $data['users'] = User::count();
        $data['training'] = JobCategory::where('status', 'active')->count();
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }
    public function updateProfile(Request $request)
    {
        $user = User::find(Auth::id());
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->extension();
            Helper::removeImage($user);
            $image->move(public_path('files/users'), $imageName);
            $user->update($request->all());
            $user->update(['image' => 'http://localhost:8000/files/users/' . $imageName]);
        } else {
            $user->update($request->all());
        }
        return $this->apiResponse('updated !', $request, Response::HTTP_OK, true);
    }
}
