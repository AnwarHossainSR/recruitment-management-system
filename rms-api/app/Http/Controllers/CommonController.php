<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactFormRequest;
use App\Http\Requests\SubscriberRequest;
use App\Traits\ApiResponseWithHttpStatus;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;


class CommonController extends Controller
{
    use ApiResponseWithHttpStatus;

    public function subscribe(SubscriberRequest $request)
    {
        DB::table('subscribers')->insert([
            'email' => $request->email,
            'status' => true,
            'created_at' => now(),
        ]);
        return $this->apiResponse('subscribed !', null, Response::HTTP_OK, true);
    }
    public function contactStore(ContactFormRequest $request)
    {
        DB::table('contacts')->insert([
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
            'created_at' => now(),
        ]);
        return $this->apiResponse('submited !', null, Response::HTTP_OK, true);
    }
}
