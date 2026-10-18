@extends('layouts.admin.app')

@php
    /** Freccia di variazione percentuale accanto a un KPI. */
    $deltaBadge = function (?float $d, string $vs) {
        if ($d === null) {
            return '<span class="text-secondary small">nessun confronto ('.$vs.')</span>';
        }
        $up = $d >= 0;
        return '<span class="text-'.($up ? 'green' : 'red').' small"><i class="ti ti-trending-'.($up ? 'up' : 'down').'"></i> '
            .($up ? '+' : '').number_format($d, 1, ',', '').'%</span> <span class="text-secondary small">'.$vs.'</span>';
    };
    $kpiCards = [
        ['icon' => 'ti-door', 'bg' => 'blue', 'label' => 'Tavoli aperti', 'value' => $kpis['open_rooms'],
         'sub' => '<span class="text-secondary small">'.$kpis['open_rooms_with_players'].' con giocatori online</span>'],
        ['icon' => 'ti-users', 'bg' => 'green', 'label' => 'Giocatori online', 'value' => $kpis['online_players'],
         'sub' => '<span class="text-secondary small">in questo momento</span>'],
        ['icon' => 'ti-dice', 'bg' => 'orange', 'label' => 'Lanci oggi', 'value' => $kpis['rolls_today'],
         'sub' => $deltaBadge($kpis['rolls_today_delta'], 'vs ieri')],
        ['icon' => 'ti-chart-line', 'bg' => 'purple', 'label' => 'Lanci, 7 giorni', 'value' => $kpis['rolls_7d'],
         'sub' => $deltaBadge($kpis['rolls_7d_delta'], 'vs 7 prima')],
        ['icon' => 'ti-table-plus', 'bg' => 'azure', 'label' => 'Nuovi tavoli, 7 giorni', 'value' => $kpis['rooms_7d'],
         'sub' => $deltaBadge($kpis['rooms_7d_delta'], 'vs 7 prima')],
        ['icon' => 'ti-calculator', 'bg' => 'yellow', 'label' => 'Lanci per tavolo', 'value' => number_format($kpis['avg_rolls_per_room'], 1, ',', ''),
         'sub' => '<span class="text-secondary small">'.number_format($kpis['rolls_total'], 0, ',', '.').' lanci · '.number_format($kpis['dice_total'], 0, ',', '.').' dadi in totale</span>'],
    ];
    $verdicts = [
        'ok' => ['Nella norma', 'green'],
        'watch' => ['Da osservare', 'yellow'],
        'alert' => ['Da verificare', 'red'],
        'low' => ['Campione piccolo', 'secondary'],
    ];
@endphp

@section('content')

<div class="page-header d-print-none">
    <div class="container-xl">
        <div class="row g-2 align-items-center">
            <div class="col">
                <div class="page-pretitle">Admin</div>
                <h2 class="page-title">Dashboard</h2>
            </div>
            <div class="col-auto ms-auto d-print-none">
                <a href="{{ route('admin.room.index') }}" class="btn btn-primary">
                    <i class="ti ti-dice me-1"></i>Tutti i tavoli
                </a>
            </div>
        </div>
    </div>
</div>

