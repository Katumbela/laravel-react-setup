<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\artigos;
use Illuminate\Http\Request;
use App\Models\User;


class artigos_controller extends Controller
{
    //

    public function index()
    {
        $var = artigos::all();
        #return view('artigos.list', ['res' => $var]);
        return response()->json($var);

    }


    public function addArticle(Request $request)
    {
        $res = artigos::create($request->all());

        // Verifica se o artigo foi criado com sucesso
        if ($res) {
            // Se sim, retorna uma resposta JSON com uma mensagem de sucesso
            return response()->json(['success' => 'Artigo criado com sucesso']);
        } else {
            // Se não, retorna uma resposta JSON com uma mensagem de erro
            return response()->json(['error' => 'Erro ao criar o artigo'], 500);
        }
    }

}