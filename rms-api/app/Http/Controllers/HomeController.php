<?php

namespace App\Http\Controllers;

use App\JobCategory;
use App\MainJob;
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
        $data['categories'] = JobCategory::where([['status', 'active'], ['job_count', '>', 0]])->get()->random(8);
        $data["featured_job"] = MainJob::where([['status', 'active'], ['is_featured', true]])->get()->random(6);
        $data['latest'] = MainJob::where('status', 'active')->latest('created_at')->get()->random(6);

        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    public function searchJob($query)
    {
        $data['jobs'] = MainJob::where([['title', 'LIKE', '%' . $query . '%'], ['status', 'active']])->get();
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
        $data['job'] = MainJob::where([['slug', $slug]])->with('category')->first();
        $data['similar'] = MainJob::where([['status', 'active'], ['cat_id', $data['job']->cat_id]])->get()->random(3);
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
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

    public function jobsByCategory($slug)
    {
        $data['category'] = JobCategory::where('slug', $slug)->first();
        $data['jobs'] = MainJob::where('cat_id', $data['category']->id)->get();
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }
}
