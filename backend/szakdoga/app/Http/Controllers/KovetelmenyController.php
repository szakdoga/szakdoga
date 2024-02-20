<?php

namespace App\Http\Controllers;

use App\Models\Kovetelmeny;
use Illuminate\Http\Request;

class KovetelmenyController extends Controller
{
    public function index()
    {
        return Kovetelmeny::all();
    }


    public function store(Request $request)
    {
        $kovetelmeny = new Kovetelmeny();
        $kovetelmeny->fill($request->all());
        $kovetelmeny->save();

        return $kovetelmeny;
    }

    public function show($cegId)
    {
        return Kovetelmeny::where('cegId', $cegId)->get();
    }

    public function update(Request $request, $cegId)
    {

        $kovetelmeny = Kovetelmeny::find($cegId);
        if ($kovetelmeny) {
            $kovetelmeny->fill($request->all());
            $kovetelmeny->save();
        }

        return $kovetelmeny;
    }
}
