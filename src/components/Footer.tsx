import { COLORS } from "../assests/data";
import { useIsMobile } from "../hooks/useIsMobile.tsx";

export function Footer() {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        background: COLORS.red,
        padding: isMobile ? "28px 16px" : "32px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "'Bebas Neue'",
            fontSize: isMobile ? 28 : 32,
            letterSpacing: 4,
            color: COLORS.white,
            textShadow: `3px 3px 0 ${COLORS.black}`,
          }}
        >
          SUDEV KUMAR © {new Date().getFullYear()}
        </div>
        <div
          style={{
            fontSize: 11,
            color: COLORS.yellow,
            marginTop: 4,
            fontFamily: "'Space Mono', monospace",
          }}
        >
          Built with React, caffeine, and questionable decisions.
        </div>
      </div>
      <div
        style={{
          fontSize: 11,
          color: "rgba(255,255,255,0.5)",
          fontFamily: "'Space Mono', monospace",
          textAlign: isMobile ? "left" : "right",
        }}
      >
        No bugs were harmed
        <br />
        in making this portfolio.
      </div>
    </div>
  );
}
