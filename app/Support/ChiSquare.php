<?php

namespace App\Support;

/**
 * Test del chi-quadro di Pearson contro la distribuzione uniforme, senza dipendenze:
 * serve a controllare che i valori dei dadi decisi dal server siano equidistribuiti.
 */
final class ChiSquare
{
    /**
     * @param  list<int>  $observed  quante volte è uscita ciascuna faccia
     * @return array{chi2: float, df: int, p: float}
     */
    public static function uniform(array $observed): array
    {
        $k = count($observed);
        $n = array_sum($observed);

        if ($k < 2 || $n === 0) {
            return ['chi2' => 0.0, 'df' => max(0, $k - 1), 'p' => 1.0];
        }

        $expected = $n / $k;
        $chi2 = 0.0;
        foreach ($observed as $count) {
            $chi2 += ($count - $expected) ** 2 / $expected;
        }

        return ['chi2' => $chi2, 'df' => $k - 1, 'p' => self::pValue($chi2, $k - 1)];
    }

    /** Probabilità di ottenere un chi-quadro almeno così alto per caso: Q(df/2, chi2/2). */
    public static function pValue(float $chi2, int $df): float
    {
        if ($chi2 <= 0 || $df < 1) {
            return 1.0;
        }

        return self::gammaQ($df / 2, $chi2 / 2);
    }

    /** Funzione gamma incompleta regolarizzata superiore Q(a, x). */
    private static function gammaQ(float $a, float $x): float
    {
        if ($x < $a + 1) {
            return 1 - self::gammaPSeries($a, $x);
        }

        return self::gammaQFraction($a, $x);
    }

    /** P(a, x) a serie, per x piccolo. */
    private static function gammaPSeries(float $a, float $x): float
    {
        $ap = $a;
        $sum = $del = 1 / $a;

        for ($n = 0; $n < 1000; $n++) {
            $ap++;
            $del *= $x / $ap;
            $sum += $del;
            if (abs($del) < abs($sum) * 1e-15) {
                break;
            }
        }

        return $sum * exp(-$x + $a * log($x) - self::logGamma($a));
    }

    /** Q(a, x) a frazione continua (Lentz), per x grande. */
    private static function gammaQFraction(float $a, float $x): float
    {
        $tiny = 1e-300;
        $b = $x + 1 - $a;
        $c = 1 / $tiny;
        $d = 1 / $b;
        $h = $d;

        for ($i = 1; $i < 1000; $i++) {
            $an = -$i * ($i - $a);
            $b += 2;
            $d = $an * $d + $b;
            if (abs($d) < $tiny) {
                $d = $tiny;
            }
            $c = $b + $an / $c;
            if (abs($c) < $tiny) {
                $c = $tiny;
            }
            $d = 1 / $d;
            $del = $d * $c;
            $h *= $del;
            if (abs($del - 1) < 1e-15) {
                break;
            }
        }

        return exp(-$x + $a * log($x) - self::logGamma($a)) * $h;
    }

    /** ln Γ(x) per x >= 0.5, approssimazione di Lanczos (g = 7). */
    private static function logGamma(float $x): float
    {
        static $c = [
            0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313,
            -176.61502916214059, 12.507343278686905, -0.13857109526572012,
            9.9843695780195716e-6, 1.5056327351493116e-7,
        ];

        $x -= 1;
        $a = $c[0];
        $t = $x + 7.5;
        for ($i = 1; $i < 9; $i++) {
            $a += $c[$i] / ($x + $i);
        }

        return 0.5 * log(2 * M_PI) + ($x + 0.5) * log($t) - $t + log($a);
    }
}
