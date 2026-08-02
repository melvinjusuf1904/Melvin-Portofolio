// TEMPLATE — copy file ini, rename jadi ticker emiten (contoh: bbca.js),
// isi semua field di bawah, lalu import & tambahkan ke array di index.js

const TICKER = {
  id: 2, // ganti dengan id unik (angka berikutnya yang belum dipakai)
  image: "/images/ticker.jpeg",
  company: "PT Nama Perusahaan Tbk",
  ticker: "TICKER",
  researchDate: "1 January 2026",
  initialPrice: "IDR 0",
  targetPrice: "IDR 0",
  recommendation: "BUY", // "BUY" | "HOLD" | "SELL"

  reportFile: "/public/files/PT Nama Perusahaan Tbk (TICKER)/Report_TICKER.pdf",
  reportStatementFile: "/public/files/PT Nama Perusahaan Tbk (TICKER)/Financial_Statement_&_Valuation.xlsx",

  investmentThesis: "Tulis thesis investasi di sini.\n",

  industryOverview: "## - Judul Sub-bagian\nIsi analisis industri di sini.\n",

  incomeStatement: "## - Judul Sub-bagian\nIsi analisis income statement di sini.\n",
  incomeStatementFile: "/public/files/PT Nama Perusahaan Tbk (TICKER)/Income_Statement.xlsx",

  balanceSheet: "## - Judul Sub-bagian\nIsi analisis balance sheet di sini.\n",
  balanceSheetFile: "/public/files/PT Nama Perusahaan Tbk (TICKER)/Balance_Sheet.xlsx",

  cashFlow: "## - Judul Sub-bagian\nIsi analisis cash flow di sini.\n",
  cashFlowFile: "/public/files/PT Nama Perusahaan Tbk (TICKER)/Cash_Flow.xlsx",

  forecast: "## - Judul Sub-bagian\nIsi proyeksi/forecast di sini.\n",
  forecastFile: "/public/files/PT Nama Perusahaan Tbk (TICKER)/Forecast.xlsx",

  valuation: "## - Judul Sub-bagian\nIsi analisis valuasi di sini.\n",

  risk: "## - Judul Sub-bagian\nIsi analisis risiko di sini.\n",
};

export default TICKER;
