<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('main_jobs')->insert([
            'title' => 'Software Engineer',
            'slug' => 'soft-eng',
            'count' => 4,
            'company' => 'BJIT',
            'location' => 'Bjit,Dhaka',
            'email' => 'bjit123@gmail.com',
            'tag' => 'php',
            'salary' => 35000,
            'close_date' => '2021-12-03 11:02:43',
            'cat_id' => '1',
            'user_id' => '1',
            'icon' => 'http://localhost:8000/files/jobs/default.png',
            'description' => 'Test Description',
            'status' => 'active',
            'type' => 'full time',
            'is_featured' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('main_jobs')->insert([
            'title' => 'Java Developer',
            'slug' => 'soft-eng-java',
            'count' => 6,
            'company' => 'BJIT',
            'location' => 'Bjit,Dhaka',
            'email' => 'bjit123@gmail.com',
            'tag' => 'php',
            'salary' => 35000,
            'close_date' => '2021-12-03 11:02:43',
            'cat_id' => '1',
            'user_id' => '1',
            'icon' => 'http://localhost:8000/files/jobs/default.png',
            'description' => 'Test Description',
            'status' => 'active',
            'type' => 'full time',
            'is_featured' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('main_jobs')->insert([
            'title' => 'Laravel Developer',
            'slug' => 'soft-eng-laravel',
            'count' => 4,
            'company' => 'BJIT',
            'location' => 'Bjit,Dhaka',
            'email' => 'bjit123@gmail.com',
            'tag' => 'php',
            'salary' => 35000,
            'close_date' => '2021-12-03 11:02:43',
            'cat_id' => '1',
            'user_id' => '1',
            'icon' => 'http://localhost:8000/files/jobs/default.png',
            'description' => 'Test Description',
            'status' => 'active',
            'type' => 'full time',
            'is_featured' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        factory(App\MainJob::class, 100)->create();
    }
}
