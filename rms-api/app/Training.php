<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Training extends Model
{
    protected $fillable = [
        'slug', 'trainer_id', 'cat_id', 'status'
    ];

    public function trainers()
    {
        return $this->hasMany(Trainer::class, 'user_id', 'id');
    }
    public function category()
    {
        return $this->belongsTo('App\JobCategory', 'cat_id');
    }
}
