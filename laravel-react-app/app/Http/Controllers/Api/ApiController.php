<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class ApiController extends Controller
{
    // Register API - POST (name, email, password)
    public function register(Request $request)
    {
        try {
            // Validation
            $request->validate([
                "name" => "required|string",
                "email" => "required|string|email|unique:users",
                "password" => "required|confirmed" // password_confirmation
            ]);

            // User model to save user in database
            User::create([
                "name" => $request->name,
                "email" => $request->email,
                "password" => bcrypt($request->password)
            ]);

            return response()->json([
                "status" => true,
                "message" => "User registered successfully",
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Handle validation errors
            $errors = $e->validator->errors()->messages();
            return response()->json([
                "status" => false,
                "message" => "Validation failed",
                "errors" => $errors
            ], 422);
        } catch (\Exception $e) {
            // Handle other unexpected errors
            return response()->json([
                "status" => false,
                "message" => "An unexpected error occurred",
            ], 500);
        }
    }


    // Login API - POST (email, password)
    public function login(Request $request)
    {
        try {
            // Validation
            $request->validate([
                "email" => "required|email",
                "password" => "required"
            ]);

            $token = auth()->attempt([
                "email" => $request->email,
                "password" => $request->password
            ]);

            if (!$token) {
                return response()->json([
                    "status" => false,
                    "message" => "Invalid login details"
                ]);
            }

            return response()->json([
                "status" => true,
                "message" => "User logged in successfully",
                "token" => $token,
                "expires_in" => auth()->factory()->getTTL() * 60
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Handle validation errors
            $errors = $e->validator->errors()->messages();
            return response()->json([
                "status" => false,
                "message" => "Validation failed",
                "errors" => $errors
            ], 422);
        } catch (\Exception $e) {
            // Handle other unexpected errors
            return response()->json([
                "status" => false,
                "message" => "An unexpected error occurred",
            ], 500);
        }
    }


    // Profile API - GET (JWT Auth Token)
    public function profile()
    {

        $userData = auth()->user();
        //$userData = request()->user();

        return response()->json([
            "status" => true,
            "message" => "Profile data",
            "data" => $userData,
            "user_id" => request()->user()->id,
            "email" => request()->user()->email
        ]);
    }

    // Refresh Token API - GET (JWT Auth Token)
    public function refreshToken()
    {

        $token = auth()->refresh();

        return response()->json([
            "status" => true,
            "message" => "New access token",
            "token" => $token,
            //"expires_in" => auth()->factory()->getTTL() * 60
        ]);
    }

    // Logout API - GET (JWT Auth Token)
    public function logout()
    {

        auth()->logout();

        return response()->json([
            "status" => true,
            "message" => "User logged out successfully"
        ]);
    }
}