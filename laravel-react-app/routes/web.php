<?php

use App\Http\Controllers\artigos_controller;
use Illuminate\Support\Facades\Route;

Route::get('/{any?}', function () {
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