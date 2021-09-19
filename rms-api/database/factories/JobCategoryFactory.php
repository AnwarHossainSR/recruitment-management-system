<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\JobCategory;
use Faker\Generator as Faker;


$factory->define(JobCategory::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence(2, true),
        'slug' => $faker->unique()->slug,
        'icon' => $faker->imageUrl(100, 100),
        'status' => $faker->randomElement(['active', 'inactive']),
        'job_count' => $faker->numberBetween(0, 10),
        'created_at' => $faker->dateTimeThisYear(),
        'updated_at' => $faker->dateTimeThisYear()
    ];
});
