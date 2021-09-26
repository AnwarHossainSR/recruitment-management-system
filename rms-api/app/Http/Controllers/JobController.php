<?php

namespace App\Http\Controllers;

use App\Job;
use App\JobCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class JobController extends Controller
{
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
        $jobs = Job::where([['status', 'active']])->get();
        $categories = JobCategory::where('status', 'active')->get();
        try {
            return \response([
                'status' => true,
                'message' => 'success',
                'jobs' => $jobs,
                'categories' => $categories
            ]);
        } catch (\Exception $th) {
            return response(['message' => $th->getMessage()], 400);
        }
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

            $response = Job::create([
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
     * @param  \App\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function show(Job $job)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function edit(Job $job)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Job $job)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Job  $job
     * @return \Illuminate\Http\Response
     */
    public function destroy(Job $job)
    {
        //
    }
}