<div class="page-body">
    <div class="container-xl">

        {{-- KPI --}}
        <div class="row row-cards mb-3">
            @foreach ($kpiCards as $card)
                <div class="col-sm-6 col-lg-4 col-xl-2">
                    <div class="card card-sm h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-2">
                                <span class="bg-{{ $card['bg'] }} text-white avatar avatar-sm me-2"><i class="ti {{ $card['icon'] }}"></i></span>
                                <div class="text-secondary small lh-sm">{{ $card['label'] }}</div>
                            </div>
                            <div class="h1 mb-1">{{ is_numeric($card['value']) ? number_format($card['value'], 0, ',', '.') : $card['value'] }}</div>
                            <div>{!! $card['sub'] !!}</div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>

        {{-- Andamento e uso dei dadi --}}
        <div class="row row-cards mb-3">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title"><i class="ti ti-chart-bar me-2 text-orange"></i>Lanci e nuovi tavoli</h3>
                        <div class="card-options"><span class="badge bg-orange-lt text-orange">Ultimi 14 giorni</span></div>
                    </div>
                    <div class="card-body"><div id="chart-per-day" style="min-height:290px;"></div></div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h3 class="card-title"><i class="ti ti-chart-donut me-2 text-purple"></i>Dadi più usati</h3>
                    </div>
                    <div class="card-body d-flex align-items-center justify-content-center">
                        @if ($dice['total_dice'] > 0)
                            <div id="chart-dice-usage" style="width:100%;min-height:290px;"></div>
                        @else
                            <div class="text-secondary">Ancora nessun lancio.</div>
                        @endif
                    </div>
                </div>
            </div>
        </div>

        {{-- Orari di punta e spunti --}}
        <div class="row row-cards mb-3">
            <div class="col-lg-7">
                <div class="card h-100">
                    <div class="card-header">
                        <h3 class="card-title"><i class="ti ti-clock me-2 text-blue"></i>Orari di punta</h3>
                        <div class="card-options"><span class="badge bg-blue-lt text-blue">Lanci per ora, ultimi 30 giorni</span></div>
                    </div>
                    <div class="card-body"><div id="chart-per-hour" style="min-height:240px;"></div></div>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="card h-100">
                    <div class="card-header">
                        <h3 class="card-title"><i class="ti ti-bulb me-2 text-yellow"></i>Spunti</h3>
                    </div>
                    <div class="list-group list-group-flush">
                        @forelse ($insights as $insight)
                            <div class="list-group-item d-flex align-items-start">
                                <span class="text-{{ $insight['color'] }} me-3 fs-3"><i class="ti {{ $insight['icon'] }}"></i></span>
                                <div>{{ $insight['text'] }}</div>
                            </div>
                        @empty
                            <div class="list-group-item text-secondary">Servono ancora alcuni lanci per ricavare degli spunti.</div>
                        @endforelse
                    </div>
                </div>
            </div>
        </div>

        {{-- Equità dei dadi --}}
        <div class="row row-cards mb-3">
            <div class="col-lg-5">
                <div class="card h-100">
                    <div class="card-header">
                        <h3 class="card-title"><i class="ti ti-scale me-2 text-green"></i>Equità dei dadi</h3>
                        <div class="card-options"><span class="badge bg-green-lt text-green" title="Il risultato lo decide solo il server con random_int: qui si controlla che i valori usciti siano equidistribuiti.">Test del chi-quadro</span></div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-vcenter card-table">
                            <thead><tr><th>Dado</th><th class="text-end">Lanciati</th><th class="text-end">χ²</th><th class="text-end">p</th><th>Esito</th></tr></thead>
                            <tbody>
                                @foreach ($dice['types'] as $t)
                                    <tr>
                                        <td class="fw-bold">{{ $t['type'] }}</td>
                                        <td class="text-end">{{ number_format($t['count'], 0, ',', '.') }}</td>
                                        <td class="text-end">{{ $t['count'] ? number_format($t['chi2'], 1, ',', '') : '—' }}</td>
                                        <td class="text-end">{{ $t['count'] ? $stats->formatP($t['p']) : '—' }}</td>
                                        <td><span class="badge bg-{{ $verdicts[$t['verdict']][1] }}-lt text-{{ $verdicts[$t['verdict']][1] }}">{{ $verdicts[$t['verdict']][0] }}</span></td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer text-secondary small">
                        Un dado equo dà p alto. Sotto 0,01 la distribuzione è anomala, ma si valuta solo con almeno 5 lanci attesi per faccia.
                        Aggiornato alle {{ \Illuminate\Support\Carbon::parse($dice['generated_at'])->timezone(config('app.timezone'))->format('H:i') }} (cache di 5 minuti).
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="card h-100">
                    <div class="card-header">
                        <h3 class="card-title"><i class="ti ti-chart-histogram me-2 text-green"></i>Frequenza delle facce</h3>
                        <div class="card-options">
                            <select id="fair-die" class="form-select form-select-sm" aria-label="Tipo di dado">
                                @foreach ($dice['types'] as $t)
                                    <option value="{{ $t['type'] }}" @selected($t['type'] === 'd20')>{{ $t['type'] }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="card-body"><div id="chart-fairness" style="min-height:260px;"></div></div>
                </div>
            </div>
        </div>

        {{-- Tavoli aperti e ultimi lanci --}}
        <div class="row row-cards">
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title"><i class="ti ti-door me-2 text-blue"></i>Tavoli aperti</h3>
                        <div class="card-options"><a href="{{ route('admin.room.index', ['stato' => 'aperti']) }}" class="small">Vedi tutti</a></div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-vcenter card-table">
                            <thead><tr><th>Codice</th><th>Giocatori</th><th class="text-end">Lanci</th><th>Ultima attività</th></tr></thead>
                            <tbody>
                                @forelse ($openRooms as $room)
                                    <tr>
                                        <td><a href="{{ route('admin.room.show', $room) }}" class="font-monospace">{{ $room->code }}</a></td>
                                        <td>
                                            @if ($room->online_count > 0)<span class="badge bg-green-lt text-green">{{ $room->online_count }} online</span>@endif
                                            <span class="text-secondary small">{{ $room->participants_count }} in totale</span>
                                        </td>
                                        <td class="text-end">{{ $room->rolls_count }}</td>
                                        <td class="text-secondary">{{ $room->last_activity_at->locale('it')->diffForHumans() }}</td>
                                    </tr>
                                @empty
                                    <tr><td colspan="4" class="text-secondary text-center py-4">Nessun tavolo aperto.</td></tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title"><i class="ti ti-history me-2 text-orange"></i>Ultimi lanci</h3>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-vcenter card-table">
                            <thead><tr><th>Giocatore</th><th>Tavolo</th><th>Lancio</th><th class="text-end">Totale</th><th>Quando</th></tr></thead>
                            <tbody>
                                @forelse ($latestRolls as $roll)
                                    <tr>
                                        <td>
                                            <span class="badge" style="background:{{ $roll->participant->color }};width:.8rem;height:.8rem;padding:0;border-radius:50%;vertical-align:-1px"></span>
                                            {{ $roll->participant->nickname }}
                                        </td>
                                        <td><a href="{{ route('admin.room.show', $roll->room) }}" class="font-monospace small">{{ $roll->room->code }}</a></td>
                                        <td class="font-monospace small">{{ $roll->formula() }}</td>
                                        <td class="text-end fw-bold">{{ $roll->total }}</td>
                                        <td class="text-secondary">{{ $roll->created_at->locale('it')->diffForHumans() }}</td>
                                    </tr>
                                @empty
                                    <tr><td colspan="5" class="text-secondary text-center py-4">Ancora nessun lancio.</td></tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

@endsection

@section('script')
<script>
    const perDay = @json($perDay);
    const perHour = @json($perHour);
    const dice = @json($dice['types']);

    new ApexCharts(document.querySelector('#chart-per-day'), {
        chart: { type: 'bar', height: 290, toolbar: { show: false }, fontFamily: 'inherit' },
        series: [{ name: 'Lanci', type: 'column', data: perDay.rolls }, { name: 'Nuovi tavoli', type: 'line', data: perDay.rooms }],
        xaxis: { categories: perDay.labels, labels: { rotate: -45, style: { fontSize: '11px' } } },
        yaxis: [
            { seriesName: 'Lanci', min: 0, labels: { formatter: v => Math.round(v) }, title: { text: 'Lanci' } },
            { seriesName: 'Nuovi tavoli', opposite: true, min: 0, max: v => Math.max(4, v), labels: { formatter: v => Math.round(v) }, title: { text: 'Tavoli' } },
        ],
        colors: ['#f76707', '#206bc4'],
        stroke: { width: [0, 3], curve: 'smooth' },
        dataLabels: { enabled: false },
        grid: { strokeDashArray: 4 },
        legend: { position: 'top' },
        plotOptions: { bar: { borderRadius: 3, columnWidth: '60%' } }
    }).render();

    @if ($dice['total_dice'] > 0)
    new ApexCharts(document.querySelector('#chart-dice-usage'), {
        chart: { type: 'donut', height: 290, fontFamily: 'inherit' },
        series: Object.values(dice).map(t => t.count),
        labels: Object.keys(dice),
        legend: { position: 'bottom' },
        dataLabels: { enabled: true, formatter: v => Math.round(v) + '%' },
        plotOptions: { pie: { donut: { size: '58%' } } }
    }).render();
    @endif

    new ApexCharts(document.querySelector('#chart-per-hour'), {
        chart: { type: 'bar', height: 240, toolbar: { show: false }, fontFamily: 'inherit' },
        series: [{ name: 'Lanci', data: perHour }],
        xaxis: { categories: perHour.map((_, h) => String(h).padStart(2, '0')), title: { text: 'Ora del giorno' } },
        yaxis: { labels: { formatter: v => Math.round(v) }, min: 0 },
        colors: ['#206bc4'],
        dataLabels: { enabled: false },
        grid: { strokeDashArray: 4 },
        plotOptions: { bar: { borderRadius: 3, columnWidth: '70%' } }
    }).render();

    // Frequenza delle facce: osservato contro atteso per un dado equo.
    const fairness = new ApexCharts(document.querySelector('#chart-fairness'), {
        chart: { type: 'bar', height: 260, toolbar: { show: false }, fontFamily: 'inherit' },
        series: [],
        noData: { text: 'Ancora nessun lancio.' },
        colors: ['#2fb344', '#d63939'],
        stroke: { width: [0, 3] },
        dataLabels: { enabled: false },
        yaxis: { labels: { formatter: v => Math.round(v) }, min: 0 },
        xaxis: { title: { text: 'Faccia' } },
        grid: { strokeDashArray: 4 },
        legend: { position: 'top' },
        plotOptions: { bar: { borderRadius: 2, columnWidth: '70%' } }
    });
    fairness.render();
    function showDie(type) {
        const t = dice[type];
        if (!t.count) { fairness.updateSeries([]); return; }
        fairness.updateOptions({
            xaxis: { categories: t.observed.map((_, i) => i + 1) },
            series: [
                { name: 'Uscite', type: 'column', data: t.observed },
                { name: 'Attese (dado equo)', type: 'line', data: t.observed.map(() => t.expected) },
            ],
        });
    }
    document.getElementById('fair-die').addEventListener('change', e => showDie(e.target.value));
    showDie(document.getElementById('fair-die').value);
</script>
@endsection
