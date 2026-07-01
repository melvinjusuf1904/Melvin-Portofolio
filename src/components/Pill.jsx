import { ACCENT } from "../data/portfolioData";

export default function Pill({ label, active, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`pill-btn ${className}`}
      style={{
        padding: "9px 20px",
        borderRadius: 999,
        border: "none",
        cursor: "pointer",
        fontSize: 14,
        fontWeight: 600,
        fontFamily: "'Inter', sans-serif",
        background: active ? ACCENT : "transparent",
        color: active ? "#0B0E14" : "#9AA6BC",
        transition: "all 0.2s ease",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}
