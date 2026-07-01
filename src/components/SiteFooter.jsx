import { Github, Linkedin, Mail } from "lucide-react";

export default function SiteFooter({ profile }) {
  return (
    <>
      <footer
        style={{
          borderTop: "1px solid #1E2433",
          padding: "36px 32px",
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <h4 style={{ margin: "0 0 4px", fontSize: 16, color: "#F1F4FA" }}>{profile.name}</h4>
          <p style={{ margin: 0, fontSize: 13, color: "#5C6780" }}>Computer Science Student @ BINUS University | AI, Machine Learning, and Trading Enthusiast</p>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {[
            { icon: Github, href: profile.github },
            { icon: Linkedin, href: profile.linkedin },
            { icon: Mail, href: `mailto:${profile.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="glow-line"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                border: "1px solid #1E2433",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9AA6BC",
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </footer>
      <p style={{ textAlign: "center", fontSize: 12.5, color: "#3D4659", padding: "0 24px 36px" }}>© 2026 {profile.name}.</p>
    </>
  );
}
