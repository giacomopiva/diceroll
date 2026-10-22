@props(['name', 'label', 'description', 'value', 'required', 'min', 'max', 'step', 'unit', 'unitOne'])
{{-- Slider con il valore corrente accanto ("24 ore"). unitOne è il singolare dell'unità ("ora"), facoltativo. --}}
@php($current = old($name) ?? ($value ?? $min))

<div class="mb-3">
    <label class="form-label d-flex justify-content-between" for="{{ $name }}">
        <span>
            {{ $label }}
            {!! ($required ?? false) ? '<span class="text-danger ms-1">*</span>' : '' !!}
        </span>
        <output for="{{ $name }}" class="fw-bold" data-range-output>{{ $current }} {{ (int) $current === 1 && !empty($unitOne) ? $unitOne : ($unit ?? '') }}</output>
    </label>
    <input type="range"
           id="{{ $name }}"
           class="form-range {{ $errors->has($name) ? 'is-invalid' : '' }}"
           name="{{ $name }}"
           value="{{ $current }}"
           min="{{ $min }}" max="{{ $max }}" step="{{ $step ?? 1 }}"
           data-unit="{{ $unit ?? '' }}" data-unit-one="{{ $unitOne ?? '' }}"
           aria-valuetext="{{ $current }} {{ (int) $current === 1 && !empty($unitOne) ? $unitOne : ($unit ?? '') }}"
           {{ ($required ?? false) ? 'required' : '' }} />
    <div class="d-flex justify-content-between text-secondary small"><span>{{ $min }}</span><span>{{ $max }}</span></div>

    @if ($errors->has($name))
        <div class="invalid-feedback d-block">{{ $errors->first($name) }}</div>
    @endif
    @if (!empty($description))
        <small class="form-hint text-secondary">{{ $description }}</small>
    @endif
    {{ $slot ?? '' }}
</div>

@once
<script>
    // Aggiorna il valore mostrato accanto agli slider mentre si spostano.
    document.addEventListener('input', (e) => {
        const el = e.target;
        if (!el.matches || !el.matches('input.form-range[data-unit]')) return;
        const unit = el.value === '1' && el.dataset.unitOne ? el.dataset.unitOne : el.dataset.unit;
        const text = (el.value + ' ' + unit).trim();
        const out = el.closest('.mb-3').querySelector('[data-range-output]');
        if (out) out.textContent = text;
        el.setAttribute('aria-valuetext', text);
    });
</script>
@endonce
