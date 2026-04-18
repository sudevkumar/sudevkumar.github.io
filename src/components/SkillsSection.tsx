import { useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile.tsx";
import { COLORS, skills, skillStyles } from "../assests/data";
import { SkillTag } from "./SkillTag.tsx";

export function SkillsSection() {
  const isMobile = useIsMobile();
  const [quip, setQuip] = useState("← click a skill to see the truth about it");
  return (
    <div
      style={{
        borderBottom: `6px solid ${COLORS.black}`,
        padding: isMobile ? "20px 16px" : 32,
        background: COLORS.black,
      }}
    >
      <div
        style={{
          color: COLORS.yellow,
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: isMobile ? 28 : 42,
          letterSpacing: isMobile ? 3 : 5,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span style={{ color: COLORS.red, fontSize: isMobile ? 20 : 28 }}>
          02
        </span>{" "}
        THE ARSENAL (CLICK THEM)
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20 }}
      >
        {skills.map(({ label, style, quip: q }) => (
          <SkillTag
            key={label}
            label={label}
            tagStyle={style as keyof typeof skillStyles}
            onClick={() => setQuip("> " + q)}
          />
        ))}
      </div>
      <div
        style={{
          marginTop: 20,
          minHeight: 40,
          fontSize: 12,
          color: COLORS.green,
          fontStyle: "italic",
          fontFamily: "'Space Mono', monospace",
          lineHeight: 1.6,
        }}
      >
        {quip}
      </div>
    </div>
  );
}
