<?php

namespace App\Http\Controllers;

use App\Job;
use App\JobCategory;
use App\Traits\ApiResponseWithHttpStatus;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HomeController extends Controller
{
    use ApiResponseWithHttpStatus;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['categories'] = JobCategory::where('status', 'active')->get()->random(8);
        $data["featured_job"] = Job::where([['status', 'active'], ['is_featured', true]])->get()->random(6);
        $data['latest'] = Job::where('status', 'active')->latest('created_at')->get()->random(6);
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    public function searchJob($query)
    {
        try {
            $jobs = Job::where([['title', 'LIKE', '%' . $query . '%'], ['status', 'active']])->get();
            if (count($jobs)) {
                return \response([
                    'jobs' => $jobs
                ]);
            } else {
                return [];
            }
        } catch (\Throwable $th) {
            return \response(['message' => $th->getMessage()]);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        try {
            $job = Job::where([['slug', $slug], ['status', 'active']])->with('category')->first();
            //return $job->id;
            $similar = Job::where([['status', 'active'], ['cat_id', $job->cat_id]])->get()->random(3);
            return \response([
                'message' => 'success',
                'job' => $job,
                'similar' => $similar,
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
