<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kovetelmeny extends Model
{
    use HasFactory;

    protected $primaryKey = 'cegId';
    
    protected $fillable = [
        'cegId',
        'szakId',
        'fo'
    ];
}
