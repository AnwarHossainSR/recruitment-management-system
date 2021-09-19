<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('login', function () {
    return "Un Authorized";
});


Route::middleware(['cors'])->group(function () {
    Route::post('login', 'AuthController@login')->name('login');
    Route::post('register', 'AuthController@register');
    Route::apiResource('home', 'JobCategoryController');

    Route::middleware(['auth:api'])->group(function () {
        Route::post('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@authenticatedUser');
    });
});
