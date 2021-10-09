<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trainer extends Model
{
    protected $fillable = [
        'user_id', 'cat_id', 'status'
    ];

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
    public function category()
    {
        return $this->belongsTo('App\JobCategory', 'cat_id');
    }
}
