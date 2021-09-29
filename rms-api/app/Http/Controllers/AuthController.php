<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Jobs\ResetPasswordJob;
use App\Traits\ApiResponseWithHttpStatus;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;


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
        return $this->apiResponse('logout success', null, Response::HTTP_OK, true);
    }

    public function forgotPassword(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if ($user) {
            $token = Str::random(30);
            $details = ['name' => $user->name, 'token' => $token, 'email' => Crypt::encryptString($user->email)];
            if (dispatch(new ResetPasswordJob($details))) {

                DB::table('password_resets')->insert([
                    'email' => $request->email,
                    'token' => $token,
                    'created_at' => now()
                ]);
                return $this->apiResponse('Reset password link has been sent to your email !', null, Response::HTTP_OK, true);
            }
        } else {
            return $this->apiResponse('User does not exists', null, Response::HTTP_OK, false);
        }
    }

    public function forgotPasswordUpdate(Request $request)
    {
        $email = Crypt::decryptString($request->email);

        $user = DB::table('password_resets')->where([['email', $email], ['token', $request->token]])->first();
        if (!$user) {
            return $this->apiResponse('Sorry ! your token is not valid', null, Response::HTTP_OK, false);
        } else {
            $data = User::where('email', $email)->first();
            $data->update([
                'password' => Hash::make($request->password)
            ]);
            DB::table('password_resets')->where('email', $email)->delete();
            return $this->apiResponse('password updated successfully !', null, Response::HTTP_OK, true);
        }
    }
}
