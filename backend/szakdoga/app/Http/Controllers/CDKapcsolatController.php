<?php

namespace App\Http\Controllers;

use App\Models\CDKapcsolat;
use Illuminate\Http\Request;

class CDKapcsolatController extends Controller
{
    
    public function index()
    {
        return CDKapcsolat::all();
    }

    public function store(Request $request)
    {
        $cdKapcs = new CDKapcsolat();
        $cdKapcs->diakId = $request->diakId;
        $cdKapcs->cegId = $request->cegId;
        $cdKapcs->save();

        return $cdKapcs;
    }

    public function show($id)
    {
        return CDKapcsolat::find($id);
    }

    public function update(Request $request, $id)
    {
        $cdKapcs = CDKapcsolat::find($id);
        if ($cdKapcs) {
            $cdKapcs->diakId = $request->diakId;
            $cdKapcs->cegId = $request->cegId;
            $cdKapcs->save();
        }

        return $cdKapcs;
    }

    public function destroy($id)
    {
        $cdKapcs = CDKapcsolat::find($id);
        if ($cdKapcs) {
            $cdKapcs->delete();
        }
    }
}
