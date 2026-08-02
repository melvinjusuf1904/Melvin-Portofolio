// Gabungan semua data equity research.
// Setiap emiten punya file sendiri (misal: raja.js, bbca.js, dst) di folder ini.
//
// Cara menambah emiten baru:
// 1. Copy file `_template.js` di folder ini, rename sesuai ticker (contoh: bbca.js)
// 2. Isi datanya, lalu import & masukkan ke array EQUITY_RESEARCH di bawah

import RAJA from './raja';

export const EQUITY_RESEARCH = [
  RAJA,
  // Tambahkan emiten baru di sini, misal: BBCA,
];
