import { useState } from "react";
import { ArrowRight, GraduationCap, Search, Award } from "lucide-react";
import Card from "../components/Card";
import Pill from "../components/Pill";
import { ACCENT, PROFILE, EDUCATION, CERTS, AWARDS, PARTICLES } from "../data/portfolioData";
import { SKILL_TABS } from "../data/skillTabs";

export default function HomePage({ onGoToProjects }) {
  const [skillTab, setSkillTab] = useState("Technical Skills");
  const [certSearch, setCertSearch] = useState("");

  const filteredCerts = CERTS.filter((c) => c.name.toLowerCase().includes(certSearch.toLowerCase()));

  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          padding: "90px 32px 110px",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(124,158,255,0.16), transparent 42%), radial-gradient(circle at 88% 25%, rgba(94,234,212,0.13), transparent 40%), radial-gradient(circle at 50% 90%, rgba(124,158,255,0.08), transparent 50%)",
          overflow: "hidden",
        }}
      >
        {/* floating particles */}
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: i % 2 === 0 ? "#5EEAD4" : "#7C9EFF",
              opacity: 0.55,
              boxShadow: `0 0 ${p.size * 3}px ${i % 2 === 0 ? "#5EEAD4" : "#7C9EFF"}`,
              animation: `float ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
              pointerEvents: "none",
            }}
          />
        ))}

        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 60,
            flexWrap: "wrap",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="glow-card"
            style={{
              flex: "1 1 480px",
              minWidth: 300,
              border: "1px solid rgba(94,234,212,0.35)",
              borderRadius: 24,
              padding: "44px 42px",
              background: "rgba(11,14,20,0.55)",
              backdropFilter: "blur(6px)",
              boxShadow: "0 0 0 1px rgba(94,234,212,0.12), 0 0 40px rgba(94,234,212,0.10), 0 0 70px rgba(124,158,255,0.08)",
            }}
          >
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, color: "#5EEAD4", letterSpacing: 2, marginBottom: 14 }}>
              HELLO! I AM
            </p>
            <h1
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(34px, 5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.08,
                margin: "0 0 22px",
                background: ACCENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {PROFILE.name}
            </h1>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "#9AA6BC", marginBottom: 32 }}>{PROFILE.role}</p>
            <button
              onClick={onGoToProjects}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 26px",
                borderRadius: 10,
                border: "none",
                background: ACCENT,
                color: "#0B0E14",
                fontWeight: 700,
                fontSize: 14.5,
                cursor: "pointer",
              }}
            >
              Check Out my Portfolio! <ArrowRight size={16} />
            </button>
          </div>

          <div style={{ flex: "0 0 auto", margin: "0 auto" }}>
            <div
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "#11151F",
                border: "2px solid rgba(94,234,212,0.35)",
                boxShadow: "0 0 90px rgba(94,234,212,0.18), 0 0 50px rgba(124,158,255,0.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 72,
                  fontWeight: 700,
                  background: ACCENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {PROFILE.initials}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY + EDUCATION */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 32px 70px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 24 }}>
        <Card>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 24, color: "#F1F4FA", margin: "0 0 6px" }}>Summary</h2>
          <div style={{ width: 46, height: 3, background: ACCENT, borderRadius: 4, marginBottom: 20 }} />
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#9AA6BC", margin: 0 }}>{PROFILE.bio}</p>
        </Card>

        <Card>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 24, color: "#F1F4FA", margin: "0 0 6px" }}>Education</h2>
          <div style={{ width: 46, height: 3, background: ACCENT, borderRadius: 4, marginBottom: 20 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {EDUCATION.map((e) => (
              <div key={e.school} style={{ display: "flex", gap: 14 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "rgba(94,234,212,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={17} color="#5EEAD4" />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 2px", fontSize: 15.5, color: "#F1F4FA" }}>{e.school}</h4>
                  <p style={{ margin: "0 0 4px", fontSize: 13.5, color: "#7C9EFF" }}>{e.degree}</p>
                  <p style={{ margin: 0, fontSize: 12.5, color: "#5C6780" }}>{e.period}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* SKILLS */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 32px 80px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(30px, 4vw, 40px)", margin: "0 0 10px" }}>
          My <span style={{ background: ACCENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Skills</span>
        </h2>
        <p style={{ color: "#7A879E", fontSize: 15, maxWidth: 480, margin: "0 auto 32px" }}>
          A comprehensive overview of my technical capabilities, leadership experience, and languages.
        </p>

        <div style={{ display: "inline-flex", gap: 6, background: "#11151F", padding: 5, borderRadius: 999, border: "1px solid #1E2433", marginBottom: 40 }}>
          {Object.keys(SKILL_TABS).map((t) => (
            <Pill key={t} label={t} active={skillTab === t} onClick={() => setSkillTab(t)} />
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18, textAlign: "left" }}>
          {SKILL_TABS[skillTab].map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.group}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: "rgba(124,158,255,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <Icon size={19} color="#7C9EFF" />
                </div>
                <h4 style={{ margin: "0 0 10px", fontSize: 17, color: "#F1F4FA" }}>{s.group}</h4>
                <p style={{ margin: 0, fontSize: 13.5, color: "#8B96AB", lineHeight: 1.7 }}>{s.items.join(", ")}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CERTIFICATIONS + AWARDS */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 32px 90px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 24 }}>
        <Card style={{ maxHeight: 460, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
            <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 22, color: "#F1F4FA", margin: 0 }}>Certifications</h2>
            <div style={{ display: "flex", alignItems: "center", gap: 8, border: "1px solid #1E2433", borderRadius: 8, padding: "8px 12px", flex: "1 1 180px" }}>
              <Search size={14} color="#5C6780" />
              <input
                value={certSearch}
                onChange={(e) => setCertSearch(e.target.value)}
                placeholder="Search certificates..."
                style={{ background: "transparent", border: "none", outline: "none", color: "#C9D1E0", fontSize: 13, width: "100%" }}
              />
            </div>
          </div>
          <div style={{ overflowY: "auto", display: "flex", flexDirection: "column", gap: 12, paddingRight: 4 }}>
            {filteredCerts.map((c) => (
              <div
                key={c.name}
                className="glow-line"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                  border: "1px solid #1A1F2B",
                  borderRadius: 10,
                  padding: "14px 16px",
                }}
              >
                <div>
                  <p style={{ margin: "0 0 3px", fontSize: 14, color: "#E8ECF4", fontWeight: 500 }}>{c.name}</p>
                  <p style={{ margin: 0, fontSize: 12, color: "#5C6780" }}>{c.issuer}</p>
                </div>
                <span
                  style={{
                    fontSize: 11.5,
                    padding: "4px 10px",
                    borderRadius: 999,
                    background: "rgba(94,234,212,0.10)",
                    color: "#5EEAD4",
                    fontFamily: "'JetBrains Mono', monospace",
                    flexShrink: 0,
                  }}
                >
                  {c.year}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 22, color: "#F1F4FA", margin: "0 0 20px" }}>Honors & Awards</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {AWARDS.map((a) => (
              <div key={a.title} style={{ display: "flex", gap: 14 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(124,158,255,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Award size={16} color="#7C9EFF" />
                </div>
                <div>
                  <p style={{ margin: "0 0 4px", fontSize: 14.5, color: "#F1F4FA", fontWeight: 600, lineHeight: 1.4 }}>{a.title}</p>
                  <p style={{ margin: 0, fontSize: 12.5, color: "#5EEAD4" }}>{a.year}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}
