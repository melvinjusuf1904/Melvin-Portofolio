// Gabungan semua data My Projects.
// Setiap project punya file sendiri di folder ini.
//
// Cara menambah project baru:
// 1. Copy file `_template.js` di folder ini, rename sesuai project (contoh: trading-bot.js)
// 2. Isi datanya, lalu import & masukkan ke array PROJECTS di bawah

import EQUITY_RESEARCH_2026 from './equity-research-2026';

export const PROJECTS = [
  EQUITY_RESEARCH_2026,
  // Tambahkan project baru di sini, misal: TRADING_BOT,
];
