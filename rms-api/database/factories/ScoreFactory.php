<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Exam;
use App\Score;
use App\Trainee;
use App\Training;
use Faker\Generator as Faker;

$factory->define(Score::class, function (Faker $faker) {
    return [
        'marks' => $faker->numberBetween(25, 40),
        'total' => 40,
        'exam_id' => $faker->randomElement(Exam::pluck('id')->toArray()),
        'trainee_id' => $faker->randomElement(Trainee::where('status', 'active')->pluck('id')->toArray()),
        'created_at' => now(),
        'updated_at' => now(),
    ];
});
