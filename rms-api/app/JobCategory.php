<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class JobCategory extends Model
{
    protected $fillable = [
        'name', 'slug', 'icon', 'job_count', 'period_start', 'period_end',
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
