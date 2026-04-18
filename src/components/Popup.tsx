import { COLORS } from "../assests/data";

export function Popup({
  title,
  body,
  onClose,
}: {
  title: string;
  body: string;
  onClose: () => void;
}) {
  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 998,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: COLORS.white,
          border: `6px solid ${COLORS.black}`,
          padding: 32,
          zIndex: 999,
          maxWidth: 380,
          width: "90%",
          boxShadow: `12px 12px 0 ${COLORS.black}`,
          textAlign: "center",
          fontFamily: "'Space Mono', monospace",
          animation: "popIn 0.2s cubic-bezier(.36,.07,.19,.97)",
        }}
      >
        <style>{`@keyframes popIn{0%{transform:translate(-50%,-50%) scale(0.5) rotate(-5deg)}80%{transform:translate(-50%,-50%) scale(1.05) rotate(1deg)}100%{transform:translate(-50%,-50%) scale(1) rotate(0)}}`}</style>
        <div
          style={{
            fontFamily: "'Bebas Neue'",
            fontSize: 32,
            letterSpacing: 3,
            marginBottom: 12,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.8, marginBottom: 20 }}>
          {body}
        </div>
        <button
          onClick={onClose}
          style={{
            background: COLORS.black,
            color: COLORS.white,
            border: "none",
            fontFamily: "'Bebas Neue'",
            fontSize: 20,
            padding: "10px 28px",
            cursor: "pointer",
            letterSpacing: 2,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.red)}
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = COLORS.black)
          }
        >
          OK COOL ✕
        </button>
      </div>
    </>
  );
}
