<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TraineeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('trainees')->insert(
            [
                'slug' => strtolower(str_replace('', '_', Str::random(15))),
                'user_id' => 5,
                'training_id' => 1,
                'status' => 'active',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]
        );
        DB::table('trainees')->insert([
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'user_id' => 6,
            'training_id' => 2,
            'status' => 'active',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('trainees')->insert([
            'slug' => strtolower(str_replace('', '_', strtolower(str_replace('', '_', Str::random(15))))),
            'user_id' => 7,
            'training_id' => 3,
            'status' => 'active',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);


        factory(App\Trainee::class, 40)->create();
    }
}
