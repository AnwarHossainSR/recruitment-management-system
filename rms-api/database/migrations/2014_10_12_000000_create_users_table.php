<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('slug')->unique();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->boolean('verify')->default(0);
            $table->string('token')->nullable();
            $table->boolean('is_admin')->default(false);
            $table->string('image')->default('http://localhost:8000/files/users/default.png')->nullable();
            $table->string('status')->default('active');
            $table->string('about')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
