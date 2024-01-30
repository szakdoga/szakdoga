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
        $kovetelmeny->cegId = $request->cegId;
        $kovetelmeny->szakId = $request->szakId;
        $kovetelmeny->save();

        return $kovetelmeny;
    }

    public function show($id)
    {
        return Kovetelmeny::find($id);
    }

    public function update(Request $request, $id)
    {
        $kovetelmeny = Kovetelmeny::find($id);
        if ($kovetelmeny) {
            $kovetelmeny = new Kovetelmeny();
            $kovetelmeny->cegId = $request->cegId;
            $kovetelmeny->szakId = $request->szakId;
            
            $kovetelmeny->save();
        }

        return $kovetelmeny;
    }

}
