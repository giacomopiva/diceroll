<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class StatusMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->check() && ! auth()->user()->status) {
            auth()->logout();

            return redirect('login')->withErrors(['disabled' => 'Il tuo account è stato disabilitato.']);
        }

        return $next($request);
    }
}
