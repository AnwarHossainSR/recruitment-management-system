<?php

namespace App\Http\Helpers;

class Helper
{
    public static function removeImage($object)
    {
        $array = explode("/", $object->image);
        $photo = last($array);
        $existPhoto = '/files/' . $array[4] . '/' . $photo;
        $path = str_replace('\\', '/', public_path());
        if ($photo != "default.png" && $photo != "default1.png" && $photo != "default2.png" && $photo != "default3.png") {
            if (file_exists($path . $existPhoto)) {
                \unlink($path . $existPhoto);
                return true;
            }
        }
        return false;
    }
}
