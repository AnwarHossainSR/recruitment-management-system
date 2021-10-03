<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ApplicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('applications')->insert([
            'email' => 'mahedisr2@gmail.com',
            'slug' => 'unique-slug-dsfdsfgd-vfgdfdhsfdg',
            'status' => 'pending',
            'cv' => 'http://localhost:8000/files/applications/default.pdf',
            'job_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('applications')->insert([
            'email' => 'mahedisr3@gmail.com',
            'slug' => 'unique-slug-dsfdsfsdfdsfgd-vfgdfdhsfdg',
            'status' => 'accepted',
            'cv' => 'http://localhost:8000/files/applications/default.pdf',
            'job_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('applications')->insert([
            'email' => 'mahedisr4@gmail.com',
            'slug' => 'uniqsdsfdfue-slug-dsfdfdgsfgd-vfgdfdhsfdg',
            'status' => 'rejected',
            'cv' => 'http://localhost:8000/files/applications/default.pdf',
            'job_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        factory(App\Application::class, 20)->create();
    }
}
