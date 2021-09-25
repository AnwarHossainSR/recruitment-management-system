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
    }
}
