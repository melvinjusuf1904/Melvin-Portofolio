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

// Template kosong — isi proyek kamu sendiri di sini
export const PROJECTS = [
  {
    id: 1,
    category: "Category / Tag",
    title: "Project Title",
    subtitle: "Short project subtitle",
    description: "Add a short 2-3 sentence description of this project here. Explain what it does and your role in it.",
    overview:
      "Write a longer project overview here — the problem it solves, your role, the team you worked with, and what you built.",
    techs: ["Tech 1", "Tech 2", "Tech 3"],
    github: "",
    live: "",
    verified: false,
    image: "",
    youtube: "", // contoh: "https://www.youtube.com/watch?v=XXXXXXXXXXX" atau link youtu.be/embed
  },
  {
    id: 2,
    category: "Category / Tag",
    title: "Project Title",
    subtitle: "Short project subtitle",
    description: "Add a short 2-3 sentence description of this project here. Explain what it does and your role in it.",
    overview:
      "Write a longer project overview here — the problem it solves, your role, the team you worked with, and what you built.",
    techs: ["Tech 1", "Tech 2", "Tech 3"],
    github: "",
    live: "",
    verified: false,
    image: "",
    youtube: "", // contoh: "https://www.youtube.com/watch?v=XXXXXXXXXXX" atau link youtu.be/embed
  },
  {
    id: 3,
    category: "Category / Tag",
    title: "Project Title",
    subtitle: "Short project subtitle",
    description: "Add a short 2-3 sentence description of this project here. Explain what it does and your role in it.",
    overview:
      "Write a longer project overview here — the problem it solves, your role, the team you worked with, and what you built.",
    techs: ["Tech 1", "Tech 2", "Tech 3"],
    github: "",
    live: "",
    verified: false,
    image: "",
    youtube: "", // contoh: "https://www.youtube.com/watch?v=XXXXXXXXXXX" atau link youtu.be/embed
  },
];

// Template kosong — isi aktivitas/organisasi kamu sendiri di sini
export const ACTIVITIES = [
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
      "Stepping into the Unknown: My First Business Case Experience at CaseConnect 2026!🚀" +
      "They say growth begins at the end of your comfort zone, and this past week, I truly felt that." +
      "Representing Team StockQueue, we dived deep into the challenges of the coffee industry. Our mission? To craft a strategic solution for Brewtique Indonesia." +
      "We proposed a strategy centered on 'Premium, Digital, and Sustainability,' aiming to turn innovation into real impact in a highly competitive market." +
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
      "Honored to be among the Top 10 Finalists of the borneo Online Trading Competition 2026!🚀" +
      "A huge shoutout to my teammate @GarrethDavies (https://lnkd.in/ge3CxUCR), for the incredible collaboration and strategic" +
      "alignment throughtout the trading period." +
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
