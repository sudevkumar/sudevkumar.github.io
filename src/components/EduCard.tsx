import { COLORS } from "../assests/data";
import { useIsMobile } from "../hooks/useIsMobile.tsx";

export function EduCard({
  degree,
  uni,
  years,
  note,
  yellow,
  borderBottom,
}: {
  degree: string;
  uni: string;
  years: string;
  note: string;
  yellow?: boolean;
  borderBottom?: boolean;
}) {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        padding: isMobile ? "20px 16px" : 32,
        borderRight: yellow || isMobile ? "none" : `6px solid ${COLORS.black}`,
        borderBottom: borderBottom ? `6px solid ${COLORS.black}` : "none",
        background: yellow ? COLORS.yellow : "transparent",
      }}
    >
      <div
        style={{ fontFamily: "'Bebas Neue'", fontSize: 24, letterSpacing: 3 }}
      >
        {degree}
      </div>
      <div
        style={{
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: 1,
          color: "#666",
          margin: "6px 0",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {uni}
      </div>
      <div
        style={{ fontSize: 28, fontFamily: "'Bebas Neue'", color: COLORS.red }}
      >
        {years}
      </div>
      <div
        style={{
          fontSize: 11,
          fontStyle: "italic",
          marginTop: 8,
          color: "#555",
          borderLeft: `3px solid ${COLORS.red}`,
          paddingLeft: 10,
          fontFamily: "'Space Mono', monospace",
          lineHeight: 1.6,
        }}
      >
        {note}
      </div>
    </div>
  );
}
