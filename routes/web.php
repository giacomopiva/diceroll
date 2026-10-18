<?php

use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;
use Lab404\Impersonate\Controllers\ImpersonateController;

/**
 * Rotte utente non autenticato
 */
Route::get('/', [App\Http\Controllers\Table\HomeController::class, 'index'])->name('home');

/**
 * Tavolo dei dadi: stanze usa-e-getta raggiungibili dal link, senza account.
 */
Route::post('/rooms', [App\Http\Controllers\Table\HomeController::class, 'store'])
    ->middleware('throttle:20,1')->name('rooms.store');
Route::get('/t/{room}', [App\Http\Controllers\Table\TableController::class, 'show'])
    ->where('room', App\Models\Room::CODE_PATTERN)->name('table.show');
Route::post('/t/{room}/join', [App\Http\Controllers\Table\TableController::class, 'join'])
    ->where('room', App\Models\Room::CODE_PATTERN)->middleware('throttle:20,1')->name('table.join');
Route::post('/t/{room}/rolls', [App\Http\Controllers\Table\RollController::class, 'store'])
    ->where('room', App\Models\Room::CODE_PATTERN)->middleware('throttle:60,1')->name('table.rolls.store');
Route::post('/t/{room}/heartbeat', [App\Http\Controllers\Table\PresenceController::class, 'heartbeat'])
    ->where('room', App\Models\Room::CODE_PATTERN)->middleware('throttle:30,1')->name('table.heartbeat');
Route::post('/t/{room}/leave', [App\Http\Controllers\Table\PresenceController::class, 'leave'])
    ->where('room', App\Models\Room::CODE_PATTERN)->middleware('throttle:30,1')->name('table.leave');

Route::get('/welcome', function () {
    return view('welcome');
});

/**
 * Rotte per il blog (FlexStart) — contenuto statico, link fissi, nessuna tabella dati
 */
Route::get('/blog', function () {
    return view('blog.index');
})->name('blog');

Route::get('/blog/articolo', function () {
    return view('blog.show');
})->name('blog.show');

/**
 * Rotte per l'autenticazione
 *
 * Per abilitare il reset della password, impostare il valore 'reset' a true
 * Per abilitare la registrazione di un nuovo utente, impostare il valore 'register' a true
 * Per abilitate la conferma della registrazione, impostare il valore 'confirm' a true ???
 * Per abilitare la verifica dell'email, impostare il valore 'verify' a true ???
 *
 * I template sono:
 * resources/views/admin/user/email/account-confirmation.blade.php
 * resources/views/emails/verify-email.blade.php
 * resources/views/emails/reset-password.blade.php
 */
Auth::routes([
    'reset' => true, // lasciare sempre a true
    'register' => true, // registrazione
    'confirm' => true, // conferma registrazione
    'verify' => true,  // verifica email e attivazione
]);

// Rotta personalizzata per il logout
Route::get('/logout', [LoginController::class, 'logout'])->name('logout');

// Fine delle rotte per la gestione dell'autenticazione

/**
 * Rotte per l'utente Admin
 */
Route::get('/admin', function () {
    return redirect('/admin/home');
});

Route::middleware(['auth', 'role:admin', 'status'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');

    // Gestione utenti
    Route::resource('user', UserController::class)->except(['show']);
    Route::prefix('user')->scopeBindings()->name('user.')->group(function () {
        // Rotte personalizzate gestione utenti
        Route::post('/list', [UserController::class, 'list'])->name('list');
        Route::get('/{user}/print', [UserController::class, 'print'])->name('print');
        Route::get('/exportToExcel', [UserController::class, 'exportToExcel'])->name('exportToExcel');
        Route::get('/import', [UserController::class, 'showImport'])->name('showImport');
        Route::post('/import', [UserController::class, 'import'])->name('import');
    });

    // Impersonate "login come" un utente — solo un admin può avviarla
    Route::get('/impersonate/take/{id}/{guardName?}', [ImpersonateController::class, 'take'])->name('impersonate');
});

// Impersonate: uscita raggiungibile da qualsiasi utente autenticato, dato che
// durante l'impersonificazione la sessione attiva è quella dell'utente
// impersonato (che potrebbe non avere il ruolo admin né passare 'status').
Route::middleware(['auth'])->group(function () {
    Route::get('/impersonate/leave', [ImpersonateController::class, 'leave'])->name('impersonate.leave');
});

/**
 * Rotte per l'utente User
 */
Route::get('/user', function () {
    return redirect('/user/home');
});

Route::middleware(['auth', 'role:user', 'status'])->prefix('user')->name('user.')->group(function () {
    Route::get('/home', [App\Http\Controllers\User\HomeController::class, 'index'])->name('home');
});
