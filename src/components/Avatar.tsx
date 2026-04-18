import { useState } from "react";
import { avatarLines, COLORS } from "../assests/data";

export function Avatar({
  clicks,
  onClick,
}: {
  clicks: number;
  onClick: () => void;
}) {
  const [shaking, setShaking] = useState(false);
  const handle = () => {
    setShaking(true);
    onClick();
    setTimeout(() => setShaking(false), 400);
  };
  const label =
    clicks === 0
      ? "SK"
      : avatarLines[Math.min(clicks - 1, avatarLines.length - 1)];
  return (
    <div
      onClick={handle}
      title="click me. do it."
      style={{
        width: 120,
        height: 120,
        border: `5px solid ${COLORS.yellow}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: clicks === 0 ? 48 : 14,
        color: COLORS.yellow,
        fontFamily: "'Bebas Neue'",
        cursor: "pointer",
        transition: "transform 0.1s",
        userSelect: "none",
        animation: shaking ? "shake 0.4s ease-in-out" : "none",
        textAlign: "center",
        padding: 8,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "rotate(15deg) scale(1.1)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <style>{`@keyframes shake{0%,100%{transform:translateX(0)}10%,50%,90%{transform:translateX(-8px) rotate(-1deg)}30%,70%{transform:translateX(8px) rotate(1deg)}}`}</style>
      {label}
    </div>
  );
}
