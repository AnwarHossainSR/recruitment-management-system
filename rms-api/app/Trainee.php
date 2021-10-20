<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trainee extends Model
{
    protected $fillable = [
        'slug', 'user_id', 'training_id', 'status'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function training()
    {
        return $this->belongsTo(Training::class, 'training_id');
    }

    //get trainee per month
    public static function getTraineePerMonth()
    {
        $month = array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        for ($i = 1; $i < 13; $i++) {
            $month[$i - 1] = self::whereMonth('created_at', $i)->count();
        }
        return \json_encode($month);
    }
}
