<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $fillable = [
        'cv', 'slug', 'job_id', 'email',
    ];
    public function Job()
    {
        return $this->belongsTo('App\MainJob');
    }
}
