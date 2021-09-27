<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('company');
            $table->string('location');
            $table->string('email');
            $table->string('tag')->nullable();
            $table->float('salary', 10, 2)->default(0.00);
            $table->date('close_date')->default(now());
            $table->unsignedBigInteger('cat_id')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('icon')->default('http://localhost:8000/images/icons/default.png');
            $table->longText('description')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->enum('type', ['full time', 'half time', 'part time'])->default('full time');
            $table->boolean('is_featured')->default(true);
            $table->foreign('cat_id')->references('id')->on('job_categories')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('SET NULL');
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
        Schema::dropIfExists('jobs');
    }
}