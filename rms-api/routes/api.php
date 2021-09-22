<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('login', function () {
    return "Un Authorized";
});
Route::post('/register', 'AuthController@register');
Route::post('/auth/login', 'AuthController@login')->name('login');
Route::middleware(['cors'])->group(function () {

    Route::get('/jobs/{query}', 'HomeController@searchJob');

    Route::apiResource('home', 'HomeController');
    Route::apiResource('categories', 'JobCategoryController');
    Route::apiResource('jobs', 'JobController');


    Route::middleware(['auth:api'])->group(function () {
        Route::post('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@authenticatedUser');
    });
});
