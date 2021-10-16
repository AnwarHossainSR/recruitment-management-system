<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TrainingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('trainings')->insert([
            'slug' => Str::random(15),
            'trainer_id' => 1,
            'cat_id' => 1,
            'status' => 'active',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('trainings')->insert([
            'slug' => Str::random(15),
            'trainer_id' => 2,
            'cat_id' => 3,
            'status' => 'active',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('trainings')->insert([
            'slug' => Str::random(15),
            'trainer_id' => 3,
            'cat_id' => 1,
            'status' => 'active',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
