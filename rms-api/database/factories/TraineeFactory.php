<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Trainee;
use App\Training;
use App\User;
use Faker\Generator as Faker;

$factory->define(Trainee::class, function (Faker $faker) {
    return [
        'slug' => $faker->unique()->slug(),
        //'user_id' => $faker->randomElement(User::where('status', 'active')->pluck('id')->toArray()),
        'user_id' => $faker->randomElement(User::where('status', 'active')->pluck('id')->toArray()),
        'training_id' => $faker->randomElement(Training::where('status', 'active')->pluck('id')->toArray()),
        'status' => $faker->randomElement(['active', 'inactive']),
        'created_at' => now(),
        'updated_at' => now(),
    ];
});
