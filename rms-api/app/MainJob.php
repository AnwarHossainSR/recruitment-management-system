<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MainJob extends Model
{
    protected $fillable = [
        'title', 'slug', 'company', 'location', 'email', 'tag', 'salary', 'close_date', 'cat_id', 'user_id', 'icon', 'description', 'status', 'type', 'is_featured', 'count'
    ];
    public function category()
    {
        return $this->belongsTo('App\JobCategory');
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
}
