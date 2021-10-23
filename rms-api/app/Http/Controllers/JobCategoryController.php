<?php

namespace App\Http\Controllers;

use App\JobCategory;
use App\Traits\ApiResponseWithHttpStatus;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class JobCategoryController extends Controller
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
        $data['categories'] = JobCategory::latest()->paginate(8);
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
                $image = $request->file('icon');
                $imageName = time() . '.' . $image->extension();
                $image->move(public_path('files/categories'), $imageName);
            } else {
                $imageName = "default.jpg";
            }
            JobCategory::create([
                'name' => $request->name,
                'slug' => Str::slug($request->name),
                'status' => $request->status,
                'period_start' => $request->period_start,
                'period_end' => $request->period_end,
                'icon' => 'http://localhost:8000/files/categories/' . $imageName,
            ]);
            return $this->apiResponse('created !', null, Response::HTTP_CREATED, true);
        } catch (Exception $th) {
            return $this->apiResponse($th->getMessage(), null, Response::HTTP_CONFLICT, false);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\JobCategory  $jobCategory
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        try {
            $data['category'] = JobCategory::where([['slug', $slug]])->first();
            return $this->apiResponse('success !', $data, Response::HTTP_OK, true);
        } catch (\Exception $th) {
            return $this->apiResponse($th->getMessage(), null, Response::HTTP_CONFLICT, false);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\JobCategory  $jobCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $JobCategory)
    {
        try {
            $category = JobCategory::find($JobCategory);
            if ($request->hasFile('icon')) {
                $image = $request->file('icon');
                $imageName = time() . '.' . $image->extension();
                $image->move(public_path('files/categories'), $imageName);
                $category->update($request->all());
                $category->update(['icon' => 'http://localhost:8000/files/categories/' . $imageName]);
            } else {
                $category->update($request->all());
            }
            return $this->apiResponse('updated !', null, Response::HTTP_OK, true);
        } catch (\Exception $th) {
            return $this->apiResponse($th->getMessage(), null, Response::HTTP_EXPECTATION_FAILED, false);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\JobCategory  $jobCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy($jobCategory)
    {
        $job = JobCategory::findOrFail($jobCategory);
        $array = explode("/", $job->icon);
        $photo = last($array);
        $existPhoto = '/files/categories/' . $photo;
        $path = str_replace('\\', '/', public_path());
        if ($photo != "default.png" && $photo != "default1.png" && $photo != "default2.png" && $photo != "default3.png") {
            if (file_exists($path . $existPhoto)) {
                \unlink($path . $existPhoto);
            }
        }
        if ($job->delete()) {
            return $this->apiResponse('deleted !', null, Response::HTTP_OK, true);
        }
    }
}
