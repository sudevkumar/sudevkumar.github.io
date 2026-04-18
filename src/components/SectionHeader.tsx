import { COLORS } from "../assests/data";
import { useIsMobile } from "../hooks/useIsMobile.tsx";

export function SectionHeader({
  num,
  children,
}: {
  num: string;
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        background: COLORS.black,
        color: COLORS.white,
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: isMobile ? 28 : 42,
        letterSpacing: isMobile ? 3 : 5,
        padding: isMobile ? "10px 16px" : "12px 32px",
        borderBottom: `4px solid ${COLORS.yellow}`,
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <span style={{ color: COLORS.red, fontSize: isMobile ? 20 : 28 }}>
        {num}
      </span>
      {children}
    </div>
  );
}
