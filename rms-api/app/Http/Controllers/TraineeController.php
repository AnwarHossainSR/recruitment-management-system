<?php

namespace App\Http\Controllers;

use App\Http\Requests\TraineeRequest;
use App\Trainee;
use App\Trainer;
use App\Training;
use App\Traits\ApiResponseWithHttpStatus;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class TraineeController extends Controller
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
        $data['trainees'] = Trainee::with('user', 'training.category')->latest()->get();
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($slug)
    {
        $trainee = Trainee::pluck('user_id');
        $data['users'] = User::where('is_admin', false)->whereNotIn('id', $trainee)->get();
        $data['training'] = Training::where('slug', $slug)->with('category')->first();
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TraineeRequest $request)
    {
        Trainee::create([
            'slug' => Str::random(15),
            'training_id' => $request->training_id,
            'user_id' => $request->user_id
        ]);
        return $this->apiResponse('created !', null, Response::HTTP_CREATED, true);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Trainee  $trainee
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $user = User::where('slug', $slug)->first();
        $data['trainees'] = Trainee::where('user_id', $user->id)->with('user', 'training.category')->latest()->get();
        $data['trainer'] = Trainer::where('cat_id', $data['trainees'][0]->training->cat_id)->with('user')->get();
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Trainee  $trainee
     * @return \Illuminate\Http\Response
     */
    public function edit(Trainee $trainee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Trainee  $trainee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Trainee $trainee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Trainee  $trainee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Trainee $trainee)
    {
        $trainee->delete();
        return $this->apiResponse('deleted !', null, Response::HTTP_CREATED, true);
    }
}
