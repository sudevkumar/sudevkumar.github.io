import { useState } from "react";
import { COLORS } from "../assests/data";

export function SendButton({ sending }: { sending: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="submit"
      disabled={sending}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: sending ? "#333" : hovered ? COLORS.yellow : "transparent",
        color: sending ? "#666" : hovered ? COLORS.black : COLORS.yellow,
        border: `3px solid ${sending ? "#333" : COLORS.yellow}`,
        fontFamily: "'Bebas Neue'",
        fontSize: 22,
        letterSpacing: 3,
        padding: "12px 32px",
        cursor: sending ? "not-allowed" : "pointer",
        transition: "all 0.15s",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      {sending ? "TRANSMITTING..." : "SEND IT ▸"}
    </button>
  );
}
