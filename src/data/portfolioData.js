// ================= DATA (from LinkedIn) =================
// Ubah semua data profil, edukasi, skill, sertifikat, penghargaan,
// proyek, dan aktivitas kamu di file ini saja.
export const PROFILE = {
  name: "Melvin Jusuf",
  initials: "MJ",
  role: "Computer Science student at BINUS University, specializing in AI & Machine Learning, with a strong passion for Trading, Investing and Market Analysis.",
  bio: "Undergraduate Computer Science student at BINUS University @Bandung. My professional interests are twofold: deeply invested in the development of AI and Machine Learning technologies, while also actively pursuing expertise in Trading, Investing and Market Analysis. Currently leading tournament operations at Binusian Gaming and competing in national trading & case competitions.",
  email: "melvinjusuf@yahoo.com",
  phone: "+62 851-2101-6511",
  location: "Bandung, Indonesia",
  github: "https://github.com/melvinjusuf1904",
  linkedin: "https://linkedin.com/in/melvinjusuf",
  instagram: "https://instagram.com/v_inn_",
};

export const EDUCATION = [
  {
    school: "BINUS University",
    degree: "Bachelor of Science, Computer Science",
    period: "2025 – Present",
    grade: "GPA: 3.20/4.00",
  },
  {
    school: "SMA F. Tandean Tebing Tinggi",
    degree: "Senior High School, Science",
    period: "2020 – 2023",
    grade: "GPA: 90.64",
    activities: "Activities and Societies: Esports, Swimming, Basketball, Volleyball, Baseball",
  },
];

// Catatan: field `icon` di bawah adalah nama komponen ikon dari lucide-react.
// Import ikon-ikon ini dilakukan di src/data/icons.js lalu di-map ke sini.
export const SKILL_TABS_RAW = {
  "Technical Skills": [
    { group: "AI & Machine Learning", icon: "Code2", items: ["Artificial Intelligence", "Machine Learning", "Spec-Driven Development", "Azure AI"] },
    { group: "Trading & Finance", icon: "Database", items: ["Market Analysis", "Trading", "Investments", "Financial Literacy"] },
    { group: "Dev & Tools", icon: "Compass", items: ["Python", "HTML", "CSS", "Figma", "Git", "C++"] },
  ],
  "Management & Leadership": [
    { group: "Leadership", icon: "Briefcase", items: ["Team Coordination", "Tournament Operations", "Leadership and Teamwork"] },
    { group: "Problem Solving", icon: "Compass", items: ["Critical Thinking and Teamwork", "Strategic Planning", "Event Scheduling"] },
  ],
  Languages: [
    { group: "English", icon: "Code2", items: ["Limited working proficiency"] },
    { group: "Indonesian", icon: "Code2", items: ["Native or bilingual proficiency"] },
  ],
};

