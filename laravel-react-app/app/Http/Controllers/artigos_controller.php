<?php

namespace App\Http\Controllers;

use App\Models\artigos;
use Illuminate\Http\Request;

class artigos_controller extends Controller
{
    //

    public function index()
    {
        $var = artigos::all();
        #return view('artigos.list', ['res' => $var]);
        return response()->json($var);

    }


    public function create()
    {

        return view('artigos.artigos');
    }

    public function store(Request $request)
    {
        $res = artigos::create($request->all());

        # return view('artigos.artigos', ['res' => $res]);
        return redirect()->route('create')->with('success', 'Tarefa criada com sucesso!');
    }
}