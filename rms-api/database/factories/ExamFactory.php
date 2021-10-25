<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Exam;
use App\Training;
use Faker\Generator as Faker;

$factory->define(Exam::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence(1, true),
        'slug' => $faker->unique()->slug,
        'training_id' => $faker->randomElement(Training::where('status', 'active')->pluck('id')->toArray()),
        'exam_date' => now(),
        'created_at' => now(),
        'updated_at' => now()
    ];
});
