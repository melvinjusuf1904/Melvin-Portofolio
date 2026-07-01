import { ArrowLeft, ImageIcon, Github, ExternalLink, CheckCircle2 } from "lucide-react";
import Card from "../components/Card";
import { ACCENT } from "../data/portfolioData";

export default function ProjectDetailPage({ project, onBack }) {
  return (
    <section style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 32px 100px" }}>
      <button
        onClick={onBack}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "transparent",
          border: "none",
          color: "#9AA6BC",
          fontSize: 14,
          cursor: "pointer",
          marginBottom: 28,
          padding: 0,
        }}
      >
        <ArrowLeft size={16} /> Back to Projects
      </button>

      <span
        style={{
          display: "inline-block",
          fontSize: 12,
          padding: "5px 12px",
          borderRadius: 999,
          background: "rgba(94,234,212,0.10)",
          color: "#5EEAD4",
          fontFamily: "'JetBrains Mono', monospace",
          marginBottom: 16,
        }}
      >
        {project.category}
      </span>

      <h1 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(30px, 5vw, 44px)", margin: "0 0 8px", color: "#F1F4FA" }}>
        {project.title}
      </h1>
      <p style={{ fontSize: 16, color: "#7C9EFF", marginBottom: 32 }}>{project.subtitle}</p>

      {/* media placeholder */}
      <div
        style={{
          height: 340,
          borderRadius: 16,
          border: "1px dashed #2A3142",
          background: "linear-gradient(135deg, #11151F, #161B26)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          marginBottom: 40,
        }}
      >
        <ImageIcon size={32} color="#3D4659" />
        <span style={{ fontSize: 13, color: "#3D4659", fontFamily: "'JetBrains Mono', monospace" }}>add image, screenshot, or video embed</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24 }}>
        <Card>
          <h3 style={{ margin: "0 0 14px", fontSize: 20, color: "#F1F4FA" }}>Project Overview</h3>
          <p style={{ margin: "0 0 28px", fontSize: 14.5, lineHeight: 1.8, color: "#9AA6BC" }}>{project.overview}</p>

          <h3 style={{ margin: "0 0 14px", fontSize: 20, color: "#F1F4FA" }}>Key Technologies & Skills</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.techs.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 12.5,
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "rgba(94,234,212,0.10)",
                  color: "#5EEAD4",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </Card>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Card>
            <h4 style={{ margin: "0 0 16px", fontSize: 16, color: "#F1F4FA" }}>Project Links</h4>
            <a
              href={project.github || "#"}
              className="glow-line"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 14px",
                borderRadius: 10,
                border: "1px solid #1E2433",
                color: "#C9D1E0",
                textDecoration: "none",
                fontSize: 13.5,
                marginBottom: 10,
              }}
            >
              <Github size={16} /> GitHub Repository
            </a>
            <a
              href={project.live || "#"}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 14px",
                borderRadius: 10,
                border: "none",
                background: ACCENT,
                color: "#0B0E14",
                textDecoration: "none",
                fontSize: 13.5,
                fontWeight: 700,
              }}
            >
              <ExternalLink size={16} /> Live Deployment
            </a>
          </Card>

          <Card style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <CheckCircle2 size={20} color={project.verified ? "#5EEAD4" : "#3D4659"} />
            <div>
              <p style={{ margin: 0, fontSize: 13.5, color: "#E8ECF4", fontWeight: 600 }}>
                {project.verified ? "Verified Project" : "Not yet verified"}
              </p>
              <p style={{ margin: 0, fontSize: 12, color: "#5C6780" }}>Part of Academic Portfolio</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
