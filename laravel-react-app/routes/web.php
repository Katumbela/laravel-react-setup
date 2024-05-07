<?php

use App\Http\Controllers\artigos_controller;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/testar-conexao', function () {
    try {
        DB::connection()->getPdo();
        echo "Conexão bem-sucedida!";
    } catch (\Exception $e) {
        die ("Não foi possível conectar ao banco de dados: " . $e->getMessage());
    }
});

Route::get('/get-articles', [artigos_controller::class, 'create'])->name('create');
Route::get('/list-articles', [artigos_controller::class, 'index'])->name('index');
Route::post('/add-articles', [artigos_controller::class, 'store'])->name('store');