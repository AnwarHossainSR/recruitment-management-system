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
        $data['main_jobs'] = MainJob::where([['status', 'active']])->latest()->paginate(10);
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
            $imgPath = 'http://localhost:8000/files/jobs/' . $fileName;
            $response = MainJob::create([
                "title" => $request->title,
                "slug" => Str::slug($request->title),
                "company" => $request->company,
                "location" => $request->location,
                "email" => $request->email,
                "tag" => $request->tag,
                "salary" => $request->salary,
                "close_date" => $request->close_date,
                "icon" => $imgPath,
                "cat_id" => $request->cat_id,
                "user_id" => Auth::user()->id,
                "type" => $request->type,
                "description" => $request->description,
            ]);
            if ($response) {
                $category = JobCategory::find($request->cat_id);
                $category->update([
                    'job_count' => $category->job_count + 1
                ]);
            }

            return $this->apiResponse('success', $response, Response::HTTP_CREATED, true);
        } catch (\Throwable $th) {
            return $this->apiResponse($th->getMessage(), null, Response::HTTP_CREATED, true);
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
        $array = explode("/", $job->icon);
        $photo = last($array);
        $existPhoto = '/files/jobs/' . $photo;
        $path = str_replace('\\', '/', public_path());
        if ($photo != "default.png" && $photo != "default1.png" && $photo != "default2.png" && $photo != "default3.png") {
            if (file_exists($path . $existPhoto)) {
                \unlink($path . $existPhoto);
            }
        }
        if ($job->delete()) {
            return $this->apiResponse('Successfully deleted !', null, Response::HTTP_OK, true);
        }
    }
}
