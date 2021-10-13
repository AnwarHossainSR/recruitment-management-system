<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobCategoriesTable extends Migration
{
    //dt->toFormattedDateString()
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_categories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->unique();
            $table->string('slug')->unique();
            $table->string('icon')->deafult('http://localhost:8000/files/categories/default.png')->nullable();
            $table->enum('status', ['active', 'inactive', 'running'])->default('active');
            $table->timestamp('period_start')->default(now());
            $table->timestamp('period_end')->default(now()->addMonth(3));
            $table->unsignedBigInteger('job_count')->default(0);
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
        Schema::dropIfExists('job_categories');
    }
}
