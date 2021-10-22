<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTrainingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trainings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('slug')->unique();
            $table->unsignedBigInteger('cat_id')->nullable();
            $table->unsignedBigInteger('trainer_id')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->foreign('trainer_id')->references('id')->on('trainers')->onDelete('SET NULL');
            $table->foreign('cat_id')->references('id')->on('job_categories')->onDelete('cascade');
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
        Schema::dropIfExists('trainings');
    }
}
