import { COLORS } from "../assests/data";

export function Marquee() {
  const items = [
    "SUDEV KUMAR",
    "★",
    "FULL-STACK DEVELOPER",
    "★",
    "AVAILABLE FOR HIRE (PLS)",
    "★",
    "MERN WIZARD",
    "★",
    "LIGHTHOUSE SCORE BOOSTER",
    "★",
    "ZUSTAND ENTHUSIAST",
    "★",
  ];
  const doubled = [...items, ...items];
  return (
    <div
      style={{
        background: COLORS.black,
        color: COLORS.yellow,
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 22,
        letterSpacing: 4,
        padding: "8px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        borderBottom: `4px solid ${COLORS.red}`,
      }}
    >
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div
        style={{
          display: "inline-block",
          animation: "marquee 18s linear infinite",
        }}
      >
        {doubled.map((t, i) => (
          <span key={i} style={{ margin: "0 40px" }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
