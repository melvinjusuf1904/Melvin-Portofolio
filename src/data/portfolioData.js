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
    grade: "GPA: 3.46/4.00",
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
  { title: "[National] Finalist Borneo Online Trading Competition (BOTC) by KSPM GI BEI UPR", year: "2026" },
  { title: "[National] Finalist CaseConnect Mini Case Competition by DWDG", year: "2026" },
  { title: "[University] Top 4 Finalist Rector Cup MLBB by BINUS University", year: "2025" },
];

// Data equity research sekarang dipisah per-emiten di folder ./equityResearch
// (lihat src/data/equityResearch/index.js dan src/data/equityResearch/_template.js)
// supaya lebih gampang diolah — 1 emiten = 1 file.
export { EQUITY_RESEARCH } from './equityResearch';

// Data My Projects sekarang dipisah per-project di folder ./projects
// (lihat src/data/projects/index.js dan src/data/projects/_template.js)
export { PROJECTS } from './projects';

// Data Activities sekarang dipisah per-aktivitas di folder ./activities
// (lihat src/data/activities/index.js dan src/data/activities/_template.js)
export { ACTIVITIES } from './activities';


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
