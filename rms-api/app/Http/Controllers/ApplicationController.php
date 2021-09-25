<?php

namespace App\Http\Controllers;

use App\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:applications'
        ]);
        if ($validator->fails()) {
            return response(["status" => false, 'message' => $validator->errors()->all()]);
        }
        try {
            if ($request->hasFile('cv')) {
                $file = $request->file('cv');
                $fileName = time() . '.' . $file->extension();
                $file->move(public_path('files/applications'), $fileName);
            } else {
                $fileName = null;
            }
            $post = Application::create([
                'cv' => $fileName,
                'job_id' => $request->job_id,
                'email' => $request->email,
            ]);
            if ($post) {
                return \response([
                    'status' => true,
                    'message' => 'success',
                ]);
            } else {
                return \response([
                    'status' => false,
                    'message' => 'something is wrong !',
                ]);
            }
        } catch (\Exception $th) {
            return response(['message' => $th->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function show(Application $application)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function edit(Application $application)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Application $application)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function destroy(Application $application)
    {
        //
    }
}
