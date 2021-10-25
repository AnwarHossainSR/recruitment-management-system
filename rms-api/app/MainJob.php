<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class MainJob extends Model
{
    protected $fillable = [
        'title', 'slug', 'company', 'location', 'email', 'tag', 'salary', 'close_date', 'cat_id', 'user_id', 'icon', 'description', 'status', 'type', 'is_featured', 'count'
    ];
    public function category()
    {
        return $this->belongsTo('App\JobCategory', 'cat_id');
    }
    public function applications()
    {
        return $this->hasMany('App\Application', 'job_id', 'id');
    }

    public static function filterApplications($data)
    {
        $existData = array();
        foreach ($data as $key => $value) {
            if ($value->applications->count() > 0) {
                array_push($existData, $value);
            }
        }

        return $existData;
    }
    //accessor
    public function getCloseDateAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('Y-m-d');
    }
}
