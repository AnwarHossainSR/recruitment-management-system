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
        return $this->belongsToMany('App\MainJob')->withTimestamps();
    }
    public function applications()
    {
        return $this->belongsToMany('App\Application')->withTimestamps();
    }
}
