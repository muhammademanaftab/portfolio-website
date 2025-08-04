<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'tech_stack',
        'features',
        'icon',
        'icon_color',
        'github_url',
        'live_url',
        'image_url',
        'is_featured',
        'order'
    ];

    protected $casts = [
        'tech_stack' => 'array',
        'features' => 'array',
        'is_featured' => 'boolean'
    ];

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('order', 'asc');
    }
} 