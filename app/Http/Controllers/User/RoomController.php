<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Admin\RoomController as BaseRoomController;
use App\Models\User;

/** Tavoli dell'utente: stessi elenco, filtri e dettaglio dell'admin, limitati ai suoi. */
class RoomController extends BaseRoomController
{
    protected function scope(): string
    {
        return 'user';
    }

    protected function owner(): ?User
    {
        return auth()->user();
    }
}
