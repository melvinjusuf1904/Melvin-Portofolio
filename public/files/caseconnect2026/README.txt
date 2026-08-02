Taruh file Excel (.xlsx/.xls/.csv) atau PDF untuk aktivitas "Business Case Competition" di folder ini.

Setelah file ditaruh di sini, buka:
src/data/activities/business-case-competition.js

lalu isi array `files` di bagian bawah, contoh:

files: [
  { url: "/files/business-case-competition/proposal.pdf", label: "Business Proposal" },
  { url: "/files/business-case-competition/financial-model.xlsx", label: "Financial Model" },
],

File akan otomatis muncul di halaman detail activity, di bagian "Documents",
lengkap dengan tombol View (untuk PDF) dan Download.
