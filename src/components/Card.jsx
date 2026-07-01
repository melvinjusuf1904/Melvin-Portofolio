export default function Card({ children, style = {}, className = "" }) {
  return (
    <div
      className={`glow-card ${className}`}
      style={{
        border: "1px solid #1E2433",
        borderRadius: 16,
        padding: 28,
        background: "rgba(255,255,255,0.025)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
