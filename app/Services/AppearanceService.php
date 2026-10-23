<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

/** Immagine nell'intestazione dei tavoli di un utente. I file stanno sul disco privato e si servono da /t/{room}/logo. */
class AppearanceService
{
    /** Posizione orizzontale, verticale e dimensione (% di quella piena). */
    public const POSITIONS = ['left' => 'Sinistra', 'center' => 'Centro', 'right' => 'Destra'];

    public const VERTICALS = ['top' => 'In alto', 'bottom' => 'In basso'];

    public const SIZES = [100, 75, 50];

    private const DISK = 'local';

    public function save(User $user, string $position, ?string $vertical, ?int $size, ?UploadedFile $image): void
    {
        $data = [
            'table_logo_position' => $position,
            'table_logo_vertical' => $vertical ?? $user->table_logo_vertical,
            'table_logo_size' => $size ?? $user->table_logo_size,
        ];

        if ($image) {
            $this->deleteFile($user);
            $data['table_logo_path'] = $image->storeAs('table-logos', Str::random(40).'.'.$image->extension(), self::DISK);
        }

        $user->update($data);
    }

    public function remove(User $user): void
    {
        $this->deleteFile($user);
        $user->update(['table_logo_path' => null, 'table_logo_position' => null, 'table_logo_vertical' => null, 'table_logo_size' => null]);
    }

    public function exists(?string $path): bool
    {
        return $path !== null && Storage::disk(self::DISK)->exists($path);
    }

    public function response(string $path)
    {
        return Storage::disk(self::DISK)->response($path, null, [
            'Cache-Control' => 'public, max-age=86400',
            'X-Content-Type-Options' => 'nosniff',
        ]);
    }

    private function deleteFile(User $user): void
    {
        if ($user->table_logo_path) {
            Storage::disk(self::DISK)->delete($user->table_logo_path);
        }
    }
}
