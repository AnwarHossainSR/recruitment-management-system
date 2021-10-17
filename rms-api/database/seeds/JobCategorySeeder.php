<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class JobCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('job_categories')->insert([
            'name' => "Web",
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'status' => 'active',
            'icon' => 'http://localhost:8000/files/categories/default.png',
            'job_count' => 2,
            'period_start' => now(),
            'period_end' => now()->addMonth(3),
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('job_categories')->insert([
            'name' => "Odoo",
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'status' => 'active',
            'icon' => 'http://localhost:8000/files/categories/default1.png',
            'job_count' => 2,
            'period_start' => now(),
            'period_end' => now()->addMonth(3),
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('job_categories')->insert([
            'name' => "Salseforce",
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'status' => 'active',
            'icon' => 'http://localhost:8000/files/categories/default2.png',
            'job_count' => 2,
            'period_start' => now(),
            'period_end' => now()->addMonth(3),
            'created_at' => now(),
            'updated_at' => now()
        ]);
        factory(App\JobCategory::class, 15)->create();
    }
}
