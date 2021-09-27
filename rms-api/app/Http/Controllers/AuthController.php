<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Traits\ApiResponseWithHttpStatus;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use App\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    use ApiResponseWithHttpStatus;
    public function login(LoginRequest $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken('app')->accessToken;
            return $this->apiResponse('authentication success', $token, Response::HTTP_OK, true);
        } else {
            return $this->apiResponse(
                'Invalid email or password',
                null,
                Response::HTTP_OK,
                false
            );
        }
    }

    public function authenticatedUser()
    {
        return  Auth::user();
    }

    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        return $this->apiResponse('register success', $user, Response::HTTP_OK, true);
    }

    public function logout()
    {
        $user = Auth::user()->token();
        $user->revoke();
        return $this->apiResponse('logout success', $user, Response::HTTP_OK, true);
    }
}
