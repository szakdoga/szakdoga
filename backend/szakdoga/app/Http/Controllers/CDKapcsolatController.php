<?php

namespace App\Http\Controllers;

use App\Models\CDKapcsolat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public function show($diakId, $cegId)
    {
        return CDKapcsolat::where('diakId', $diakId)->where('cegId', $cegId)->first();
    }

    public function update(Request $request, $diakId, $cegId)
    {
        $cdKapcs = CDKapcsolat::where('diakId', $diakId)->where('cegId', $cegId)->first();
        if ($cdKapcs) {
            $cdKapcs->diakId = $request->diakId;
            $cdKapcs->cegId = $request->cegId;
            $cdKapcs->save();
        }

        return $cdKapcs;
    }

    public function destroy($diakId, $cegId)
    {
        $cdKapcs = CDKapcsolat::where('diakId', $diakId)->where('cegId', $cegId)->first();
        if ($cdKapcs) {
            $cdKapcs->delete();
        }
    }

    public function cdNevek()
    {
        $cdNevek = DB::table('c_d_kapcsolats')
            ->join('cegs', 'c_d_kapcsolats.cegId', '=', 'cegs.userId')
            ->join('diaks', 'c_d_kapcsolats.diakId', '=', 'diaks.userId')
            ->select('cegs.neve as Ceg_nev','diaks.nev as Diak_nev')
            ->get();

        return response()->json($cdNevek);
    }
}
