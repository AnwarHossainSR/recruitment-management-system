<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trainer extends Model
{
    protected $fillable = [
        'user_id', 'slug', 'cat_id', 'status'
    ];

    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
    public function category()
    {
        return $this->belongsTo('App\JobCategory', 'cat_id');
    }

    public function training()
    {
        return $this->belongsTo(Training::class);
    }
}
