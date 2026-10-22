// Colori predefiniti dei dadi, condivisi tra il form di ingresso e il tavolo.
export const PRESETS = [
  { name: 'Rubino', hex: '#b3243a' }, { name: 'Zaffiro', hex: '#2457b3' }, { name: 'Smeraldo', hex: '#1f8a5b' },
  { name: 'Ametista', hex: '#7a3fb0' }, { name: 'Osso', hex: '#e8dcc0' }, { name: 'Ossidiana', hex: '#2a2d33' },
  { name: 'Oro', hex: '#d9a72e' }, { name: 'Ghiaccio', hex: '#9fd3e6' },
];

// Finiture con texture (glitter): il colore è il loro colore medio e la identifica anche per il server
// (resta unico per tavolo, come ogni colore); la scena lo riconosce da qui e applica l'immagine.
export const FINISHES = [
  { name: 'Glitter rosso', hex: '#9d1f26', texture: 'red' },
  { name: 'Glitter blu', hex: '#1549a0', texture: 'blue' },
  { name: 'Glitter notte', hex: '#2a2a36', texture: 'black' },
  { name: 'Glitter oro', hex: '#cbb064', texture: 'gold' },
  { name: 'Glitter rosa', hex: '#e74085', texture: 'pink' },
  { name: 'Glitter lime', hex: '#76bb14', texture: 'lime' },
];
export const TEXTURE_URL = (name) => `/images/dice/${name}.jpg`;
export const finishOf = (hex) => FINISHES.find((f) => f.hex === String(hex).toLowerCase()) || null;
