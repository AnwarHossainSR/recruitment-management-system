<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class JobCategory extends Model
{
    protected $fillable = [
        'name', 'slug', 'icon', 'status', 'job_count', 'period_start', 'period_end',
    ];
    public function jobs()
    {
        return $this->belongsToMany('App\MainJob')->withTimestamps();
    }
    public function applications()
    {
        return $this->belongsToMany('App\Application')->withTimestamps();
    }
    public function trainers()
    {
        return $this->belongsToMany('App\Application')->withTimestamps();
    }


    //accessor
    public function getPeriodStartAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('Y-m-d');
    }
    public function getPeriodEndAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('Y-m-d');
    }
}
