<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => "Anwar Hossain",
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'email' => 'mahedisr@gmail.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'is_admin' => true,
            'verify' => true,
            'image' => 'http://localhost:8000/files/users/default.png',
            'status' => 'active',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('users')->insert([
            'name' => "Nani Gopal",
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'email' => 'nani@gmail.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'is_admin' => true,
            'verify' => true,
            'image' => 'http://localhost:8000/files/users/default.png',
            'status' => 'active',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('users')->insert([
            'name' => "Shamsus Salehin",
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'email' => 'salehin@gmail.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'is_admin' => true,
            'verify' => true,
            'image' => 'http://localhost:8000/files/users/default.png',
            'status' => 'active',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('users')->insert([
            'name' => "Mahbub Hossain",
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'email' => 'mahbub@gmail.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'is_admin' => true,
            'verify' => true,
            'image' => 'http://localhost:8000/files/users/default.png',
            'status' => 'active',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('users')->insert([
            'name' => "Mahedi Hasan",
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'email' => 'mahedisr2@gmail.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'is_admin' => false,
            'image' => 'http://localhost:8000/files/users/default.png',
            'status' => 'active',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('users')->insert([
            'name' => "Jahid Mahbub",
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'email' => 'jahid@gmail.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'is_admin' => false,
            'image' => 'http://localhost:8000/files/users/default.png',
            'status' => 'active',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('users')->insert([
            'name' => "Shakil Ahmed",
            'slug' => strtolower(str_replace('', '_', Str::random(15))),
            'email' => 'shakil@gmail.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'is_admin' => false,
            'image' => 'http://localhost:8000/files/users/default.png',
            'status' => 'active',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        factory(App\User::class, 50)->create();
    }
}
