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
    Route::get('/verify/{token}/{email}', 'AuthController@verify');
    //home
    Route::get('/categories/cat-jobs/{slug}', 'HomeController@jobsByCategory');
    //notifications
    Route::get('/notifications', 'NotificationController@getUnreadNotifications');
    Route::get('/notifications/marked', 'NotificationController@markedNotiAsRead');
    Route::middleware(['auth:api'])->group(function () {
        Route::post('/auth/logout', 'AuthController@logout');
        Route::get('user', 'AuthController@authenticatedUser');
        Route::prefix('admin')->group(function () {
            //dashboard
            Route::get('dashboard', 'admin\DashboardController@index');
            Route::post('update-profile', 'admin\DashboardController@updateProfile');
            //applications
            Route::get('applications/{slug}/pending', 'ApplicationController@applicationsByCat');
            Route::get('applications/{slug}/accepted', 'ApplicationController@accepted');
            Route::get('applications/{slug}/rejected', 'ApplicationController@rejected');
            Route::get('applications/accept-manage/{id}', 'ApplicationController@changeToAccept');
            Route::get('applications/reject-manage/{id}', 'ApplicationController@changeToReject');
            //trainers
            Route::get('create/trainer', 'TrainerController@create');
            Route::get('create/trainings', 'TrainingController@create');
            //trainee
            Route::get('create/trainees/{slug}', 'TraineeController@create');
            //scores
            Route::get('create/{slug}/score', 'ScoreController@create');
        });
    });
    Route::apiResources([
        'home' => 'HomeController',
        'categories' => 'JobCategoryController',
        'jobs' => 'JobController',
        'applications' => 'ApplicationController',
        'trainers' => 'TrainerController',
        'trainings' => 'TrainingController',
        'trainees' => 'TraineeController',
        'exams' => 'ExamController',
        'scores' => 'ScoreController'
    ]);
});
