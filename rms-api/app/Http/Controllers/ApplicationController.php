<?php

namespace App\Http\Controllers;

use App\Application;
use App\Traits\ApiResponseWithHttpStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;


class ApplicationController extends Controller
{
    use ApiResponseWithHttpStatus;
    // public function __construct()
    // {
    //     $this->middleware('auth:api')->except(['store']);
    // }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['applications'] = Application::where([['status', 'pending']])->with('job')->paginate(10);
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function accepted()
    {
        $data['applications'] = Application::where([['status', 'accepted']])->with('job')->paginate(10);
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }
    public function rejected()
    {
        $data['applications'] = Application::where([['status', 'rejected']])->with('job')->paginate(10);
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
                $fileName = time() . '.' . $file->extension();
                $file->move(public_path('files/applications'), $fileName);
            } else {
                $fileName = null;
            }
            $post = Application::create([
                'slug' => Str::slug($request->title),
                'cv' => $fileName,
                'job_id' => $request->job_id,
                'email' => $request->email,
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
     * Show the form for editing the specified resource.
     *
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function edit(Application $application)
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
        //
    }
}
