<?php

namespace App\Http\Controllers;

use App\JobCategory;
use App\Trainee;
use App\Trainer;
use App\Training;
use App\Traits\ApiResponseWithHttpStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class TrainingController extends Controller
{
    use ApiResponseWithHttpStatus;
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['training'] = Training::with('trainers.user', 'category')->latest()->get();
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $training = Training::pluck('cat_id');
        $data['categories'] = JobCategory::where('status', 'active')->whereNotIn('id', $training)->get();
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
        Training::create([
            'slug' => Str::random(15),
            'cat_id' => $request->cat_id
        ]);
        return $this->apiResponse('created !', null, Response::HTTP_CREATED, true);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Training  $training
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        // $data['trainer'] = Trainer::where('cat_id', $training->cat_id)->with('user')->get();
        // $data['training'] = Training::where('slug', $slug)->with('category')->get();
        // return $this->apiResponse('success', $data, Response::HTTP_OK, true);

        $training = Training::where('slug', $slug)->first();
        $data['trainer'] = Trainer::where('cat_id', $training->cat_id)->with('user')->get();
        //return $data['trainer'];
        $data['trainees'] = Trainee::where('training_id', $training->id)->with('user', 'training.category')->latest()->get();
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Training  $training
     * @return \Illuminate\Http\Response
     */
    public function edit(Training $training)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Training  $training
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Training $training)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Training  $training
     * @return \Illuminate\Http\Response
     */
    public function destroy(Training $training)
    {
        //
    }
}
