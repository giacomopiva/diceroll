# Favicon del Tavolo dei Dadi: un d20 visto di fronte, ottone su fondo scuro (palette del tavolo).
# Geometria in un riquadro 32x32; i PNG si disegnano a 8x e si riducono, per bordi puliti.
# Uso: python3 resources/icons/favicon.py (serve Pillow). Scrive in public/: favicon.ico (16, 32, 48),
# favicon.svg, apple-touch-icon.png, icon-192.png, icon-512.png e site.webmanifest.
import math, json
from pathlib import Path
from PIL import Image, ImageDraw
OUT = str(Path(__file__).resolve().parents[2] / 'public') + '/'
BG, BRASS, LIGHT, DARK, INK = '#121416', '#d6a54a', '#ecc66e', '#a77a2c', '#1b1406'
C = 16.0
def hexpt(k, r): a = math.radians(-90 + 60 * k); return (C + r * math.cos(a), C + r * math.sin(a))
H = [hexpt(k, 13.2) for k in range(6)]          # contorno: esagono con il vertice in alto
T = [hexpt(k * 2, 7.4) for k in range(3)]       # faccia frontale: triangolo con la punta in alto
# H: 0 alto, 1 alto-dx, 2 basso-dx, 3 basso, 4 basso-sx, 5 alto-sx. T: 0 alto, 1 basso-dx, 2 basso-sx
FACETS = [  # (poligono, colore): luce dall'alto a sinistra
    ([H[0], H[1], T[0]], LIGHT), ([H[5], H[0], T[0]], LIGHT), ([H[5], T[0], T[2]], BRASS),
    ([H[1], T[1], T[0]], BRASS), ([H[1], H[2], T[1]], DARK), ([H[4], H[5], T[2]], BRASS),
    ([H[2], H[3], T[1]], DARK), ([H[3], T[2], T[1]], DARK), ([H[3], H[4], T[2]], BRASS),
]
EDGES = [(H[0], T[0]), (H[5], T[0]), (H[1], T[0]), (H[1], T[1]), (H[2], T[1]), (H[3], T[1]),
         (H[3], T[2]), (H[4], T[2]), (H[5], T[2])]

def draw(size, simple=False, radius=7, pad=0.0):
    S = 8; W = size * S; k = W / 32
    im = Image.new('RGBA', (W, W), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    d.rounded_rectangle([0, 0, W - 1, W - 1], radius=radius * k, fill=BG)
    sc = lambda p: (C * k + (p[0] - C) * k * (1 - pad), C * k + (p[1] - C) * k * (1 - pad))
    if simple:  # 16 px: solo sagoma e faccia frontale, linee spesse
        d.polygon([sc(p) for p in H], fill=BRASS)
        d.polygon([sc(p) for p in T], fill=LIGHT, outline=INK, width=round(1.9 * k))
    else:
        for poly, col in FACETS: d.polygon([sc(p) for p in poly], fill=col)
        d.polygon([sc(p) for p in T], fill=LIGHT)
        w = round(1.25 * k)
        for a, b in EDGES: d.line([sc(a), sc(b)], fill=INK, width=w)
        d.line([sc(p) for p in T + [T[0]]], fill=INK, width=w, joint='curve')
        d.line([sc(p) for p in H + [H[0]]], fill=INK, width=w, joint='curve')
    return im.resize((size, size), Image.LANCZOS)

ico = [draw(16, simple=True), draw(32), draw(48)]
ico[2].save(OUT + 'favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)], append_images=[ico[0], ico[1]])
# Apple e Android: fondo pieno senza trasparenza (iOS arrotonda da sé), dado un poco più piccolo.
draw(180, radius=0, pad=0.16).convert('RGB').save(OUT + 'apple-touch-icon.png', optimize=True)
for s in (192, 512): draw(s, radius=0, pad=0.2).convert('RGB').save(OUT + f'icon-{s}.png', optimize=True)
# SVG con la stessa geometria (i browser moderni la preferiscono e la scalano senza perdite).
f = lambda p: f'{p[0]:.2f},{p[1]:.2f}'
svg = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">', f'<rect width="32" height="32" rx="7" fill="{BG}"/>']
svg += [f'<polygon points="{" ".join(map(f, poly))}" fill="{col}"/>' for poly, col in FACETS]
svg.append(f'<polygon points="{" ".join(map(f, T))}" fill="{LIGHT}"/>')
svg.append(f'<g fill="none" stroke="{INK}" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round">')
svg += [f'<line x1="{a[0]:.2f}" y1="{a[1]:.2f}" x2="{b[0]:.2f}" y2="{b[1]:.2f}"/>' for a, b in EDGES]
svg.append(f'<polygon points="{" ".join(map(f, T))}"/><polygon points="{" ".join(map(f, H))}"/></g></svg>')
open(OUT + 'favicon.svg', 'w').write('\n'.join(svg) + '\n')

json.dump({
    'name': 'Tavolo dei Dadi', 'short_name': 'Dadi', 'lang': 'it', 'start_url': '/', 'display': 'standalone',
    'background_color': BG, 'theme_color': BG,
    'icons': [{'src': '/icon-192.png', 'sizes': '192x192', 'type': 'image/png'}, {'src': '/icon-512.png', 'sizes': '512x512', 'type': 'image/png'}],
}, open(OUT + 'site.webmanifest', 'w'), ensure_ascii=False, indent=2)
print('ok')
