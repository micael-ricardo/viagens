<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VoarController;

Route::resource('/', VoarController::class);