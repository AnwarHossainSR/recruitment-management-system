<?php

namespace App\Http\Controllers;

use App\Application;
use App\MainJob;
use App\Traits\ApiResponseWithHttpStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;
use App\Http\Helpers\Helper;

class ApplicationController extends Controller
{
    use ApiResponseWithHttpStatus;
    public function __construct()
    {
        $this->middleware('auth:api')->except(['store']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['categories'] = MainJob::where([['status', 'active'], ['count', '>', 0]])->with('applications')->paginate(10);
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }
    public function applicationsByCat($slug)
    {
        $job = MainJob::where('slug', $slug)->first();
        $data['applications'] = Application::where([['status', 'pending'], ['job_id', $job->id]])->paginate(10);
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function accepted($slug)
    {
        $job = MainJob::where('slug', $slug)->first();
        $data['applications'] = Application::where([['status', 'accepted'], ['job_id', $job->id]])->paginate(10);
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }
    public function rejected($slug)
    {
        $job = MainJob::where('slug', $slug)->first();
        $data['applications'] = Application::where([['status', 'rejected'], ['job_id', $job->id]])->paginate(10);
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:applications'
        ]);
        if ($validator->fails()) {
            return response(["status" => false, 'message' => $validator->errors()->all()]);
        }

        try {
            if ($request->hasFile('cv')) {
                $file = $request->file('cv');
                $cvName = time() . '.' . $file->extension();
                $file->move(public_path('files/applications'), $cvName);
                $fileName = "http://localhost:8000/files/applications/" . $cvName;
            } else {
                $fileName = null;
            }
            $post = Application::create([
                'slug' => Str::slug($request->title),
                'cv' => $fileName,
                'job_id' => $request->job_id,
                'email' => $request->email,
            ]);
            $job = MainJob::find($request->job_id);
            $job->update([
                'count' => $job->count + 1
            ]);
            if ($post) {
                return \response([
                    'status' => true,
                    'message' => 'success',
                ]);
            } else {
                return \response([
                    'status' => false,
                    'message' => 'something is wrong !',
                ]);
            }
        } catch (\Exception $th) {
            return response(['message' => $th->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function show(Application $application)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Application $application)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function destroy(Application $application)
    {
        Helper::removeCV($application);
        $application->delete();
        return $this->apiResponse('deleted !', null, Response::HTTP_OK, true);
    }

    public function changeToAccept($id)
    {
        $application = Application::find($id);
        $application->update([
            'status' => 'accepted'
        ]);
        return $this->apiResponse('success', null, Response::HTTP_OK, true);
    }
    public function changeToReject($id)
    {
        $application = Application::find($id);
        $application->update([
            'status' => 'rejected'
        ]);
        return $this->apiResponse('success', null, Response::HTTP_OK, true);
    }
}
