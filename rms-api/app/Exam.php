<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Exam extends Model
{
    protected $fillable = [
        'slug', 'name', 'training_id', 'exam_date'
    ];
    //accessor
    public function getExamDateAttribute($date)
    {
        return $this->created_at->format('d M , Y');
    }
    public function training()
    {
        return $this->belongsTo('App\Training', 'training_id');
    }
}
