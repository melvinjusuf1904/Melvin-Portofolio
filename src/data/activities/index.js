// Gabungan semua data Activities.
// Setiap aktivitas/organisasi punya file sendiri di folder ini.
//
// Cara menambah aktivitas baru:
// 1. Copy file `_template.js` di folder ini, rename sesuai aktivitas (contoh: hackathon-2026.js)
// 2. Isi datanya, lalu import & masukkan ke array ACTIVITIES di bawah
//
// Urutan di array ini menentukan urutan tampil di halaman Activities.

import BINUSIAN_GAMING from './binusian-gaming';
import BUSINESS_CASE_COMPETITION from './business-case-competition';
import BORNEO_ONLINE_TRADING from './borneo-online-trading';

export const ACTIVITIES = [
  BINUSIAN_GAMING,
  BUSINESS_CASE_COMPETITION,
  BORNEO_ONLINE_TRADING,
  // Tambahkan aktivitas baru di sini
];
