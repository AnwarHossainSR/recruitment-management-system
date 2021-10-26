<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    protected $fillable = [
        'marks', 'total', 'exam_id', 'trainee_id'
    ];

    public function trainee()
    {
        return $this->belongsTo(Trainee::class, 'trainee_id');
    }
    public function exam()
    {
        return $this->belongsTo(Exam::class, 'exam_id');
    }
}
