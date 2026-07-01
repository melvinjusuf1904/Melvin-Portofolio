# Portfolio — Melvin Jusuf

Portfolio React yang tadinya 1 file besar (`portfolio.jsx`, 1282 baris),
sekarang sudah dipecah jadi struktur project yang rapi supaya gampang dicari,
diedit, dan direkonstruksi.

## Struktur folder

```
portfolio-project/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # entry point, jangan diubah kecuali tahu apa yg dilakukan
    ├── App.jsx                # cuma merender <Portfolio />
    ├── Portfolio.jsx          # "otak" utama: state navigasi + memilih halaman mana yg tampil
    ├── index.css              # font, animasi, efek hover (glow)
    ├── data/
    │   ├── portfolioData.js   # ⭐ SEMUA DATA KAMU: profil, edukasi, sertifikat, proyek, aktivitas dll
    │   └── skillTabs.js        # menggabungkan data skill dengan ikon lucide-react
    ├── components/
    │   ├── NavBar.jsx          # bar navigasi atas
    │   ├── Pill.jsx             # tombol pil (dipakai di nav & tab skill)
    │   ├── Card.jsx             # kotak dengan efek glow
    │   └── SiteFooter.jsx       # footer paling bawah
    └── pages/
        ├── HomePage.jsx             # Hero + Summary + Education + Skills + Certs/Awards
        ├── ProjectsListPage.jsx     # daftar kartu proyek
        ├── ProjectDetailPage.jsx    # halaman detail 1 proyek
        ├── ActivitiesListPage.jsx   # daftar kartu aktivitas/organisasi
        ├── ActivityDetailPage.jsx   # halaman detail 1 aktivitas
        └── ConnectPage.jsx          # halaman "Let's Connect"
```

**Aturan sederhana:** hampir semua konten yang mau kamu ganti (nama, bio, project,
sertifikat, dst) ada di **satu file**: `src/data/portfolioData.js`. Kamu jarang
perlu menyentuh file lain kecuali mau ubah tampilan/layout.

---

## 1. Cara menjalankan di local (pertama kali)

### Prasyarat
Install **Node.js** (versi 18 ke atas direkomendasikan) dari https://nodejs.org
— ini otomatis menyertakan `npm`. Cek dengan:

```bash
node -v
npm -v
```

### Langkah-langkah

1. Download/extract folder `portfolio-project` ini ke komputer kamu.
2. Buka terminal, masuk ke folder project:
   ```bash
   cd portfolio-project
   ```
3. Install semua dependency (React, Vite, lucide-react, dll):
   ```bash
   npm install
   ```
4. Jalankan development server:
   ```bash
   npm run dev
   ```
5. Terminal akan menampilkan alamat lokal, biasanya:
   ```
   Local:   http://localhost:5173/
   ```
   Buka alamat itu di browser. Setiap kali kamu save file, halaman akan
   otomatis refresh (hot reload).

Untuk berhenti, tekan `Ctrl + C` di terminal.

---

## 2. Cara mengubah / mengisi konten

### Ganti data profil, sertifikat, penghargaan, edukasi
Buka `src/data/portfolioData.js`, edit langsung objek `PROFILE`, `EDUCATION`,
`CERTS`, `AWARDS`. Contoh ganti email:

```js
export const PROFILE = {
  ...
  email: "emailbaru@gmail.com",
  ...
};
```

### Isi proyek (Projects)
Masih di `portfolioData.js`, cari array `PROJECTS`. Setiap objek di dalamnya
adalah 1 kartu proyek. Contoh:

```js
{
  id: 1,
  category: "Web App",
  title: "Sistem Absensi Sekolah",
  subtitle: "Aplikasi absensi berbasis web",
  description: "Deskripsi singkat 2-3 kalimat...",
  overview: "Penjelasan panjang tentang project ini...",
  techs: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/username/repo",
  live: "https://demo-project.com",
  verified: true,
}
```
Tambah proyek baru dengan menambah objek baru ke array (jangan lupa `id`
unik). Hapus proyek dengan menghapus objek dari array.

### Isi aktivitas/organisasi
Sama seperti Projects, tapi array-nya bernama `ACTIVITIES`.

### Ganti skill
Cari `SKILL_TABS_RAW` di `portfolioData.js`. `icon` di sini berupa **nama
string** (misalnya `"Code2"`), bukan komponen React langsung — pemetaan nama
ke ikon asli lucide-react dilakukan di `src/data/skillTabs.js`. Kalau kamu
mau pakai ikon baru:
1. Buka https://lucide.dev/icons untuk cari nama ikon.
2. Tambahkan nama ikon itu di `items` grup skill sebagai string, misalnya `icon: "Rocket"`.
3. Buka `src/data/skillTabs.js`, import ikon barunya:
   ```js
   import { Code2, Database, Compass, Briefcase, Rocket } from "lucide-react";
   const ICON_MAP = { Code2, Database, Compass, Briefcase, Rocket };
   ```

### Ganti warna/tema
Warna aksen gradient (biru-hijau) diatur oleh konstanta `ACCENT` di paling
bawah `portfolioData.js`:
```js
export const ACCENT = "linear-gradient(90deg, #7C9EFF, #5EEAD4)";
```
Warna latar gelap (`#0B0E14`), warna teks, dsb tersebar di masing-masing
komponen/halaman sebagai inline style — cari dan replace kalau mau ubah
skema warna besar-besaran.

### Ganti layout / tampilan section tertentu
Karena sudah dipecah per halaman, kamu tinggal cari file yang relevan:
- Ubah tampilan Hero / Summary / Skills / Sertifikat → `src/pages/HomePage.jsx`
- Ubah tampilan kartu proyek → `src/pages/ProjectsListPage.jsx`
- Ubah tampilan halaman detail proyek → `src/pages/ProjectDetailPage.jsx`
- Ubah nav bar → `src/components/NavBar.jsx`
- Ubah footer → `src/components/SiteFooter.jsx`

### Menambahkan foto asli (mengganti placeholder gambar)
Saat ini semua area gambar masih berupa placeholder kotak putus-putus
(`<ImageIcon />`). Untuk pakai foto asli:
1. Taruh file gambar di folder `src/assets/` (buat foldernya kalau belum ada).
2. Di file halaman terkait (misalnya `ProjectDetailPage.jsx`), import gambarnya:
   ```js
   import projectPhoto from "../assets/project1.jpg";
   ```
3. Ganti blok placeholder `<div>...<ImageIcon /></div>` dengan:
   ```jsx
   <img src={projectPhoto} alt="Nama project" style={{ width: "100%", height: 340, objectFit: "cover", borderRadius: 16 }} />
   ```

---

## 3. Build untuk deploy (hosting)

Kalau sudah selesai edit dan mau upload ke hosting (Vercel, Netlify, GitHub
Pages, dsb):

```bash
npm run build
```

Ini akan menghasilkan folder `dist/` berisi file statis (HTML, CSS, JS) yang
siap di-upload ke hosting manapun. Untuk preview hasil build secara lokal:

```bash
npm run preview
```

---

## Troubleshooting singkat

- **`npm: command not found`** → Node.js belum terinstall, install dari nodejs.org.
- **Halaman putih/blank saat `npm run dev`** → cek Console di browser (F12),
  biasanya ada error import path yang salah ketik.
- **Ikon tidak muncul** → pastikan nama ikon di `skillTabs.js` sama persis
  (case-sensitive) dengan nama komponen di lucide-react.
- **Port 5173 sudah dipakai** → Vite otomatis pindah ke port lain (5174, dst),
  cek pesan di terminal.
