<?php

namespace App\Http\Controllers;

use App\Job;
use App\JobCategory;
use App\MainJob;
use App\Traits\ApiResponseWithHttpStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class JobController extends Controller
{
    use ApiResponseWithHttpStatus;
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['categories'] = JobCategory::where('status', 'active')->get();
        $data['jobs'] = MainJob::where([['status', 'active']])->get();
        $data['main_jobs'] = MainJob::where([['status', 'active']])->paginate(10);
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
        try {
            if ($request->hasFile('icon')) {
                $file = $request->file('icon');
                $fileName = time() . '.' . $file->extension();
                $file->move(public_path('files/jobs'), $fileName);
            } else {
                $fileName = 'default.png';
            }

            $response = MainJob::create([
                "title" => $request->title,
                "slug" => Str::slug($request->title),
                "company" => $request->company,
                "location" => $request->location,
                "email" => $request->email,
                "tag" => $request->tag,
                "salary" => $request->salary,
                "close_date" => $request->close_date,
                "icon" => $fileName,
                "cat_id" => $request->cat_id,
                "user_id" => Auth::user()->id,
                "type" => $request->type,
                "description" => $request->description,
            ]);

            return response()->json([
                'status' => true,
                'message' => "success",
                'job' => $response
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\MainJob  $job
     * @return \Illuminate\Http\Response
     */
    public function show(MainJob $job)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\MainJob  $job
     * @return \Illuminate\Http\Response
     */
    public function edit(MainJob $job)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\MainJob  $job
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MainJob $job)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\MainJob  $job
     * @return \Illuminate\Http\Response
     */
    public function destroy(MainJob $job)
    {
        if ($job->delete()) {
            return $this->apiResponse('Successfully deleted !', null, Response::HTTP_OK, true);
        }
    }
}
