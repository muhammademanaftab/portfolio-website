<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PortfolioController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Portfolio API Routes
Route::prefix('portfolio')->group(function () {
    Route::get('/overview', [PortfolioController::class, 'overview']);
    Route::get('/education', [PortfolioController::class, 'education']);
    Route::get('/experience', [PortfolioController::class, 'experience']);
    Route::get('/projects', [PortfolioController::class, 'projects']);
    Route::get('/skills', [PortfolioController::class, 'skills']);
    Route::get('/certifications', [PortfolioController::class, 'certifications']);
    Route::get('/contact', [PortfolioController::class, 'contact']);
}); 