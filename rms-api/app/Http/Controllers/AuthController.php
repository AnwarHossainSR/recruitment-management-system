<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use Exception;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            try {
                /* @var User user */
                $user = Auth::user();
                $token = $user->createToken('app')->accessToken;
                return response()->json([
                    'message' => 'success',
                    'token_type' => 'Bearer',
                    'token' => $token,
                ]);
            } catch (\Exception $th) {
                return response(['message' => $th->getMessage()], 400);
            }
        } else {
            return \response(['message' => 'Invalid email or password'], 401);
        }
    }

    public function authenticatedUser()
    {
        return  Auth::user();
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }
        try {
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                // 'is_admin' => true,
                // 'status' => 'active',
            ]);
            return \response([
                'message' => 'success'
            ], 201);
        } catch (Exception $th) {
            return \response([
                'message' => $th->getMessage(),
            ], 400);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return  response([
            'message' => 'success'
        ]);
    }
}
