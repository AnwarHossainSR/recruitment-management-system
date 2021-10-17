<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trainee extends Model
{
    protected $fillable = [
        'slug', 'user_id', 'training_id', 'status'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function training()
    {
        return $this->belongsTo(Training::class, 'training_id');
    }
}
