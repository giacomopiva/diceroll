// Lanci fissi della demo della landing. Non sono lanci di un tavolo: niente server, niente registro.
// Valori e seed sono scritti qui, come nel resto del progetto il client non genera mai un risultato:
// anima soltanto quello che gli viene dato. Senza DOM, testato in Node.

export const COLORS = {
  rubino: '#b3243a', zaffiro: '#2457b3', smeraldo: '#1f8a5b', ametista: '#7a3fb0', osso: '#e8dcc0', oro: '#d9a72e',
};

// Primo lancio, appena la scena è pronta.
export const OPENING = { who: 'Elara', color: COLORS.rubino, list: ['d20'], values: [17], seed: 20261024 };

// Terzo passo: tre giocatori lanciano uno dopo l'altro, e i lanci restano insieme sul tavolo.
// Nel tavolo vero ogni lancio ha la sua fisica e i dadi di lanci diversi possono sovrapporsi: qui i seed sono scelti
// (cercando) perché i dadi dei tre lanci si fermino affiancati, a più di 2,7 di distanza.
export const TABLE = [
  { who: 'Elara', color: COLORS.rubino, list: ['d6', 'd20'], values: [4, 17], seed: 100024 },
  { who: 'Thorin', color: COLORS.zaffiro, list: ['d8', 'd8'], values: [3, 7], seed: 200010 },
  { who: 'Mira', color: COLORS.smeraldo, list: ['d12'], values: [9], seed: 300024 },
];

// Sezione dei dadi: a ogni clic sul nome parte il lancio successivo di quel tipo.
export const DICE = {
  d4: { color: COLORS.oro, throws: [{ value: 3, seed: 1101 }, { value: 1, seed: 2202 }, { value: 4, seed: 3303 }] },
  d6: { color: COLORS.rubino, throws: [{ value: 5, seed: 4404 }, { value: 2, seed: 5505 }, { value: 6, seed: 6606 }] },
  d8: { color: COLORS.zaffiro, throws: [{ value: 8, seed: 7707 }, { value: 3, seed: 8808 }, { value: 5, seed: 9909 }] },
  d10: { color: COLORS.smeraldo, throws: [{ value: 10, seed: 1212 }, { value: 4, seed: 2323 }, { value: 7, seed: 3434 }] },
  d12: { color: COLORS.ametista, throws: [{ value: 12, seed: 4545 }, { value: 6, seed: 5656 }, { value: 2, seed: 6767 }] },
  d20: { color: COLORS.osso, throws: [{ value: 20, seed: 7878 }, { value: 11, seed: 8989 }, { value: 1, seed: 9090 }] },
};

const ORDER = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];

/** "1d6 + 1d20", con i tipi nell'ordine del tavolo. */
export function formula(list) {
  const c = {}; list.forEach((t) => { c[t] = (c[t] || 0) + 1; });
  return ORDER.filter((t) => c[t]).map((t) => c[t] + t).join(' + ');
}
