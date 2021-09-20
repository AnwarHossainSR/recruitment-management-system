<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class JobCategory extends Model
{
    protected $fillable = [
        'name', 'slug', 'icon',
    ];
    public function jobs()
    {
        return $this->belongsToMany('App\Job')->withTimestamps();
    }
}
