import { Mail, Phone, MapPin, Linkedin, Github, Compass } from "lucide-react";
import Card from "../components/Card";
import { ACCENT, PROFILE } from "../data/portfolioData";

export default function ConnectPage() {
  const channels = [
    { icon: Mail, label: "EMAIL ME", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: "CALL ME", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/[^0-9+]/g, "")}` },
    { icon: MapPin, label: "LOCATION", value: PROFILE.location, href: null },
  ];

  return (
    <section style={{ maxWidth: 760, margin: "0 auto", padding: "90px 32px 120px", textAlign: "center" }}>
      <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(30px, 5vw, 44px)", marginBottom: 16 }}>
        Let's <span style={{ background: ACCENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connect</span>
      </h2>
      <p style={{ color: "#9AA6BC", fontSize: 16, marginBottom: 48, lineHeight: 1.7 }}>
        Feel free to reach out for research collaborations, project opportunities, or just to say hello!
      </p>

      <Card style={{ textAlign: "left" }}>
        <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 22, color: "#F1F4FA", textAlign: "center", margin: "0 0 6px" }}>
          Contact Channels
        </h3>
        <p style={{ textAlign: "center", color: "#5C6780", fontSize: 13.5, margin: "0 0 28px" }}>Direct communication details</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 30 }}>
          {channels.map((c) => {
            const Icon = c.icon;
            const content = (
              <div
                className="glow-line"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  border: "1px solid #1E2433",
                  borderRadius: 12,
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: "rgba(94,234,212,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color="#5EEAD4" />
                </div>
                <div>
                  <p style={{ margin: "0 0 3px", fontSize: 11.5, letterSpacing: 1, color: "#5C6780", fontFamily: "'JetBrains Mono', monospace" }}>
                    {c.label}
                  </p>
                  <p style={{ margin: 0, fontSize: 16, color: "#F1F4FA", fontWeight: 600 }}>{c.value}</p>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} style={{ textDecoration: "none" }}>
                {content}
              </a>
            ) : (
              <div key={c.label}>{content}</div>
            );
          })}
        </div>

        <div style={{ height: 1, background: "#1E2433", margin: "0 0 28px" }} />

        <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 18, color: "#F1F4FA", textAlign: "center", margin: "0 0 20px" }}>
          Connect with me on Socials
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glow-line"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "14px",
              borderRadius: 10,
              border: "none",
              background: ACCENT,
              color: "#0B0E14",
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            <Linkedin size={17} /> LinkedIn
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="glow-line"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "14px",
              borderRadius: 10,
              border: "1px solid #1E2433",
              color: "#C9D1E0",
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            <Github size={17} /> GitHub
          </a>
        </div>

        <a
          href={PROFILE.instagram}
          target="_blank"
          rel="noreferrer"
          className="glow-line"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "14px",
            borderRadius: 10,
            border: "1px solid #1E2433",
            color: "#C9D1E0",
            fontWeight: 700,
            fontSize: 14,
            textDecoration: "none",
          }}
        >
          <Compass size={17} /> Instagram
        </a>
      </Card>
    </section>
  );
}
