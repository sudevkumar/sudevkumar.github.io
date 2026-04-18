import { COLORS, lhRows } from "../assests/data";
import { useIsMobile } from "../hooks/useIsMobile.tsx";

export function LighthouseSection({ animate }: { animate: boolean }) {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        padding: isMobile ? "20px 16px" : "24px 32px",
        borderBottom: `6px solid ${COLORS.black}`,
        background: "#111",
      }}
    >
      <div
        style={{
          color: COLORS.yellow,
          fontFamily: "'Bebas Neue'",
          fontSize: isMobile ? 22 : 28,
          letterSpacing: 3,
          marginBottom: 16,
        }}
      >
        LIGHTHOUSE GLOW-UP REPORT ▸
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {lhRows.map(({ label, before, after, width, color }) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? 6 : 12,
            }}
          >
            <div
              style={{
                color: "#aaa",
                fontSize: isMobile ? 10 : 12,
                fontFamily: "'Space Mono', monospace",
                width: isMobile ? 100 : 140,
                flexShrink: 0,
              }}
            >
              {label}
            </div>
            {!isMobile && (
              <div
                style={{
                  color: "#555",
                  fontSize: 11,
                  fontFamily: "'Space Mono', monospace",
                  width: 50,
                  textAlign: "right",
                }}
              >
                {before}
              </div>
            )}
            <div
              style={{
                flex: 1,
                background: "#333",
                height: 20,
                border: "1px solid #555",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: animate ? width : "0%",
                  background: color,
                  transition: "width 1.2s cubic-bezier(.22,1,.36,1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight: 6,
                  fontSize: 11,
                  fontFamily: "'Space Mono', monospace",
                  fontWeight: 700,
                  color: "#000",
                }}
              >
                {after}
              </div>
            </div>
            <div
              style={{
                color,
                fontSize: isMobile ? 11 : 13,
                fontWeight: 700,
                fontFamily: "'Space Mono', monospace",
                width: isMobile ? 40 : 50,
                textAlign: "right",
              }}
            >
              {after}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
