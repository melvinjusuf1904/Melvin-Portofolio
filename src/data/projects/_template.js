// TEMPLATE — copy file ini, rename jadi nama project (contoh: trading-bot.js),
// isi semua field di bawah, lalu import & tambahkan ke array di index.js

const PROJECT_NAME = {
  id: 2, // ganti dengan id unik (angka berikutnya yang belum dipakai)
  category: "Research & Analysis", // contoh: "Web Development", "Data Science", dll
  title: "Judul Project",
  subtitle: "Subjudul singkat project",
  description: "Deskripsi singkat project (muncul di card list).",
  // Tips: pakai "\n\n" untuk bikin paragraf baru (ganti baris) di Project Overview.
  overview: "Deskripsi lengkap project di halaman detail.\n\n" + "Poin tambahan jika ada.",
  techs: ["Tech 1", "Tech 2", "Tech 3"],
  github: "", // link repo github, kosongkan jika tidak ada
  live: "", // link demo live, kosongkan jika tidak ada
  verified: false,
  image: [
    "/images/project-image.jpeg",
  ],
  youtube: "", // contoh: "https://www.youtube.com/watch?v=XXXXXXXXXXX" atau link youtu.be/embed
};

export default PROJECT_NAME;
