<?php

namespace App\Http\Controllers\Admin;

use App\Models\Room;
use App\Models\User;
use App\Services\RoomService;
use App\Services\SettingsService;
use App\Services\StatsService;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

/**
 * Elenco e dettaglio dei tavoli. Lo estende User\RoomController, che mostra solo i tavoli dell'utente.
 */
class RoomController extends AdminController
{
    public function __construct(
        protected StatsService $stats,
        protected RoomService $rooms,
        protected SettingsService $settings,
    ) {}

    /** Prefisso dei nomi di rotta (admin.room.index, user.room.index). */
    protected function scope(): string
    {
        return 'admin';
    }

    /** Proprietario a cui limitare i tavoli; null = tutti. */
    protected function owner(): ?User
    {
        return null;
    }

    /** @return Builder<Room> */
    protected function query()
    {
        return Room::query()->when($this->owner(), fn ($q, User $owner) => $q->where('user_id', $owner->id));
    }

    protected function authorizeRoom(Room $room): void
    {
        abort_if($this->owner() && $room->user_id !== $this->owner()->id, 404);
    }

    /** Elenco dei tavoli, filtrabile per stato (aperti per default, scaduti, tutti). */
    public function index(Request $request): View
    {
        $status = in_array($request->query('stato'), ['tutti', 'scaduti'], true) ? $request->query('stato') : 'aperti';

        $query = $this->stats->withCounts($this->query())->with('user')->orderByDesc('last_activity_at');
        if ($status === 'aperti') {
            $query->active();
        } elseif ($status === 'scaduti') {
            $query->expired();
        }

        return view('rooms.index', [
            'scope' => $this->scope(),
            'rooms' => $query->paginate(25)->withQueryString(),
            'status' => $status,
            'counts' => ['aperti' => $this->query()->active()->count(), 'scaduti' => $this->query()->expired()->count()],
            'canCreate' => $this->rooms->canCreateRoom(),
            'limitMessage' => $this->settings->roomsLimitMessage(),
        ]);
    }

    /** Dettaglio di un tavolo: partecipanti e storico completo dei lanci. */
    public function show(Room $room): View
    {
        $this->authorizeRoom($room);

        return view('rooms.show', [
            'scope' => $this->scope(),
            'room' => $room,
            'participants' => $room->participants()->withCount('rolls')->orderBy('id')->get(),
            'rolls' => $room->rolls()->with('participant')->latest('id')->paginate(50),
        ]);
    }

    /** Elimina il tavolo con partecipanti e lanci (cascata nel database). */
    public function destroy(Room $room): RedirectResponse
    {
        $this->authorizeRoom($room);
        $room->delete();

        return redirect()->route($this->scope().'.room.index')->with('deleted', $room->code);
    }
}
