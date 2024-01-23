<?php

namespace App\Http\Controllers;

use App\Models\Jogosultsag;
use Illuminate\Http\Request;

class JogosultsagController extends Controller
{
    public function index()
    {
        return Jogosultsag::all();
    }

    public function store(Request $request)
    {
        $jogosultsag = new Jogosultsag();
        $jogosultsag->megnevezes = $request->megnevezes;
        $jogosultsag->save();

        return $jogosultsag;
    }

    public function show($id)
    {
        return Jogosultsag::find($id);
    }

    public function update(Request $request, $id)
    {
        $jogosultsag = Jogosultsag::find($id);
        if ($jogosultsag) {
            $jogosultsag->megnevezes = $request->megnevezes;
            $jogosultsag->save();
        }

        return $jogosultsag;
    }

    public function destroy($id)
    {
        $jogosultsag = Jogosultsag::find($id);
        if ($jogosultsag) {
            $jogosultsag->delete();
        }
    }
}
