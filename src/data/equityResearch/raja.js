// Data equity research untuk PT Rukun Raharja Tbk (RAJA)
const RAJA = {
    id: 1,
    image: "/images/raja.jpeg",
    company: "PT Rukun Raharja Tbk",
    ticker: "RAJA",
    researchDate: "17 March 2026",
    initialPrice: "IDR 3.410",
    targetPrice: "IDR 8.000",
    recommendation: "BUY",

    reportFile: "/files/raja/RAJA_Report.pdf",
    reportStatementFile: "/public/files/raja/RAJA_Financial_Statement_and_Valuation.xlsx",

    investmentThesis:
      "RAJA memiliki potensi kenaikan harga saham yang menarik didukung oleh ekspansi jaringan gas dan proyek baru, " +
      "stabilitas penndapatan berbasis kontrak, dan potensi peningkatan valuasi sektor energi. " +
      "Target harga (12 bulan): Rp7.000 – Rp8.000 dengan potensi kenaikan: +70% hingga +135%.\n",

    industryOverview:
      "## - Struktur Industri & Rantai Nilai\n" +
      "Industri gas bumi di Indonesia bergerak dalam struktur yang terikat ketat oleh regulasi (*heavily regulated*). " +
      "Rantai nilainya terbagi menjadi tiga pilar: **Hulu** (Eksplorasi), **Midstream** (Transmisi/Pipa), dan **Hilir** (Distribusi ke ujung pengguna). " +
      "Dalam struktur ini, pemain infrastruktur seperti **RAJA** memiliki posisi strategis sebagi 'jembatan' yang menhubungkan sumber gas di hulu dengan pusat permintaan industri di Jawa dan Sumatera" +
      "Ketergantungan sektor manufaktur dan pembangkit listrik terhadao pipa transmisi menciptakan hambatan masuk (*barrier to entry*)\n" +

      "## - Lanskap Persaingan & Parit Ekonomi\n" +
      "Tingkat persaingan di sub-sektor transmisi gas cenderung rendah karena sifat industrinya yang merupakan **monopoli alami** (*natural monopoly*). " +
      "Pembangunan pipa gas memerlukan belanja modal (capex) yang massif dan perizinan lahan yang kompleks. " +
      "Persaingan lebih bersifat kolaboratif dan terbagi berdasarkan wilayah geografis. " +
      "Keunggulan kompetitif **RAJA** terletak pada kepemilikan aset di jalur distribusi kunci yang sudah terintegrasi dengan Kawasan industri (KI) utama, " +
      "memberikan “parit ekonomi” (*economic moat*) yang kuat dibandingkan competitor yang baru masuk." +
      "Dibandingkan dengan pemain besar seperti **PGAS**, **RAJA** masih memiliki skala infrastruktur yang lebih kecil. Namun, hal ini justru mencerminkan potensi pertumbuhan yang signifikan, terutama di Tengah ekspansi jaringan gas nasional dan meningkatnya permintaan domestik.\n" +
      
      "## - Ukuran Pasar & Permintaan Domestik\n" +
      "Pasar gas domestik Indonesia diproyeksikan terus membesar seiring dengan kebijakan pemerintah untuk mengurangi ketergantungan pada impor BBM dan Batubara. " +
      "Berdasarkan Neraca Gas Bumi Indonesia, terdapat pergeseran signifikan di mana Lokasi gas untuk kebutuhan dalam negeri kini mendominasi dibandingkan ekspor. " +
      "Permintaan utama datang dari sektor pupuk, kelistrikan, dan industri umum yang mencari efisiensi biaya energi serta kepatuhan terhadap standar emisi yang lebih ketat.\n" +
      
      "## - Tren & Prospek Pertumbuhan: Menuju Net Zero\n" +
      "Sektor ini berada dalam tren “Gas-to-Power”. Sebagai energi transisi, gas bumi dianggap paling siap menggantikan Batubara karena emisi " +
      "karbonnya yang jauh lebih rendah. Prospek pertumbuhan industri ini didorong oleh: Integrasi Infrastruktur Nasional: Penyelesaiian proyek " +
      "transmisi gas (seperti Pipa Cisem dan Dumai-Sei Mangkei) yang akan menciptakan konektivitas gas dari ujung Sumatera hingga Jawa dan " +
      "Hilirisasi Industri: Pertumbuhan Kawasan industry baru diluar Jawa yang membutuhkan pasokan gas stabil untuk operasional pabrik.\n",

    incomeStatement:
      "## - Pendapatan & Profitabilitas\n " +
      "1. Total Pendapatan sempat menurun dari Rp2.487 M (2016) ke titik terendah Rp1.405 M (2021), lalu **rebound kuat** ke Rp4.394 M di 2025 — pertumbuhan signifikan terutama sejak 2022 (naik dari Rp1.885 M → Rp4.394 M dalam 4 tahun).\n" +
      "2. Laba Kotor relatif stabil di kisaran Rp220–330 M selama 2016–2021, kemudian **melonjak tajam** ke Rp1.006–1.189 M sejak 2023, menandakan perbaikan margin yang cukup besar.\n" +
      "3. Laba Usaha (Operating Profit) mengikuti pola serupa: rendah di 2017–2021 (Rp26–184 M), lalu naik drastis ke Rp733–782 M di 2023–2024, sedikit turun ke Rp772 M di 2025.\n" +
      
      "## - Bottom Line\n" +
      "1. Laba Bersih Tahun Berjalan tumbuh dari Rp103 M (2016) menjadi Rp577 M (2025), dengan lonjakan besar mulai 2022 (Rp161 M) hingga 2025.\n" +
      "2. EPS naik dari Rp21,3 (2016) sempat anjlok ke Rp4,7 (2020, dampak pandemi), lalu pulih kuat menjadi Rp106,1 di 2025 — level tertinggi dalam periode ini.\n" +
      
      "## - Poin Perhatian\n" +
      "1. Beban Keuangan meningkat cukup besar sejak 2023 (dari ~Rp40 M ke ~Rp166 M), sejalan dengan ekspansi yang didanai utang.\n" +
      "2. Ada kontribusi laba dari Entitas Asosiasi yang signifikan di 2025 (Rp325 M), turut mendorong Laba Sebelum Pajak.\n",
    // Taruh file Excel/PDF Income Statement di public/files/, lalu isi path-nya di sini.
    // Contoh: incomeStatementFile: "/files/income-statement.xlsx",
    incomeStatementFile: "/files/raja/RAJA_Income_Statement.xlsx", // "/files/income-statement.xlsx" atau "/files/income-statement.pdf"

    balanceSheet:
      "## - Pertumbuhan Neraca\n" +
      "1. Total Aset melonjak dari Rp1.951 M (2016) menjadi Rp7.986 M (2025), dengan akselerasi signifikan di 2020–2025 (CAGR ~15% p.a., dan tumbuh 49% YoY di 2025 saja — dari Rp5.354 M ke Rp7.986 M).\n" +
      "2. Pertumbuhan didorong terutama oleh Aset Tidak Lancar (Rp3.886 M → Rp5.685 M di 2025), konsisten dengan ekspansi infrastruktur/kapasitas bisnis gas & energi RAJA.\n" +
      
      "## - Likuiditas\n" +
      "1. Kas & setara kas naik tajam di 2025 menjadi Rp1.519 M (dari Rp717 M di 2024, lebih dari 2x lipat) — sinyal posisi kas yang jauh lebih kuat, kemungkinan terkait pendanaan baru atau divestasi.\n" +
      "2. Piutang usaha & aset lancar lainnya juga naik seiring skala bisnis.\n" +
      
      "## - Struktur Permodalan & Leverage\n" +
      "1. Total Liabilitas naik dari Rp722 M (2016) ke Rp3.707 M (2025), dengan lonjakan besar mulai 2021 (utang bank jangka panjang jadi kontributor utama: Rp1.809 M di 2025).\n" +
      "2. Debt-to-Equity membaik dari ~1,13x (2023) menjadi ~0,87x (2025) karena pertumbuhan ekuitas lebih cepat dari liabilitas — indikasi leverage masih terkelola meski nominal utang terus bertambah.\n" +
      
      "## - Ekuitas\n" +
      "1. Total Ekuitas melonjak dari Rp2.777 M (2024) ke Rp4.279 M (2025), naik 54% YoY.\n" +
      "2. Saldo laba tumbuh stabil (Rp1.704 M → Rp1.858 M), mencerminkan profitabilitas yang konsisten.\n" +
      "3. 'Ekuitas Lainnya' melonjak drastis dari Rp89 M (2024) ke Rp985 M (2025) — ini item non-standar yang perlu dicek lebih lanjut (kemungkinan revaluasi aset, translasi mata uang, atau instrumen ekuitas baru), karena kontribusinya besar terhadap kenaikan ekuitas total.\n" +
      "4. Kepentingan Non-Pengendali (NCI) juga naik signifikan (Rp432 M → Rp716 M), sejalan dengan konsolidasi anak usaha.\n",
    balanceSheetFile: "/files/raja/RAJA_Balance_Sheet.xlsx", // "/files/balance-sheet.xlsx" atau "/files/balance-sheet.pdf"

    cashFlow:
      "## - Arus Kas Operasi (CFO)\n" +
      "1. CFO tumbuh sangat kuat: dari negatif Rp51 M (2021) menjadi Rp883 M (2025) — tren naik konsisten sejak 2022 (Rp184 M → Rp674 M di 2023 → Rp773 M di 2024 → Rp883 M di 2025).\n" +
      "2. Penerimaan dari pelanggan naik tajam (Rp1.913 M di 2022 → Rp4.480 M di 2025), mencerminkan pertumbuhan pendapatan operasional yang solid.\n" +
      "3. Beban bunga dan pajak yang dibayar juga meningkat seiring skala bisnis (bunga -Rp153 M, pajak -Rp258 M di 2025) — konsisten dengan kenaikan utang dan profitabilitas.\n" +
      
      "## - Arus Kas Investasi (CFI)\n" +
      "2025 adalah tahun capex & aksi korporasi besar: CFI -Rp695 M, didorong oleh:\n" +
      "1. Belanja modal (capex) -Rp745 M — lompatan besar dari -Rp164 M (2024)\n" +
      "2. Akuisisi -Rp399 M\n" +
      "3. Refundable deposit -Rp209 M, penempatan investasi jangka panjang -Rp212 M (gabungan)\n" +
      "4. Namun ada **penerimaan divestasi Rp946 M** — item besar yang menjelaskan lonjakan kas di neraca 2025 (sejalan dengan temuan di Balance Sheet sebelumnya).\n\n" +
      
      "Pola historis: CFI mayoritas negatif (capex-heavy), dengan pengecualian 2017 (+Rp552 M, ada pencairan uang muka investasi besar).\n" +

      "## - Arus Kas Pendanaan (CFF)\n" +
      "CFF 2025 positif Rp666 M — kebalikan dari 2024 (-Rp558 M), didorong oleh:\n" +
      "1. Penerimaan utang bank Rp2.089 M vs pembayaran -Rp1.454 M (net +Rp635 M)\n" +
      "2. Right issue/penawaran umum saham +Rp226 M dan setoran modal non-pengendali +Rp123 M\n" +
      "3. Diimbangi pembayaran dividen -Rp251 M (ke pemegang saham) dan -Rp59 M (ke NCI anak usaha)\n" +

      "Pembayaran dividen naik signifikan dari tahun ke tahun (-Rp69 M di 2023 → -Rp162 M di 2024 → -Rp251 M di 2025), menandakan komitmen dividen yang meningkat seiring pertumbuhan laba.\n",
    cashFlowFile: "/files/raja/RAJA_Cash_Flow.xlsx", // "/files/cash-flow.xlsx" atau "/files/cash-flow.pdf"

    forecast:
      "## - Asumsi Kunci\n" +
      "1. Pertumbuhan pendapatan: 21,2% (2026F, berbasis Q1 aktual + top-down), lalu 32,6% p.a. (2027F–2030F, mengikuti CAGR historis 3 tahun)\n" +
      "2. Margin laba kotor stabil di 28,9%, beban usaha 8,7% dari pendapatan\n" +
      "3. Capex 12,8% dari pendapatan; OCF 20,3% dari pendapatan\n" +
      "4. Payout ratio dividen 51,7% dari laba bersih tahun sebelumnya\n" +
      "5. Total debt diasumsikan flat di Rp2.547 M (tidak ada pertumbuhan debt baru)\n" +
      "6. Tarif pajak efektif 32,2%; porsi laba untuk pemilik entitas induk 86,7%\n" +
      
      "## - Proyeksi Laba Rugi\n" +
      "Pendapatan berlipat ~3,1x dari 2026F ke 2030F; laba bersih induk berlipat ~3,4x — margin bersih membaik seiring skala usaha.\n" +
      
      "## - Proyeksi Neraca & Leverage\n" +
      "1. Total Aset naik dari Rp7.561 M (2026F) ke Rp23.370 M (2030F)\n" +
      "2. Karena total debt diasumsikan flat (Rp2.547 M) sementara ekuitas terus tumbuh, **rasio D/E membaik signifikan:** 0,62x (2026F) → 0,31x (2030F)\n" +
      "3. Net Debt/Equity turun tajam mendekati nol (0,21x → 0,01x) — proyeksi mengasumsikan RAJA jadi hampir net-debt-free di 2030F\n" +
      
      "## - Proyeksi Arus Kas\n" +
      "1. Free Cash Flow (FCF) tumbuh dari Rp401 M (2026F) menjadi Rp1.241 M (2030F)\n" +
      "2. FCF per share naik dari Rp95 ke Rp293\n" +
      "3. Kas akhir periode naik bertahap dari Rp1.688 M ke Rp2.470 M\n" +
      
      "## - Rasio Profitabilitas & Valuasi Fundamental\n" +
      "1. ROE meningkat tajam: 18,4% (2026F) → 30,6% (2030F) — didorong oleh operating leverage + financial leverage yang meningkat (1,85x → 2,80x) meski D/E membaik (karena aset tumbuh lebih cepat dari ekuitas)\n" +
      "2. ROA juga naik stabil: 9,9% → 10,9%\n" +
      "3. Book Value per Share naik dari Rp965 (2026F) ke Rp1.973 (2030F)\n",
    forecastFile: "/files/raja/RAJA_Forecast.xlsx", // "/files/forecast.xlsx" atau "/files/forecast.pdf"

    valuation:
      "Kami mengeluarkan rekomendasi **BUY** untuk **RAJA** berdasarkan analisis valuasi yang ketat menggunakan empat pendekatan berbeda: DCF, **relative valuation**, DDM, dan **sum of the parts**. " +
      "Kami menetapkan bobot 100%pada pendekatan DCF karena kemampuannya yang unggul dalam menangkap nilai intrinsik jangka panjang perusahaan melalui perkiraan arus kas yang terperinci, " +
      "wawasan operasional dari proyek infrastruktur baru (seperti CISEM II), dan proyeksi keuangan yang komprehensif. " +
      "Pendekatan lainnya juga mengonfirmasi rekomendasi beli kami untuk RAJA, mengingat harga pasar saat ini masih berada di area bawah dari rentang nilai wajar yang diproyeksikan.\n " +
      
      "## - Valuasi DCF: IDR 8.000, Potensi Kenaikan 134,6%\n" +
      "**Pendapatan:** Volume distribusi gas dan tarif transmisi rata-rata menjadi penggerak utama pendapatan, yang kami proyeksikan akan mengantarkan nilai ekuitas perusahaan ke target IDR 8.000 per lembar saham.\n\n" +
      "**Volume Distribusi:** Kami memproyeksikan volume pengiriman gas sebesar 290–315 MMSCFD secara tahunan pada periode 2026–27E, dan mencapai target agresif **400 MMSCFD pada tahun 2030**\n\n" +
      "Faktor pendorong utama meliputi:\n" +
      "**a)** Momentum berkelanjutan RAJA yang tercermin dalam rekor volume distribusi sebesar 270 MMSCFD pada tahun 2025 (+3,8% y/y);\n" +
      "**b)** Ekspansi infrastruktur pipa yang agresif (PSN 2026), termasuk kontribusi penuh dari pipa operasional baru;\n" +
      "**c)** Peningkatan permintaan dari kawasan industri di Jawa Tengah dan Sumatera seiring dengan selesainya interkoneksi pipa nasional; dan\n" +
      "**d)** Suplai gas yang memadai dari akuisisi blok hulu baru.\n\n" +
      "Prakiraan ini memberikan dasar yang kuat bagi **Upside 134,6%** yang kami proyeksikan, didukung oleh arus kas masa depan yang terdiskon secara optimal dalam model DCF kami.\n\n" +
      "**Harga Transaksi Rata-rata:** Tarif transmisi rata-rata tetap stabil di tengah kebijakan HGBT . Kami mempertahankan asumsi tarif konservatif, dengan ekspektasi penyesuaian tarif pada segmen non-HGBT yang meningkat " +
      "sejalan dengan inflasi, sehingga menjaga top-line tetap kuat untuk mencapai valuasi target.\n\n" +
      "**Biaya & Margin:** Kami memproyeksikan efisiensi biaya melalui skala ekonomi pipa terintegrasi. Meskipun **Margin Laba Kotor** diproyeksikan sedikit melandai ke kisaran 22%-20% pada 2030 akibat biaya pemeliharaan infrastruktur, " +
      "pertumbuhan volume distribusi yang eksponensial (dari 270 ke 400 MMSCFD) akan jauh melampaui kenaikan biaya tersebut, sehingga menghasilkan lonjakan laba bersih yang signifikan bagi pemegang saham.\n" +
      
      "## - Net Working Capital\n" +
      "**Persediaan (Inventory):** Mewakili komponen modal kerja yang signifikan, terdiri dari suku cadang infrastruktur pipa, material pemeliharaan, serta sediaan gas dalam pipa (line pack). Tingkat persediaan diselaraskan " +
      "dengan standar industri energi midstream dan dikaitkan dengan proyeksi volume distribusi tahun depan guna menjamin kontinuitas operasional pada jalur transmisi utama seperti CISEM dan DUSEM.\n\n" +
      "**Piutang dan Utang (Receivables and Payables):** Dihitung menggunakan hari perputaran (turnover days), piutang tetap terjaga secara efisien sejalan dengan kontrak pembayaran dari pelanggan industri besar dan PLN, sementara utang dagang dikelola untuk memastikan " +
      "efisiensi arus kas dan hubungan pemasok yang kuat di sektor hulu. Asumsi modal kerja ini secara akurat mencerminkan siklus operasional infrastruktur gas RAJA.\n\n" +
      "**Pendapatan Ditangguhkan (Deferred Revenue):** Dimodelkan secara konsisten dengan praktik pengakuan pendapatan kontrak transmisi jangka panjang. Hal ini menangkap perbedaan waktu antara arus kas masuk dari " +
      "amandemen kontrak atau biaya pemesanan kapasitas (capacity booking) dengan pengakuan pendapatan berdasarkan volume gas yang benar-benar dialirkan.\n",

    risk:
      "## - Risiko Pasar: VOlatilitas Permintaan\n" +
      "Kinerja RAJA sangat berkorelasi dengan aktivitas manufaktur domestik. Risiko pasar muncul dari potensi pelambatan indeks **Purchasing Managers’ Index (PMI)** pada sektor-sektor kunci seperti keramik, sarung tangan karet, dan baja yang merupakan konsumen gas utama. " +
      "Selain itu, percepatan adopsi energi terbarukan (EBT) yang didukung oleh pendanaan internasional (seperti skema JETP) dapat menciptakan tekanan kompetitif. Jika biaya teknologi penyimpanan energi (battery " +
      "storage) turun lebih cepat dari perkiraan, substitusi gas bumi ke listrik berbasis EBT di kawasan industri dapat mengurangi utilisasi pipa distribusi RAJA dalam jangka panjang." +

      "## - Risiko Politik: Dinamika Transisi Kepemimpinan\n" +
      "Sebagai pemain infrastruktur yang banyak terlibat dalam **Proyek Strategis Nasional (PSN)**, RAJA terpapar pada risiko siklus politik. " +
      "Perubahan prioritas pembangunan pada kabinet baru atau pergeseran fokus anggaran negara dapat memengaruhi kecepatan penyelesaian infrastruktur interkoneksi gas (seperti pipa transmisi antar pulau). " +
      "Selain itu, risiko geopolitik global yang memengaruhi rantai pasok energi dunia dapat memicu intervensi domestik berupa kebijakan kewajiban pasok pasar dalam negeri (Domestic Market Obligation/DMO) yang lebih ketat, yang berpotensi membatasi fleksibilitas perusahaan dalam mengoptimalkan margin penjualan gas.\n\n" +
      
      "## - Risiko Operasional\n" +
      "Kinerja masa depan perusahaan sangat bergantung pada penyelesaian proyek strategis nasional, seperti **Pipa Cisem Tahap II.** " +
      "Risiko operasional muncul dari potensi hambatan teknis di lapangan, perizinan lahan yang kompleks, atau kendala rantai pasok material yang dapat menggeser jadwal operasional komersial (Commercial Operation Date). " +
      "Penundaan integrasi ini tidak hanya menunda realisasi pendapatan tetapi juga meningkatkan beban biaya bunga (capitalized interest) yang dapat menggerus profitabilitas jangka pendek.\n",
};

export default RAJA;
