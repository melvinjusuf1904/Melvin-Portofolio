// ================= DATA (from LinkedIn) =================
// Ubah semua data profil, edukasi, skill, sertifikat, penghargaan,
// proyek, dan aktivitas kamu di file ini saja.

export const PROFILE = {
  name: "Melvin Jusuf",
  initials: "MJ",
  role: "Computer Science student at BINUS University, specializing in AI & Machine Learning, with a strong passion for Trading, Investing and Market Analysis.",
  bio: "Undergraduate Computer Science student at BINUS University @Bandung. My professional interests are twofold: deeply invested in the development of AI and Machine Learning technologies, while also actively pursuing expertise in Trading, Investing and Market Analysis. Currently leading tournament operations at Binusian Gaming and competing in national trading & case competitions.",
  email: "melvinjusuf@yahoo.com",
  phone: "+62 8xx-xxxx-xxxx",
  location: "Bandung, Indonesia",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/melvinjusuf",
  instagram: "https://instagram.com/",
};

export const EDUCATION = [
  {
    school: "BINUS University",
    degree: "Bachelor of Science, Computer Science",
    period: "2025 – 2029",
  },
  {
    school: "SMA F. Tandean Tebing Tinggi",
    degree: "Senior High School, Science Stream",
    period: "2020 – 2023",
  },
];

// Catatan: field `icon` di bawah adalah nama komponen ikon dari lucide-react.
// Import ikon-ikon ini dilakukan di src/data/icons.js lalu di-map ke sini.
export const SKILL_TABS_RAW = {
  "Technical Skills": [
    { group: "AI & Machine Learning", icon: "Code2", items: ["Artificial Intelligence", "Machine Learning", "Spec-Driven Development", "Azure AI"] },
    { group: "Trading & Finance", icon: "Database", items: ["Market Analysis", "Trading", "Investments", "Financial Literacy"] },
    { group: "Dev & Tools", icon: "Compass", items: ["Python", "HTML", "CSS", "Figma", "Git"] },
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
  { name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft", year: "2026" },
  { name: "Belajar Dasar AI", issuer: "Dicoding Indonesia", year: "2026" },
  { name: "Belajar Machine Learning untuk Pemula", issuer: "Dicoding Indonesia", year: "2026" },
  { name: "Memulai Pemrograman dengan Python", issuer: "Dicoding Indonesia", year: "2026" },
  { name: "Belajar Dasar Cloud dan Gen AI di AWS", issuer: "Dicoding Indonesia", year: "2026" },
  { name: "Spec-Driven Development dengan Kiro", issuer: "Dicoding Indonesia", year: "2026" },
  { name: "Introduction to Financial Literacy", issuer: "Dicoding Indonesia", year: "2026" },
];

export const AWARDS = [
  { title: "National Finalist — Borneo Online Trading Competition", year: "2026" },
  { title: "National Finalist — CaseConnect Mini Case Competition", year: "2026" },
  { title: "Top 4 Finalist — Rector Cup MLBB, BINUS University", year: "2025" },
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
  },
];

// Template kosong — isi aktivitas/organisasi kamu sendiri di sini
export const ACTIVITIES = [
  {
    id: 1,
    period: "Month Year – Present",
    org: "Organization Name",
    role: "Your Role / Position",
    points: ["Add an achievement or responsibility here", "Add another achievement or responsibility here"],
    notes:
      "Write a longer explanation of your role and contributions here — what you led, coordinated, or built as part of this organization.",
    focusAreas: ["Add a key focus area here", "Add another key focus area here"],
  },
  {
    id: 2,
    period: "Month Year – Month Year",
    org: "Organization Name",
    role: "Your Role / Position",
    points: ["Add an achievement or responsibility here", "Add another achievement or responsibility here"],
    notes:
      "Write a longer explanation of your role and contributions here — what you led, coordinated, or built as part of this organization.",
    focusAreas: ["Add a key focus area here", "Add another key focus area here"],
  },
  {
    id: 3,
    period: "Month Year – Month Year",
    org: "Organization Name",
    role: "Your Role / Position",
    points: ["Add an achievement or responsibility here", "Add another achievement or responsibility here"],
    notes:
      "Write a longer explanation of your role and contributions here — what you led, coordinated, or built as part of this organization.",
    focusAreas: ["Add a key focus area here", "Add another key focus area here"],
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
