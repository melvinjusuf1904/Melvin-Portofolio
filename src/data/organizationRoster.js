// Data untuk card "Organization Roster" di halaman Activities.
// Terpisah dari src/data/activities/*.js (yang dipakai kartu detail di bawahnya) —
// jadi list ini bisa diisi/diurutkan bebas tanpa mempengaruhi kartu activity lainnya.
//
// Cara menambah baris baru: tambahkan object { org, period, role, logo } ke array di bawah.
// `logo` opsional — isi dengan path gambar/logo organisasi (taruh filenya di folder `public/images/`,
// lalu isi logo: "/images/nama-file.png"). Kalau `logo` tidak diisi, otomatis pakai ikon default.

export const ORGANIZATION_ROSTER = [
  {
    org: "Nippon Club - Binus University",
    period: "Sep 2025 – Present",
    role: "Member",
    logo: "/images/nippon.jpeg",
  },
  // Tambahkan organisasi baru di sini
];
