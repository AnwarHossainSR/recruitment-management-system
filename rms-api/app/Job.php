<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $fillable = [
        'title', 'slug', 'company', 'location', 'email', 'tag', 'salary', 'close_date', 'cat_id', 'user_id', 'icon', 'description', 'status', 'type', 'is_featured'
    ];
    public function category()
    {
        return $this->belongsTo('App\JobCategory');
    }
}
