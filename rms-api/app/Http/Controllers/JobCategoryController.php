<?php

namespace App\Http\Controllers;

use App\JobCategory;
use App\Traits\ApiResponseWithHttpStatus;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
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
        $data['categories'] = JobCategory::where('status', 'active')->latest()->paginate(8);
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
                $image->move(public_path('images/icons'), $imageName);
            } else {
                $imageName = "default.jpg";
            }
            JobCategory::create([
                'name' => $request->name,
                'slug' => Str::slug($request->name),
                'icon' => $imageName,
            ]);
            return \response([
                'message' => 'success'
            ], 201);
        } catch (Exception $th) {
            return \response([
                'message' => $th->getMessage(),
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\JobCategory  $jobCategory
     * @return \Illuminate\Http\Response
     */
    public function show(JobCategory $jobCategory)
    {
        // try {
        //     $category = JobCategory::where([['slug', $slug]])->first();
        //     return \response([
        //         'message' => 'success',
        //         'category' => $category
        //     ]);
        // } catch (\Exception $th) {
        //     return \response(['message' => $th->getMessage()]);
        // }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\JobCategory  $jobCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $category = JobCategory::find($id);
            if ($request->hasFile('icon')) {
                $image = $request->file('icon');
                $imageName = time() . '.' . $image->extension();
                $image->move(public_path('images/icons'), $imageName);
            } else {
                $imageName = $category->icon;
            }
            $category->name = $request->name;
            $category->slug = Str::slug($request->name);
            $category->icon = $imageName;
            $category->save();
            return \response([
                'message' => 'success',
                'category' => $category
            ]);
        } catch (\Exception $th) {
            return \response(['message' => $th->getMessage()]);
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
        JobCategory::findOrFail($jobCategory)->delete();
        return $this->apiResponse('deleted !', null, Response::HTTP_OK, true);
    }
}
