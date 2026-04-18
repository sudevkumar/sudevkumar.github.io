import { brags, COLORS } from "../assests/data";

export function BragText({ idx }: { idx: number }) {
  return (
    <div
      style={{
        color: COLORS.green,
        fontSize: 11,
        fontFamily: "'Space Mono', monospace",
        textAlign: "center",
        padding: "0 8px",
      }}
    >
      <style>{`@keyframes blink{50%{opacity:0}}`}</style>
      <span style={{ animation: "blink 1.5s step-end infinite" }}>
        {brags[idx]}
      </span>
    </div>
  );
}
