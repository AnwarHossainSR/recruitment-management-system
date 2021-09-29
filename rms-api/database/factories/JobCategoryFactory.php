<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\JobCategory;
use Faker\Generator as Faker;


$factory->define(JobCategory::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence(2, true),
        'slug' => $faker->unique()->slug,
        'icon' => $faker->randomElement(['http://localhost:8000/files/categories/default.png', 'http://localhost:8000/files/categories/default1.png', 'http://localhost:8000/files/categories/default2.png', 'http://localhost:8000/files/categories/default3.png']),
        'status' => $faker->randomElement(['active']),
        'job_count' => $faker->numberBetween(0, 10),
        'created_at' => $faker->dateTimeThisYear(),
        'updated_at' => $faker->dateTimeThisYear()
    ];
});
