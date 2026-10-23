@extends('layouts.admin.app')

@section('content')

<div class="page-header d-print-none">
    <div class="container-xl">
        <div class="row g-2 align-items-center">
            <div class="col">
                <div class="page-pretitle">Area utente</div>
                <h2 class="page-title">Aspetto dei tavoli</h2>
            </div>
        </div>
    </div>
</div>

<div class="page-body">
    <div class="container-xl">
        @if (session('saved'))
            <div class="alert alert-success" role="alert">Aspetto salvato.</div>
        @endif
        @if (session('removed'))
            <div class="alert alert-success" role="alert">Immagine rimossa.</div>
        @endif

        <div class="row row-cards">
            <div class="col-lg-6">
                <form action="{{ route('user.appearance.update') }}" method="POST" enctype="multipart/form-data" class="card rounded-3 overflow-hidden">
                    @csrf
                    @method('PUT')
                    <div class="card-header">
                        <h3 class="card-title"><i class="ti ti-photo me-2 text-secondary"></i>Immagine nell'intestazione</h3>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label class="form-label" for="image">{{ $hasImage ? 'Sostituisci l\'immagine' : 'Immagine' }}</label>
                            <input type="file" id="image" name="image" accept="{{ collect($limits['mimes'])->map(fn ($m) => '.'.$m)->implode(',') }}"
                                   class="form-control {{ $errors->has('image') ? 'is-invalid' : '' }}">
                            @error('image')
                                <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                            <small class="form-hint text-secondary">
                                {{ strtoupper(implode(', ', $limits['mimes'])) }}, al massimo {{ $limits['max_kb'] }} kB e {{ $limits['max_px'] }} × {{ $limits['max_px'] }} px.
                            </small>
                        </div>

                        <div class="mb-3">
                            <div class="form-label">Posizione</div>
                            <div class="d-flex flex-wrap gap-4">
                                <div>
                                    @foreach ($verticals as $value => $label)
                                        <label class="form-check">
                                            <input type="radio" class="form-check-input" name="vertical" value="{{ $value }}" @checked(old('vertical', $vertical) === $value)>
                                            <span class="form-check-label">{{ $label }}</span>
                                        </label>
                                    @endforeach
                                </div>
                                <div>
                                    @foreach ($positions as $value => $label)
                                        <label class="form-check">
                                            <input type="radio" class="form-check-input" name="position" value="{{ $value }}" @checked(old('position', $position) === $value)>
                                            <span class="form-check-label">{{ $label }}</span>
                                        </label>
                                    @endforeach
                                </div>
                            </div>
                            @error('position')
                                <div class="invalid-feedback d-block">{{ $message }}</div>
                            @enderror
                            @error('vertical')
                                <div class="invalid-feedback d-block">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <div class="form-label">Dimensione</div>
                            @foreach ($sizes as $value)
                                <label class="form-check form-check-inline">
                                    <input type="radio" class="form-check-input" name="size" value="{{ $value }}" @checked((int) old('size', $size) === $value)>
                                    <span class="form-check-label">{{ $value }}%</span>
                                </label>
                            @endforeach
                            @error('size')
                                <div class="invalid-feedback d-block">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                    <div class="card-footer d-flex gap-2">
                        <button type="submit" class="btn btn-primary">Salva</button>
                        @if ($hasImage)
                            <button type="submit" form="remove-image" class="btn btn-outline-danger">Rimuovi immagine</button>
                        @endif
                    </div>
                </form>
                <form id="remove-image" action="{{ route('user.appearance.destroy') }}" method="POST">
                    @csrf
                    @method('DELETE')
                </form>
            </div>

            @if ($hasImage)
                <div class="col-lg-6">
                    <div class="card rounded-3 overflow-hidden">
                        <div class="card-header"><h3 class="card-title">Immagine attuale</h3></div>
                        <div class="card-body text-center">
                            <img src="{{ route('user.appearance.image') }}" alt="Immagine attuale" class="img-fluid" style="max-height:120px">
                        </div>
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>

@endsection
