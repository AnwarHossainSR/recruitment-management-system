<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

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
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'status' => 'pending',
            'cv' => 'http://localhost:8000/files/applications/default.pdf',
            'job_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('applications')->insert([
            'email' => 'mahedisr3@gmail.com',
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'status' => 'accepted',
            'cv' => 'http://localhost:8000/files/applications/default.pdf',
            'job_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('applications')->insert([
            'email' => 'mahedisr4@gmail.com',
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'status' => 'rejected',
            'cv' => 'http://localhost:8000/files/applications/default.pdf',
            'job_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        factory(App\Application::class, 20)->create();
    }
}
