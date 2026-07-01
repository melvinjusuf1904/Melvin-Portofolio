import { useState } from "react";
import { Menu, X } from "lucide-react";
import Pill from "./Pill";
import { ACCENT, NAV } from "../data/portfolioData";

export default function NavBar({ page, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (n) => {
    onNavigate(n);
    setMenuOpen(false);
  };

  return (
    <nav
      className="site-nav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 32px",
        background: "rgba(11,14,20,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #1E2433",
        gap: 10,
        flexWrap: "wrap",
      }}
    >
      <div className="nav-logo" style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "'JetBrains Mono', monospace", fontSize: 16, fontWeight: 700, flexShrink: 0 }}>
        <span
          style={{
            width: 30,
            height: 30,
            borderRadius: 9,
            background: ACCENT,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            color: "#0B0E14",
            flexShrink: 0,
          }}
        >
          M
        </span>
        <span style={{ color: "#F1F4FA", whiteSpace: "nowrap" }}>Mel's Portfolio</span>
      </div>

      {/* Pill row: shown on desktop, and again (compact) on the smallest mobile widths */}
      <div
        className="nav-pill-group"
        style={{ gap: 4, background: "#11151F", padding: 5, borderRadius: 999, border: "1px solid #1E2433" }}
      >
        {NAV.map((n) => (
          <Pill key={n} label={n} active={page === n} onClick={() => handleNavigate(n)} />
        ))}
      </div>

      {/* Hamburger: shown only in the mid-size mobile/tablet range */}
      <button
        className="nav-hamburger-btn"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          borderRadius: 10,
          border: "1px solid #1E2433",
          background: "#11151F",
          color: "#F1F4FA",
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown menu, only reachable via the hamburger */}
      <div
        className={`nav-mobile-dropdown${menuOpen ? " open" : ""}`}
        style={{
          flexDirection: "column",
          width: "100%",
          gap: 8,
          marginTop: 6,
          background: "#11151F",
          border: "1px solid #1E2433",
          borderRadius: 12,
          padding: 8,
        }}
      >
        {NAV.map((n) => (
          <button
            key={n}
            onClick={() => handleNavigate(n)}
            style={{
              padding: "12px 16px",
              borderRadius: 8,
              border: "none",
              textAlign: "left",
              fontSize: 14.5,
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              background: page === n ? ACCENT : "transparent",
              color: page === n ? "#0B0E14" : "#9AA6BC",
              cursor: "pointer",
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </nav>
  );
}
