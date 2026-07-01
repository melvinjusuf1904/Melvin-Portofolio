import { ImageIcon, Users, Sparkles, ArrowRight } from "lucide-react";
import { ACCENT, ACTIVITIES } from "../data/portfolioData";

export default function ActivitiesListPage({ onSelectActivity }) {
  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "70px 32px 100px", textAlign: "center" }}>
      <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(30px, 4.5vw, 42px)", marginBottom: 14 }}>
        My <span style={{ background: ACCENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Activities & Organizations</span>
      </h2>
      <p style={{ color: "#7A879E", fontSize: 15, maxWidth: 560, margin: "0 auto 48px" }}>
        Highlighting my leadership roles, financial operations, competition involvement, and community contributions.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, 280px)", gap: 22, textAlign: "left" }}>
        {ACTIVITIES.map((a) => (
          <div
            key={a.id}
            className="glow-card"
            style={{
              border: "1px solid #1E2433",
              borderRadius: 16,
              overflow: "hidden",
              background: "rgba(255,255,255,0.02)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* thumbnail: pakai foto pertama dari array `images`, kalau kosong tampilkan placeholder */}
            <div
              style={{
                position: "relative",
                height: 170,
                background: a.images?.[0] ? undefined : "linear-gradient(135deg, #11151F, #161B26)",
                border: a.images?.[0] ? "none" : "1px dashed #2A3142",
                margin: 14,
                borderRadius: 12,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              {a.images?.[0] ? (
                <img
                  src={a.images[0]}
                  alt={a.org}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              ) : (
                <>
                  <ImageIcon size={26} color="#3D4659" />
                  <span style={{ fontSize: 12, color: "#3D4659", fontFamily: "'JetBrains Mono', monospace" }}>add activity photo</span>
                </>
              )}
            <span
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                fontSize: 11,
                padding: "4px 10px",
                borderRadius: 999,
                background: "rgba(94,234,212,0.10)",
                color: "#5EEAD4",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
                {a.period}
              </span>
            </div>

            <div style={{ padding: "6px 20px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <Users size={17} color="#7C9EFF" />
                <h3 style={{ margin: 0, fontSize: 17, color: "#F1F4FA" }}>{a.org}</h3>
              </div>
              <p style={{ margin: "0 0 12px", fontSize: 13, color: "#7C9EFF" }}>{a.role}</p>

              <ul style={{ margin: "0 0 18px", paddingLeft: 0, listStyle: "none", flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                {a.points.map((pt, i) => (
                  <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "#8B96AB", lineHeight: 1.6 }}>
                    <Sparkles size={13} color="#5EEAD4" style={{ marginTop: 3, flexShrink: 0 }} />
                    {pt}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSelectActivity(a)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "11px 16px",
                  borderRadius: 10,
                  border: "none",
                  background: ACCENT,
                  color: "#0B0E14",
                  fontWeight: 700,
                  fontSize: 13.5,
                  cursor: "pointer",
                }}
              >
                View Details <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
