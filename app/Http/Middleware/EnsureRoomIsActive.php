<?php

namespace App\Http\Middleware;

use App\Models\Room;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/** Un tavolo scaduto non è più raggiungibile (410), né da pagina né dalle chiamate AJAX. */
class EnsureRoomIsActive
{
    public function handle(Request $request, Closure $next): Response
    {
        $room = $request->route('room');

        if ($room instanceof Room && $room->isExpired()) {
            return $request->expectsJson()
                ? response()->json(['message' => 'Tavolo scaduto.'], 410)
                : response()->view('table.expired', ['room' => $room], 410);
        }

        return $next($request);
    }
}
