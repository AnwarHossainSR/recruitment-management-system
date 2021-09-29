<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Application;
use App\MainJob;
use Faker\Generator as Faker;

$factory->define(Application::class, function (Faker $faker) {
    return [
        'email' => $faker->unique()->safeEmail(),
        'status' => $faker->randomElement(['accepted', 'rejected', 'pending']),
        'job_id' => $faker->randomElement(MainJob::where('status', 'active')->pluck('id')->toArray()),
        'created_at' => now(),
        'updated_at' => now(),
    ];
});
