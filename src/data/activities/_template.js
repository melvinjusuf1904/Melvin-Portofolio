// TEMPLATE — copy file ini, rename jadi nama aktivitas (contoh: hackathon-2026.js),
// isi semua field di bawah, lalu import & tambahkan ke array di index.js

const ACTIVITY_NAME = {
  id: 4, // ganti dengan id unik (angka berikutnya yang belum dipakai)
  period: "Jan 2026 – Feb 2026",
  org: "Nama Organisasi / Event",
  role: "Peran kamu di sana",
  images: [
    "/images/foto1.jpg",
  ], // contoh: ["/images/foto1.jpg", "/images/foto2.jpg"] — kosongkan array untuk pakai placeholder
  points: [
    "Poin ringkas pencapaian pertama.",
    "Poin ringkas pencapaian kedua.",
  ],
  notes:
    "Cerita/deskripsi panjang tentang aktivitas ini.\n\n" +
    "Bisa dipecah jadi beberapa paragraf pakai \\n\\n.",
  focusAreas: [
    "Skill atau area fokus 1.",
    "Skill atau area fokus 2.",
  ],
};

export default ACTIVITY_NAME;
