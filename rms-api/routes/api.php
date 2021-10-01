<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('login', function () {
//     return "Un Authorized";
// });

Route::middleware(['cors'])->group(function () {
    Route::post('/auth/register', 'AuthController@register');
    Route::post('/auth/login', 'AuthController@login')->name('login');
    Route::post('/forgot', 'AuthController@forgotPassword');
    Route::post('/updatepass', 'AuthController@forgotPasswordUpdate');
    Route::get('/jobs/{query}/search', 'HomeController@searchJob');


    Route::middleware(['auth:api'])->group(function () {
        Route::post('/auth/logout', 'AuthController@logout');
        Route::get('user', 'AuthController@authenticatedUser');
        Route::prefix('admin')->group(function () {
            Route::get('dashboard', 'admin\DashboardController@index');
            Route::get('applications/accepted', 'ApplicationController@accepted');
            Route::get('applications/rejected', 'ApplicationController@rejected');
        });
    });
    Route::apiResources([
        'home' => 'HomeController',
        'categories' => 'JobCategoryController',
        'jobs' => 'JobController',
        'applications' => 'ApplicationController'
    ]);
});
