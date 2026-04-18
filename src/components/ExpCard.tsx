import { useState } from "react";
import { COLORS } from "../assests/data";
import { useIsMobile } from "../hooks/useIsMobile.tsx";

export function ExpCard({
  company,
  role,
  bullets,
  confession,
  borderRight,
}: {
  company: string;
  role: string;
  bullets: string[];
  confession: string;
  borderRight?: boolean;
}) {
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: isMobile ? "20px 16px" : 32,
        borderRight: borderRight ? `6px solid ${COLORS.black}` : "none",
        borderBottom: isMobile ? `4px solid ${COLORS.black}` : "none",
        background: hovered ? COLORS.yellow : "transparent",
        transition: "background 0.15s",
      }}
    >
      <div
        style={{
          fontFamily: "'Bebas Neue'",
          fontSize: isMobile ? 28 : 36,
          letterSpacing: 3,
          borderBottom: `4px solid ${COLORS.black}`,
          paddingBottom: 8,
          marginBottom: 16,
          whiteSpace: "pre-line",
        }}
      >
        {company}
      </div>
      <div
        style={{
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: 2,
          color: COLORS.red,
          fontWeight: 700,
          marginBottom: 16,
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {role}
      </div>
      <ul style={{ listStyle: "none", fontSize: 12, lineHeight: 1.8 }}>
        {bullets.map((b, i) => (
          <li
            key={i}
            style={{
              padding: "4px 0",
              borderBottom: "1px dashed #999",
              display: "flex",
              gap: 8,
            }}
          >
            <span style={{ color: COLORS.red, flexShrink: 0 }}>▸</span>
            {b}
          </li>
        ))}
      </ul>
      <div
        style={{
          marginTop: 16,
          background: COLORS.black,
          color: COLORS.green,
          fontSize: 11,
          padding: "10px 12px",
          fontStyle: "italic",
          lineHeight: 1.6,
          fontFamily: "'Space Mono', monospace",
        }}
      >
        <span style={{ color: "#888" }}>{"// dev confession: "}</span>
        {confession}
      </div>
    </div>
  );
}
