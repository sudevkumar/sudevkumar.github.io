import { useState } from "react";
import { skillStyles } from "../assests/data";

export function SkillTag({
  label,
  tagStyle,
  onClick,
}: {
  label: string;
  tagStyle: keyof typeof skillStyles;
  onClick: () => void;
}) {
  const [pressed, setPressed] = useState(false);
  return (
    <div
      onClick={() => {
        setPressed(true);
        onClick();
        setTimeout(() => setPressed(false), 150);
      }}
      style={{
        ...skillStyles[tagStyle],
        padding: "7px 14px",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: 1,
        textTransform: "uppercase",
        cursor: "pointer",
        fontFamily: "'Space Mono', monospace",
        transform: pressed ? "translate(2px,2px)" : "none",
        transition: "transform 0.1s",
        userSelect: "none",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translate(-3px,-3px)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
    >
      {label}
    </div>
  );
}
