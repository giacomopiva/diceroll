// Colori predefiniti (fam: colonna del form di ingresso, per accostare tinte simili) dei dadi, condivisi tra il form di ingresso e il tavolo.
export const PRESETS = [
  { name: 'Rubino', fam: 'red', hex: '#b3243a' }, { name: 'Zaffiro', fam: 'blue', hex: '#2457b3' }, { name: 'Smeraldo', fam: 'green', hex: '#1f8a5b' },
  { name: 'Ametista', fam: 'violet', hex: '#7a3fb0' }, { name: 'Osso', fam: 'gold', hex: '#e8dcc0' }, { name: 'Ossidiana', fam: 'black', hex: '#2a2d33' },
  { name: 'Oro', fam: 'gold', hex: '#d9a72e' }, { name: 'Ghiaccio', fam: 'blue', hex: '#9fd3e6' },
];

// Finiture con texture (glitter): il colore è il loro colore medio e la identifica anche per il server
// (resta unico per tavolo, come ogni colore); la scena lo riconosce da qui e applica l'immagine.
export const FINISHES = [
  { name: 'Glitter rosso', fam: 'red', hex: '#9d1f26', texture: 'red' },
  { name: 'Glitter blu', fam: 'blue', hex: '#1549a0', texture: 'blue' },
  { name: 'Glitter notte', fam: 'black', hex: '#2a2a36', texture: 'black' },
  { name: 'Glitter oro', fam: 'gold', hex: '#cbb064', texture: 'gold' },
  { name: 'Glitter rosa', fam: 'violet', hex: '#e74085', texture: 'pink' },
  { name: 'Glitter lime', fam: 'green', hex: '#76bb14', texture: 'lime' },
];
export const TEXTURE_URL = (name) => `/images/dice/${name}.jpg`;
export const finishOf = (hex) => FINISHES.find((f) => f.hex === String(hex).toLowerCase()) || null;
export const FAMILIES = ['red', 'blue', 'black', 'gold', 'violet', 'green'];
