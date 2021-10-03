<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\JobCategory;
use App\MainJob;
use App\User;
use Faker\Generator as Faker;

$factory->define(MainJob::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(3, false),
        'slug' => $faker->unique()->slug,
        'count' => $faker->numberBetween(0, 5),
        'company' => $faker->randomElement(['Bjit,Dhaka']),
        'location' => $faker->address(),
        'email' => $faker->unique()->safeEmail(),
        'tag' => $faker->randomElement(['software', 'Developer', 'Java', 'Python', 'Laravel', 'PHP']),
        'salary' => $faker->numberBetween(30000, 45000),
        'close_date' => $faker->dateTimeBetween('+1 month', '+2 month'),
        'cat_id' => $faker->randomElement(JobCategory::where('status', 'active')->pluck('id')->toArray()),
        'user_id' => $faker->randomElement(User::where('status', 'active')->pluck('id')->toArray()),
        'icon' => $faker->randomElement(['http://localhost:8000/files/jobs/default.png', 'http://localhost:8000/files/jobs/default1.png', 'http://localhost:8000/files/jobs/default2.png', 'http://localhost:8000/files/jobs/default3.png']),
        'description' => $faker->sentence(300),
        'status' => $faker->randomElement(['active', 'inactive']),
        'type' => $faker->randomElement(['full time', 'half time', 'part time']),
        'is_featured' => $faker->randomElement([true, false]),
        'created_at' => now(),
        'updated_at' => now(),
    ];
});
