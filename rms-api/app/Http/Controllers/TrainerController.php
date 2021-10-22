<?php

namespace App\Http\Controllers;

use App\Http\Requests\TrainerRequest;
use App\JobCategory;
use App\Trainer;
use App\Training;
use App\Traits\ApiResponseWithHttpStatus;
use App\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class TrainerController extends Controller
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
        $data['trainers'] = Trainer::with('user', 'category')->latest()->get();
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['users'] = User::where('is_admin', true)->get();
        $data['categories'] = Training::where('status', 'active')->with('category')->get();
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TrainerRequest $request)
    {
        try {
            $check = Trainer::where([['user_id', $request->user_id], [
                'cat_id', $request->cat_id,
            ]])->get();
            if ($check->count() > 0) {
                return $this->apiResponse('already assigned !', null, Response::HTTP_CREATED, false);
            }
            $trainer = Trainer::create([
                'slug' => Str::random(15),
                'user_id' => $request->user_id,
                'cat_id' => $request->cat_id,
                'status' => 'active'
            ]);
            if ($trainer) {
                DB::table('trainings')
                    ->where('cat_id', $trainer->cat_id)
                    ->where('trainer_id', null)
                    ->update([
                        'trainer_id' => $trainer->id
                    ]);
            }
            return $this->apiResponse('created !', $trainer, Response::HTTP_CREATED, true);
        } catch (Exception $th) {
            return $this->apiResponse($th->getMessage(), null, Response::HTTP_CONFLICT, false);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Trainer  $trainer
     * @return \Illuminate\Http\Response
     */
    public function show(Trainer $trainer)
    {
        $data['trainer'] = $trainer;
        $data['users'] = User::where('is_admin', true)->get();
        $data['categories'] = JobCategory::where('status', 'active')->get();
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Trainer  $trainer
     * @return \Illuminate\Http\Response
     */
    public function edit(Trainer $trainer)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Trainer  $trainer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Trainer $trainer)
    {
        //return $request;
        $trainer->update($request->all());
        return $this->apiResponse('updated !', null, Response::HTTP_CREATED, true);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Trainer  $trainer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Trainer $trainer)
    {
        $trainer->delete();
        return $this->apiResponse('deleted !', null, Response::HTTP_OK, true);
    }
}
