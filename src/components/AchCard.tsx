import { useState } from "react";
import { COLORS } from "../assests/data";

export function AchCard({
  icon,
  title,
  desc,
  popup,
  onPopup,
}: {
  icon: string;
  title: string;
  desc: string;
  popup: string;
  onPopup: (t: string, b: string) => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPopup(title, popup)}
      style={{
        border: `4px solid ${COLORS.black}`,
        padding: 20,
        cursor: "pointer",
        background: hovered ? COLORS.yellow : COLORS.white,
        transform: hovered ? "translate(-4px,-4px)" : "none",
        boxShadow: hovered ? `4px 4px 0 ${COLORS.black}` : "none",
        transition: "all 0.1s",
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 8 }}>{icon}</div>
      <div
        style={{ fontFamily: "'Bebas Neue'", fontSize: 20, letterSpacing: 2 }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 12,
          lineHeight: 1.6,
          marginTop: 6,
          color: "#444",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {desc}
      </div>
      {hovered && (
        <div
          style={{
            fontSize: 11,
            color: COLORS.red,
            fontWeight: 700,
            marginTop: 10,
            fontFamily: "'Space Mono', monospace",
          }}
        >
          ▸ click to read the full lore
        </div>
      )}
    </div>
  );
}
