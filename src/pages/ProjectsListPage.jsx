import { ImageIcon, ArrowRight } from "lucide-react";
import { ACCENT, PROJECTS } from "../data/portfolioData";

export default function ProjectsListPage({ onSelectProject }) {
  return (
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: "70px 32px 100px", textAlign: "center" }}>
      <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(30px, 4.5vw, 42px)", marginBottom: 14 }}>
        My <span style={{ background: ACCENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Technical Projects</span>
      </h2>
      <p style={{ color: "#7A879E", fontSize: 15, maxWidth: 560, margin: "0 auto 48px" }}>
        Explore my academic research, full-stack applications, and award-winning prototypes. Click on any project card to see its full breakdown and demo.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22, textAlign: "left" }}>
        {PROJECTS.map((p) => (
          <div
            key={p.id}
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
            {/* thumbnail placeholder */}
            <div
              style={{
                position: "relative",
                height: 170,
                background: "linear-gradient(135deg, #11151F, #161B26)",
                border: "1px dashed #2A3142",
                margin: 14,
                borderRadius: 12,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <ImageIcon size={26} color="#3D4659" />
              <span style={{ fontSize: 12, color: "#3D4659", fontFamily: "'JetBrains Mono', monospace" }}>add project image</span>
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
                {p.category}
              </span>
            </div>

            <div style={{ padding: "6px 20px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
              <h3 style={{ margin: "0 0 4px", fontSize: 18, color: "#F1F4FA" }}>{p.title}</h3>
              <p style={{ margin: "0 0 12px", fontSize: 13, color: "#7C9EFF" }}>{p.subtitle}</p>
              <p style={{ margin: "0 0 16px", fontSize: 13.5, color: "#8B96AB", lineHeight: 1.6, flex: 1 }}>{p.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
                {p.techs.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 11.5,
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "rgba(124,158,255,0.08)",
                      color: "#7C9EFF",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectProject(p)}
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
