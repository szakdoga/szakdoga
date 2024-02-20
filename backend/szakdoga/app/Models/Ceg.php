<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ceg extends Model
{
    use HasFactory;
    protected $primaryKey = 'userId';

    protected $fillable = [
        'neve',
        'tel',
        'kapcsNeve',
        'cim',
        'email',
        'userId'
    ];
}
