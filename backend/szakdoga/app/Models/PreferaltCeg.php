<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreferaltCeg extends Model
{
    use HasFactory;

    protected $fillable = [
        'diakId',
        'cegId',
    ];

    protected function setKeysForSaveQuery($query)
    {
        $query
            ->where('diakId', '=', $this->getAttribute('userId'))
            ->where('cegId', '=', $this->getAttribute('userId'));
        return $query;
    }
}
