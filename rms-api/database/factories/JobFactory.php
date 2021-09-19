<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Job;
use App\JobCategory;
use App\User;
use Faker\Generator as Faker;

$factory->define(Job::class, function (Faker $faker) {
    return [
        'title' => $this->faker->sentence(3, false),
        'slug' => $this->faker->unique()->slug,
        'company' => $this->faker->randomElement(['Bjit,Dhaka']),
        'location' => $this->faker->address(),
        'email' => $this->faker->unique()->safeEmail(),
        'tag' => $this->faker->randomElement(['software', 'Developer', 'Java', 'Python', 'Laravel', 'PHP']),
        'salary' => $this->faker->numberBetween(30000, 45000),
        'close_date' => $faker->dateTimeBetween('+1 month', '+2 month'),
        'cat_id' => $this->faker->randomElement(JobCategory::where('status', 'active')->pluck('id')->toArray()),
        'user_id' => $this->faker->randomElement(User::where('status', 'active')->pluck('id')->toArray()),
        'icon' => $this->faker->imageUrl(400, 200),
        'description' => $this->faker->sentence(300),
        'status' => $this->faker->randomElement(['active', 'inactive']),
        'type' => $this->faker->randomElement(['full time', 'half time', 'part time']),
        'is_featured' => $this->faker->randomElement([true, false]),
        'created_at' => now(),
        'updated_at' => now(),
    ];
});
