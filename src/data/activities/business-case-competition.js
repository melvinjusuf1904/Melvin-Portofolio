// Data activity: Business Case Competition
const BUSINESS_CASE_COMPETITION = {
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
    // Lampiran file Excel/PDF untuk Business Case Competition (mis. proposal, deck, financial model).
    // 1. Taruh file di public/files/business-case-competition/, misalnya:
    //    public/files/business-case-competition/proposal.pdf
    // 2. Tambahkan entrinya di array di bawah ini, contoh:
    //    { url: "/files/business-case-competition/proposal.pdf", label: "Business Proposal" },
    //    { url: "/files/business-case-competition/financial-model.xlsx", label: "Financial Model" },
    files: [
      {url: "/files/caseconnect2026/MCC_CaseConnect2026_StockQueue.pdf", label: "CaseConnect 2026"}
    ],
};

export default BUSINESS_CASE_COMPETITION;
