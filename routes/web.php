<?php

use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\RoomController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Table\PresenceController;
use App\Http\Controllers\Table\RollController;
use App\Http\Controllers\Table\TableController;
use App\Models\Room;
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
Route::prefix('/t/{room}')->where(['room' => Room::CODE_PATTERN])
    ->middleware('room.active')->name('table.')->group(function () {
        Route::get('/', [TableController::class, 'show'])->name('show');
        Route::post('/join', [TableController::class, 'join'])
            ->middleware('throttle:20,1')->name('join');
        Route::post('/rolls', [RollController::class, 'store'])
            ->middleware('throttle:60,1')->name('rolls.store');
        Route::post('/heartbeat', [PresenceController::class, 'heartbeat'])
            ->middleware('throttle:30,1')->name('heartbeat');
        Route::post('/leave', [PresenceController::class, 'leave'])
            ->middleware('throttle:30,1')->name('leave');
        Route::post('/exit', [TableController::class, 'exit'])
            ->middleware('throttle:20,1')->name('exit');
    });

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

    // Tavoli dei dadi: elenco e storico dei lanci
    Route::get('/tables', [RoomController::class, 'index'])->name('room.index');
    Route::get('/tables/{room}', [RoomController::class, 'show'])
        ->where('room', Room::CODE_PATTERN)->name('room.show');

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
