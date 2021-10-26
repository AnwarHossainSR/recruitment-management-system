<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Generator as Faker;

class ScoreTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        DB::table('scores')->insert([
            'marks' => $faker->numberBetween(25, 40),
            'total' => 40,
            'exam_id' => 1,
            'trainee_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('scores')->insert([
            'marks' => $faker->numberBetween(25, 40),
            'total' => 40,
            'exam_id' => 2,
            'trainee_id' => 2,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('scores')->insert([
            'marks' => $faker->numberBetween(25, 40),
            'total' => 40,
            'exam_id' => 3,
            'trainee_id' => 3,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        factory(App\Score::class, 2)->create();
    }
}
