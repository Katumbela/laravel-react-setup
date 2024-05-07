<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class artigos extends Model
{
    use HasFactory;
    protected $fillable = [
        'titulo',
        'post',
    ];
}