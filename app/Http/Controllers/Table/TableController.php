<?php

namespace App\Http\Controllers\Table;

use App\Http\Controllers\Controller;
use App\Http\Requests\JoinRoomRequest;
use App\Models\Room;
use App\Services\AppearanceService;
use App\Services\PresenceService;
use App\Services\RoomService;
use App\Services\SettingsService;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class TableController extends Controller
{
    public function __construct(private RoomService $rooms, private PresenceService $presence, private SettingsService $settings, private AppearanceService $appearance) {}

    public function show(Request $request, Room $room): View
    {
        $participant = $this->rooms->currentParticipant($room, $request);

        if (! $participant) {
            return view('table.join', ['room' => $room, 'taken' => $this->rooms->takenColors($room), 'full' => $this->rooms->isFull($room), 'fullMessage' => $this->rooms->fullMessage($room)]);
        }

        $this->presence->heartbeat($participant);
        $room->touchActivity();

        // Ultimi lanci per chi entra a partita iniziata, dal più vecchio al più recente.
        // Quanti: history_limit delle impostazioni. Il client barra i dadi rilanciati dal `reroll_of` dei rilanci
        // presenti: se l'originale è nello storico e il suo rilancio no, il caso è raro e il dado non risulta barrato.
        $history = $room->rolls()->with('participant')->latest('id')->limit($this->settings->historyLimit($room))->get()
            ->reverse()->values()->map(fn ($roll) => $roll->toPayload());

        $owner = $room->user;
        $logo = $owner && $this->appearance->exists($owner->table_logo_path)
            ? ['url' => route('table.logo', $room).'?v='.substr(md5($owner->table_logo_path), 0, 8), 'position' => $owner->table_logo_position ?? 'left', 'vertical' => $owner->table_logo_vertical ?? 'top', 'size' => $owner->table_logo_size ?? 100]
            : null;

        return view('table.show', ['room' => $room, 'participant' => $participant, 'history' => $history, 'logo' => $logo,
            'historyLimit' => $this->settings->historyLimit($room),
            'players' => $this->presence->online($room)->map->toPayload()]);
    }

    /** Immagine che il proprietario ha messo nell'intestazione del tavolo. */
    public function logo(Room $room)
    {
        $path = $room->user?->table_logo_path;

        abort_unless($this->appearance->exists($path), 404);

        return $this->appearance->response($path);
    }

    public function join(JoinRoomRequest $request, Room $room): RedirectResponse
    {
        $data = $request->validated();

        $this->rooms->join($room, $data['nickname'], $data['color'], $request);

        return redirect()->route('table.show', $room);
    }

    /** Uscita con il bottone "Esci": via dalla lista e il browser non è più un partecipante. */
    public function exit(Request $request, Room $room): RedirectResponse
    {
        if ($participant = $this->rooms->currentParticipant($room, $request)) {
            $this->presence->leave($participant);
            $this->rooms->forget($room, $request);
        }

        return redirect()->route('home')->with('left_room', $room->code);
    }
}
