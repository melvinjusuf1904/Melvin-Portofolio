import { useState } from "react";
import { ArrowLeft, ImageIcon, ListChecks, Sparkles } from "lucide-react";
import Card from "../components/Card";

export default function ActivityDetailPage({ activity, onBack }) {
  const images = activity.images || [];
  // foto yang sedang ditampilkan besar di atas; defaultnya foto pertama di array
  const [activeImage, setActiveImage] = useState(images[0] || "");

  return (
    <section style={{ maxWidth: 1050, margin: "0 auto", padding: "60px 32px 100px" }}>
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
        <ArrowLeft size={16} /> Back to Activities
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
        {activity.period}
      </span>

      <h1 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(30px, 5vw, 44px)", margin: "0 0 8px", color: "#F1F4FA" }}>
        {activity.org}
      </h1>
      <p style={{ fontSize: 16, color: "#7C9EFF", marginBottom: 36 }}>{activity.role}</p>

      <div className="two-col-grid" style={{ gridTemplateColumns: "1fr 1.1fr" }}>
        {/* Activity Gallery */}
        <Card>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <ImageIcon size={17} color="#7C9EFF" />
            <h3 style={{ margin: 0, fontSize: 16, color: "#F1F4FA" }}>Activity Gallery</h3>
          </div>

          <div
            style={{
              height: 220,
              borderRadius: 12,
              border: activeImage ? "none" : "1px dashed #2A3142",
              background: activeImage ? undefined : "linear-gradient(135deg, #11151F, #161B26)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginBottom: 10,
            }}
          >
            {activeImage ? (
              <img
                src={activeImage}
                alt={activity.org}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            ) : (
              <>
                <ImageIcon size={26} color="#3D4659" />
                <span style={{ fontSize: 12, color: "#3D4659", fontFamily: "'JetBrains Mono', monospace" }}>add main photo</span>
              </>
            )}
          </div>

          {/* thumbnail: klik salah satu untuk jadikan foto utama di atas */}
          <div style={{ display: "flex", gap: 10 }}>
            {images.length > 0
              ? images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    style={{
                      flex: 1,
                      height: 60,
                      borderRadius: 8,
                      padding: 0,
                      cursor: "pointer",
                      overflow: "hidden",
                      border: activeImage === img ? "2px solid #5EEAD4" : "1px solid #2A3142",
                      background: "none",
                    }}
                  >
                    <img
                      src={img}
                      alt={`${activity.org} ${i + 1}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </button>
                ))
              : [1, 2].map((n) => (
                  <div
                    key={n}
                    style={{
                      flex: 1,
                      height: 60,
                      borderRadius: 8,
                      border: "1px dashed #2A3142",
                      background: "linear-gradient(135deg, #11151F, #161B26)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ImageIcon size={16} color="#3D4659" />
                  </div>
                ))}
          </div>
        </Card>

        {/* Explanation & Notes */}
        <Card
          style={{
            border: "1px solid rgba(94,234,212,0.35)",
            boxShadow: "0 0 0 1px rgba(94,234,212,0.10), 0 0 30px rgba(94,234,212,0.10)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <ListChecks size={17} color="#5EEAD4" />
            <h3 style={{ margin: 0, fontSize: 16, color: "#F1F4FA" }}>Explanation & Notes</h3>
          </div>
          <p style={{ margin: "0 0 22px", fontSize: 14.5, lineHeight: 1.8, color: "#9AA6BC" }}>{activity.notes}</p>

          <p style={{ margin: "0 0 10px", fontSize: 13.5, color: "#F1F4FA", fontWeight: 600 }}>Key Focus Areas:</p>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {activity.focusAreas.map((f, i) => (
              <li key={i} style={{ display: "flex", gap: 8, fontSize: 13.5, color: "#8B96AB", lineHeight: 1.6 }}>
                <Sparkles size={13} color="#5EEAD4" style={{ marginTop: 3, flexShrink: 0 }} />
                {f}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
