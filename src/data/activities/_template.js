// TEMPLATE — copy file ini, rename jadi nama aktivitas (contoh: hackathon-2026.js),
// isi semua field di bawah, lalu import & tambahkan ke array di index.js

const ACTIVITY_NAME = {
  id: 4, // ganti dengan id unik (angka berikutnya yang belum dipakai)
  period: "Jan 2026 – Feb 2026",
  org: "Nama Organisasi / Event",
  role: "Peran kamu di sana",
  logo: "", // (Opsional) path logo organisasi, contoh: "/images/logo-organisasi.png" — kosongkan untuk pakai ikon default
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
  // (Opsional) Lampiran file Excel/PDF, tampil di bagian "Documents" pada halaman detail.
  // 1. Taruh file di public/files/<nama-activity>/, misalnya: public/files/hackathon-2026/proposal.pdf
  // 2. Isi array di bawah ini — kosongkan (files: []) kalau belum ada file.
  // files: [
  //   { url: "/files/hackathon-2026/proposal.pdf", label: "Proposal" },
  //   { url: "/files/hackathon-2026/laporan.xlsx", label: "Laporan Keuangan" },
  // ],
  files: [],
};

export default ACTIVITY_NAME;
