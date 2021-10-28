<?php

namespace App\Http\Controllers;

use App\Traits\ApiResponseWithHttpStatus;
use App\User;
use Exception;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

//use Laravel\Socialite\Facades\Socialite;
//use Socialite;

class SocialAuthController extends Controller
{
    use ApiResponseWithHttpStatus;

    public function gitRedirect()
    {
        return Socialite::driver('github')->stateless()->redirect();
    }

    public function gitCallback()
    {
        try {
            $user = Socialite::driver('github')->stateless()->user();
            return $this->apiResponse('authentication success', $user, Response::HTTP_OK, true);
            $searchUser = User::where('auth_user_id', $user->id)->first();
            if ($searchUser) {
                if ($searchUser->verify == false) {
                    return $this->apiResponse('success', null, Response::HTTP_FORBIDDEN, true);
                }
                Auth::login($searchUser);
                $authUser = Auth::user();
                $token = $authUser->createToken('app')->accessToken;
                return $this->apiResponse('authentication success', $token, Response::HTTP_OK, true);
            } else {
                $data['user'] = User::create([
                    'name' => $user->name,
                    'image' => $user->avatar,
                    'email' => $user->email,
                    'auth_user_id' => $user->id,
                    'auth_type' => 'github',
                    'is_admin' => true,
                    'verify' => false,
                    'status' => 'active',
                    'password' => encrypt('gitpwd059')
                ]);
                return $this->apiResponse('success', $data, Response::HTTP_CREATED, true);
            }
        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}
