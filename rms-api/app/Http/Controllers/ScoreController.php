<?php

namespace App\Http\Controllers;

use App\Exam;
use App\Http\Requests\ScoreRequest;
use App\Score;
use App\Trainee;
use App\Traits\ApiResponseWithHttpStatus;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ScoreController extends Controller
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
        $data['scores'] = Score::with('trainee.user', 'exam.training')->get();
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($slug)
    {
        $data['exam'] = Exam::where('slug', $slug)->first();
        $data['trainees'] = Trainee::where('status', 'active')->with('user')->get();
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ScoreRequest $request)
    {
        $check = Score::where([['exam_id', $request->exam_id], ['trainee_id', $request->trainee_id]])->get();
        if (count($check) > 0) {
            return $this->apiResponse('Trainee mark has already stored !', null, Response::HTTP_OK, true);
        }
        Score::create([
            'marks' => $request->marks,
            'total' => $request->total,
            'exam_id' => $request->exam_id,
            'trainee_id' => $request->trainee_id,
        ]);
        return $this->apiResponse('success', $request->all(), Response::HTTP_OK, true);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Score  $score
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $exam = Exam::where('slug', $slug)->first();
        $data['scores'] = Score::where('exam_id', $exam->id)->with('trainee.user', 'exam.training')->get();
        return $this->apiResponse('success', $data, Response::HTTP_OK, true);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Score  $score
     * @return \Illuminate\Http\Response
     */
    public function edit(Score $score)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Score  $score
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Score $score)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Score  $score
     * @return \Illuminate\Http\Response
     */
    public function destroy(Score $score)
    {
        $score->delete();
        return $this->apiResponse('success', $score, Response::HTTP_OK, true);
    }
}
