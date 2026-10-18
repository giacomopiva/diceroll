<?php

use App\Support\ChiSquare;

test('p-value ai valori critici noti al 5%', function (float $chi2, int $df) {
    expect(ChiSquare::pValue($chi2, $df))->toEqualWithDelta(0.05, 0.0005);
})->with([
    'df 1' => [3.841459, 1],
    'df 2' => [5.991465, 2],
    'df 5' => [11.070498, 5],
    'df 7' => [14.067140, 7],
    'df 9' => [16.918978, 9],
    'df 11' => [19.675138, 11],
    'df 19' => [30.143527, 19],
]);

test('p-value ai valori critici noti all\'1%', function (float $chi2, int $df) {
    expect(ChiSquare::pValue($chi2, $df))->toEqualWithDelta(0.01, 0.0002);
})->with([
    'df 5' => [15.086272, 5],
    'df 19' => [36.190869, 19],
]);

test('con 2 gradi di libertà vale exp(-x/2)', function () {
    expect(ChiSquare::pValue(1.0, 2))->toEqualWithDelta(exp(-0.5), 1e-9)
        ->and(ChiSquare::pValue(10.0, 2))->toEqualWithDelta(exp(-5), 1e-9);
});

test('chi-quadro zero dà p = 1 e valori enormi dànno p quasi 0', function () {
    expect(ChiSquare::pValue(0, 5))->toBe(1.0)
        ->and(ChiSquare::pValue(500, 5))->toBeLessThan(1e-90);
});

test('una distribuzione perfettamente uniforme ha chi-quadro 0', function () {
    $r = ChiSquare::uniform([10, 10, 10, 10, 10, 10]);

    expect($r['chi2'])->toBe(0.0)->and($r['df'])->toBe(5)->and($r['p'])->toBe(1.0);
});

test('un dado truccato viene riconosciuto', function () {
    // d6 con il 6 che esce il doppio del normale, su 600 lanci.
    $r = ChiSquare::uniform([86, 86, 86, 86, 86, 170]);

    expect($r['p'])->toBeLessThan(0.0001);
});

test('piccole oscillazioni casuali restano nella norma', function () {
    $r = ChiSquare::uniform([104, 96, 99, 101, 98, 102]);

    expect($r['p'])->toBeGreaterThan(0.9);
});

test('senza lanci non si può concludere nulla', function () {
    expect(ChiSquare::uniform([0, 0, 0, 0]))->toBe(['chi2' => 0.0, 'df' => 3, 'p' => 1.0]);
});