export const CERTS = [
  { name: "Learn Machine Learning for Beginners", issuer: "Dicoding Indonesia", year: "2026" },
  { name: "Get Started with Programming using Python", issuer: "Dicoding Indonesia", year: "2026" },
  { name: "Learn Cloud Basics and AI Gen on AWS", issuer: "Dicoding Indonesia", year: "2026" },
  { name: "Introduction to Financial Literacy", issuer: "Dicoding Indonesia", year: "2026" },
  { name: "Spec-Driven Development with Kiro", issuer: "Dicoding Indonesia", year: "2026" },
  { name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft", year: "2026" },
  { name: "Learn AI", issuer: "Dicoding Indonesia", year: "2026" },
];

export const AWARDS = [
  { title: "[National] Top 10 Finalist Borneo Online Trading Competition (BOTC) by KSPM GI BEI UPR", year: "2026" },
  { title: "[National] Finalist CaseConnect Mini Case Competition by DWDG", year: "2026" },
  { title: "[University] Top 4 Finalist Rector Cup MLBB by BINUS University", year: "2025" },
];

// Template kosong — isi laporan Equity Research kamu sendiri di sini.
// Tips: pakai "\n\n" di dalam field text panjang (investmentThesis, industryOverview,
// incomeStatement, balanceSheet, cashFlow, forecast, valuation, risk) untuk ganti paragraf.
// recommendation hanya boleh salah satu dari: "BUY", "HOLD", "SELL"
export const EQUITY_RESEARCH = [
  {
    id: 1,
    image: "/images/raja.jpeg",
    company: "PT Rukun Raharja Tbk",
    ticker: "RAJA",
    researchDate: "17 March 2026",
    initialPrice: "IDR 3.410",
    targetPrice: "IDR 8.000",
    recommendation: "BUY",

    investmentThesis:
      "RAJA memiliki potensi kenaikan harga saham yang menarik didukung oleh ekspansi jaringan gas dan proyek baru, " +
      "stabilitas penndapatan berbasis kontrak, dan potensi peningkatan valuasi sektor energi. " +
      "Target harga (12 bulan): Rp7.000 – Rp8.000 dengan potensi kenaikan: +70% hingga +135%.\n",

    industryOverview:
      "## Struktur Industri & Rantai Nilai\n" +
      "Industri ga bumi di Indonesia bergerak dalam struktur yang terikat ketat oleh regulasi (*heavily regulated*). " +
      "Rantai nilainya terbagi menjadi tiga pilar: **Hulu** (Eksplorasi), **Midstream** (Transmisi/Pipa), dan **Hilir** (Distribusi ke ujung pengguna). " +
      "Dalam struktur ini, pemain infrastruktur seperti **RAJA** memiliki posisi strategis sebagi 'jembatan' yang menhubungkan sumber gas di hulu dengan pusat permintaan industri di Jawa dan Sumatera" +
      "Ketergantungan sektor manufaktur dan pembangkit listrik terhadao pipa transmisi menciptakan hambatan masuk (*barrier to entry*)\n\n" +

      "## Lanskap Persaingan & Parit Ekonomi\n" +
      "Tingkat persaingan di sub-sektor transmisi gas cenderung rendah karena sifat industrinya yang merupakan **monopoli alami** (*natural monopoly*). " +
      "Pembangunan pipa gas memerlukan belanja modal (capex) yang massif dan perizinan lahan yang kompleks. " +
      "Persaingan lebih bersifat kolaboratif dan terbagi berdasarkan wilayah geografis. " +
      "Keunggulan kompetitif **RAJA** terletak pada kepemilikan aset di jalur distribusi kunci yang sudah terintegrasi dengan Kawasan industri (KI) utama, " +
      "memberikan “parit ekonomi” (*economic moat*) yang kuat dibandingkan competitor yang baru masuk." +
      "Dibandingkan dengan pemain besar seperti **PGAS**, **RAJA** masih memiliki skala infrastruktur yang lebih kecil. Namun, hal ini justru mencerminkan potensi pertumbuhan yang signifikan, terutama di Tengah ekspansi jaringan gas nasional dan meningkatnya permintaan domestik.\n\n" +
      
      "## Ukuran Pasar & Permintaan Domestik\n" +
      "",

    incomeStatement:
      "Revenue has shown consistent year-over-year growth, supported by capacity expansion and stable tariff structures. " +
      "Operating margins remain healthy relative to industry peers.\n\n" +
      "[Ganti dengan ringkasan/angka Income Statement dari laporan kamu — Revenue, EBITDA, Net Income beberapa tahun terakhir.]",

    balanceSheet:
      "The company maintains a manageable debt-to-equity ratio with sufficient liquidity to fund ongoing infrastructure " +
      "projects.\n\n" +
      "[Ganti dengan ringkasan Balance Sheet dari laporan kamu — Total Assets, Total Liabilities, Equity, rasio-rasio kunci.]",

    cashFlow:
      "Operating cash flow remains positive and sufficient to cover both capital expenditures and dividend distributions.\n\n" +
      "[Ganti dengan ringkasan Cash Flow dari laporan kamu — Operating, Investing, Financing cash flow.]",

    forecast:
      "We forecast continued revenue growth over the next three years, driven by new pipeline capacity and gradual " +
      "margin improvement.\n\n" +
      "[Ganti dengan proyeksi keuangan dari laporan kamu — asumsi pertumbuhan, proyeksi revenue/EBITDA/Net Income.]",

    valuation:
      "Using a combination of Discounted Cash Flow (DCF) and relative valuation (P/E, EV/EBITDA) against industry peers, " +
      "we arrive at a target price of IDR 920 per share.\n\n" +
      "[Ganti dengan metodologi & hasil valuasi lengkap dari laporan kamu.]",

    risk:
      "Key risks include regulatory changes in gas pricing policy, project execution delays, and commodity price " +
      "volatility.\n\n" +
      "[Ganti dengan daftar risiko utama dari laporan kamu.]",
  },
];

// Template kosong — isi proyek kamu sendiri di sini
export const PROJECTS = [
  {
    id: 1,
    category: "Research & Analysis",
    title: "Equity Research 2026",
    subtitle: "Equity Research on Indonesian Publicly Listed Companies",
    description: "Conducted comprehensive equity research on publicly listed companies in the Indonesian stock market. Each report " +
    "includes industry analysis, financial statement analysis, valuation, investment thesis, key risks, and a Buy/Hold/Sell recommendation " +
    "based on fundamental analysis.",
    // Tips: pakai "\n\n" untuk bikin paragraf baru (ganti baris) di Project Overview.
    overview:
      "A collection of equity research reports on Indonesian listed companies, featuring fundamental analysis, valuation, investment thesis, " +
      "risk assessment, and investment recommendations.\n\n" +
      "Companies Covered:\n" +
      "- PT Rukun Raharja Tbk (RAJA)",
    techs: ["Market Analysis", "Market Research", "Equity Research", "Investments", "Report Writing"],
    github: "https://github.com/melvinjusuf1904/Equity-Research-2026",
    live: "",
    verified: true,
    image: [
      "/images/equity2026.jpeg",
    ],
    youtube: "", // contoh: "https://www.youtube.com/watch?v=XXXXXXXXXXX" atau link youtu.be/embed
  },
];

// Template kosong — isi aktivitas/organisasi kamu sendiri di sini
export const ACTIVITIES = [
  {
    id: 3,
    period: "Sep 2025 – Present",
    org: "Binusian Gaming",
    role: "Activist & Head Committee",
    images: [
      "/images/MelvinCommittee.pdf",
    ], // contoh: ["/images/foto1.jpg", "/images/foto2.jpg"] — kosongkan array untuk pakai placeholder
    points: [
      "Led the planning and execution of the BINUS MLBB 2026 tournament, overseeing committee coordination, tournament operations, and event delivery from planning to post-event evaluation.", 
      "Collaborated with cross-functional committees to manage competition formats, participant communications, scheduling, and operational issues, ensuring a smooth and successful tournament."
    ],
    notes:
      "As a Binusian Gaming Activist, I contributed to organizing and supporting gaming-related events and" +
      "competitive activities within BINUS University.\n\n I collaborated with committee members across different" +
      "divisions to ensure smooth event execution, participant engagement, and effective team coordination." +
      "As the Head of Tournament Committee – BINUS MLBB 2026, I led the planning and execution of a" +
      "university-level Mobile Legends tournament, managing the event from initial planning to post-event" +
      "evaluation.\n\n My role involved coordinating committee members, designing tournament operations," +
      "solving on-site issues, and ensuring the event was delivered successfully.",
    focusAreas: [
      "Planned and executed a university-level Mobile Legends tournament from concept to completion.",
      "Led and coordinated a cross-functional committee to ensure efficient communication and collaboration across divisions.", 
      "Designed tournament formats, competition rules, schedules, and operational workflows.",
      "Managed participant registration, communication, and overall tournament administration.",
      "Supervised tournament operations, resolved real-time issues, and ensured smooth event execution.",
      "Conducted post-event evaluation, documentation, and reporting to improve future events.",
      "Strengthened leadership, teamwork, project management, and problem-solving skills through organizing large-scale gaming events.",
    ],
  },
  {
    id: 2,
    period: "Apr 2026 – May 2026",
    org: "Business Case Competition",
    role: "Participant / Finalist",
    images: [
      "/images/CCcert.png",
      "/images/caseconnect1.jpeg",
      "/images/caseconnect2.jpeg",
      "/images/caseconnect3.jpeg",
    ], // contoh: ["/images/foto1.jpg", "/images/foto2.jpg"] — kosongkan array untuk pakai placeholder
    points: [
      "Co-Developed a Comprehensive Business Strategy.", 
      "Collaborated to Conduct Market and Operational Analysis."
    ],
    notes:
      "Stepping into the Unknown: My First Business Case Experience at CaseConnect 2026!🚀\n\n" +
      "They say growth begins at the end of your comfort zone, and this past week, I truly felt that.\n\n" +
      "Representing Team StockQueue, we dived deep into the challenges of the coffee industry. Our mission? To craft a strategic solution for Brewtique Indonesia." +
      "We proposed a strategy centered on 'Premium, Digital, and Sustainability,' aiming to turn innovation into real impact in a highly competitive market.\n\n" +
      "Coming from a background where I usually analyze stock charts and market data, tackling a real-world business restructuring case" +
      "was both challenging and eye-opening. It required a different kind of analytical thinking—one that balances strategic vision with operational reality.",
    focusAreas: [
      "Strategic Business Restructing & Innovation.", 
      "Cross-Disclipinary Analytical Thinking.",
      "Market Competitive Strategy.",
      "High-Performing Team Synergy."
    ],
  },
  {
    id: 1,
    period: "Apr 2026 – May 2026",
    org: "Borneo Online Trading Competition",
    role: "Participant / Top 10 Finalist",
    images: [
      "/images/BOTCcert.jpeg",
      "/images/borneo.jpeg",
      "/images/rank.jpeg",
    ], // contoh: ["/images/foto1.jpg", "/images/foto2.jpg"] — kosongkan array untuk pakai placeholder
    points: [
      "Secured 8th place in the national Borneo Online Trading Competition 2026, demonstrating strong trading skills and market analysis.", 
      "Monitored JCI (IGHG) Market Dynamics and Issuer Price Actiobs."
    ],
    notes:
      "Honored to be among the Top 10 Finalists of the borneo Online Trading Competition 2026!🚀\n\n" +
      "A huge shoutout to my teammate @GarrethDavies (https://lnkd.in/ge3CxUCR), for the incredible collaboration and strategic" +
      "alignment throughtout the trading period.\n\n" +
      "I am thrilled to share that my team, StockQueue, has secured the 8th position in this prestigious competition!" +
      "One of the key drivers behind our performance was our strategic positioning in $BRPT (PT Barito Pasific Tbk), " +
      "which we identified as the most solid issuer throughout this period.",
    focusAreas: [
      "Strategic Stock Selection & Market Timing.", 
      "Advanced Technical Analysis.",
      "Market Psychology & Discliplined Execution.",
      "Strategic Collaboration & Teamwork.",
      "Capital Market Resilience & Growth."
    ],
  },
];

export const NAV = ["Home", "My Projects", "Activities", "Let's Connect"];

// floating particle positions for hero background
export const PARTICLES = [
  { left: "8%", top: "18%", size: 5, duration: 6, delay: 0 },
  { left: "15%", top: "70%", size: 3, duration: 8, delay: 1 },
  { left: "28%", top: "40%", size: 4, duration: 7, delay: 0.5 },
  { left: "40%", top: "12%", size: 3, duration: 9, delay: 2 },
  { left: "60%", top: "80%", size: 4, duration: 6.5, delay: 1.5 },
  { left: "72%", top: "20%", size: 5, duration: 7.5, delay: 0.8 },
  { left: "85%", top: "60%", size: 3, duration: 8.5, delay: 2.2 },
  { left: "92%", top: "15%", size: 4, duration: 6, delay: 1.2 },
  { left: "50%", top: "55%", size: 3, duration: 9, delay: 0.3 },
  { left: "22%", top: "88%", size: 4, duration: 7, delay: 1.8 },
];
// ================= END DATA =================

export const ACCENT = "linear-gradient(90deg, #7C9EFF, #5EEAD4)";
