<?php

use App\Http\Controllers\Api\artigos_controller;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApiController;

Route::post("register", [ApiController::class, "register"]);
Route::post("login", [ApiController::class, "login"]);

Route::group([
    "middleware" => ["auth:api"]
], function () {

    Route::get("profile", [ApiController::class, "profile"]);
    Route::get("refresh", [ApiController::class, "refreshToken"]);
    Route::get("logout", [ApiController::class, "logout"]);
    Route::get('list-articles', [artigos_controller::class, 'index']);
    Route::post('add-articles', [artigos_controller::class, 'addArticle']);

});