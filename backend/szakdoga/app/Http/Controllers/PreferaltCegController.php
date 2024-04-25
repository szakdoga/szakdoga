<?php

namespace App\Http\Controllers;

use App\Models\PreferaltCeg;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PreferaltCegController extends Controller
{

    public function index()
    {
        return PreferaltCeg::all();
    }

    public function store($diakId, $cegId)
    {
        $preferalt = new PreferaltCeg();
        $preferalt->diakId = $diakId;
        $preferalt->cegId = $cegId;
        $preferalt->save();

        return $preferalt;
    }

    public function show($diakId, $cegId)
    {
        return PreferaltCeg::where('diakId', $diakId)->where('cegId', $cegId)->first();
    }

    public function update(Request $request, $diakId, $cegId)
    {
        $preferalt = PreferaltCeg::where('diakId', $diakId)->where('cegId', $cegId)->first();
        if ($preferalt) {
            $preferalt->diakId = $request->diakId;
            $preferalt->cegId = $request->cegId;
            $preferalt->save();
        }
        return $preferalt;
    }

    public function preferaltCegTabla()
    {
        $results = DB::table('preferalt_cegs')
            ->join('diaks', 'preferalt_cegs.diakId', '=', 'diaks.userId')
            ->join('cegs', 'preferalt_cegs.cegId', '=', 'cegs.userId')
            ->select('diaks.nev', 'cegs.neve')
            ->get();

        return response()->json($results);
    }
}
