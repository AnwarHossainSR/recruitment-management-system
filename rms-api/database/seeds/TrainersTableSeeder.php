<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TrainersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('trainers')->insert([
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'user_id' => 2,
            'cat_id' => 1,
            'status' => 'active',
            'created_at' => Carbon::now()
        ]);
        DB::table('trainers')->insert([
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'user_id' => 3,
            'cat_id' => 3,
            'status' => 'active',
            'created_at' => Carbon::now()
        ]);
        DB::table('trainers')->insert([
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'user_id' => 4,
            'cat_id' => 1,
            'status' => 'active',
            'created_at' => Carbon::now()
        ]);
    }
}
