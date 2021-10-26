<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //\App\JobCategory::factory(20)->create();
        $this->call(UsersTableSeeder::class);
        $this->call(JobCategorySeeder::class);
        $this->call(JobTableSeeder::class);
        $this->call(ApplicationSeeder::class);
        $this->call(TrainersTableSeeder::class);
        $this->call(TrainingTableSeeder::class);
        $this->call(TraineeTableSeeder::class);
        $this->call(ExamTableSeeder::class);
        $this->call(ScoreTableSeeder::class);
    }
}
