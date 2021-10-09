<?php

use Illuminate\Support\Facades\Route;


Route::middleware(['cors'])->group(function () {
    Route::post('/auth/register', 'AuthController@register');
    Route::post('/auth/login', 'AuthController@login')->name('login');
    Route::post('/forgot', 'AuthController@forgotPassword');
    Route::post('/updatepass', 'AuthController@forgotPasswordUpdate');
    Route::get('/jobs/{query}/search', 'HomeController@searchJob');
    Route::post('/subscribe', 'CommonController@subscribe');
    Route::post('/contact', 'CommonController@contactStore');

    Route::middleware(['auth:api'])->group(function () {
        Route::post('/auth/logout', 'AuthController@logout');
        Route::get('user', 'AuthController@authenticatedUser');
        Route::prefix('admin')->group(function () {
            Route::get('dashboard', 'admin\DashboardController@index');
            //applications
            Route::get('applications/{slug}/pending', 'ApplicationController@applicationsByCat');
            Route::get('applications/{slug}/accepted', 'ApplicationController@accepted');
            Route::get('applications/{slug}/rejected', 'ApplicationController@rejected');
            Route::get('applications/accept-manage/{id}', 'ApplicationController@changeToAccept');
            Route::get('applications/reject-manage/{id}', 'ApplicationController@changeToReject');
        });
    });
    Route::apiResources([
        'home' => 'HomeController',
        'categories' => 'JobCategoryController',
        'jobs' => 'JobController',
        'applications' => 'ApplicationController',
        'trainers' => 'TrainerController'
    ]);
});
