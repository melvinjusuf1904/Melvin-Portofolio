import Pill from "./Pill";
import { ACCENT, NAV } from "../data/portfolioData";

export default function NavBar({ page, onNavigate }) {
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

      <div
        className="nav-pill-group"
        style={{ display: "flex", gap: 4, background: "#11151F", padding: 5, borderRadius: 999, border: "1px solid #1E2433" }}
      >
        {NAV.map((n) => (
          <Pill key={n} label={n} active={page === n} onClick={() => onNavigate(n)} />
        ))}
      </div>
    </nav>
  );
}
