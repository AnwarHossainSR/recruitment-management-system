<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('login', function () {
//     return "Un Authorized";
// });

Route::middleware(['cors'])->group(function () {
    Route::post('/register', 'AuthController@register');
    Route::post('/auth/login', 'AuthController@login')->name('login');
    Route::get('/jobs/{query}/search', 'HomeController@searchJob');

    Route::apiResources([
        'home' => 'HomeController',
        'categories' => 'JobCategoryController',
        'jobs' => 'JobController',
        'applications' => 'ApplicationController'
    ]);

    Route::middleware(['auth:api'])->group(function () {
        Route::post('/auth/logout', 'AuthController@logout');
        Route::get('user', 'AuthController@authenticatedUser');
        Route::prefix('admin')->group(function () {
            Route::get('dashboard', 'admin\DashboardController@index');
        });
    });
});
