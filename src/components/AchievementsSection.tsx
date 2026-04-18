import { achievements, COLORS } from "../assests/data";
import { useIsMobile } from "../hooks/useIsMobile.tsx";
import { AchCard } from "./AchCard.tsx";
import { SectionHeader } from "./SectionHeader.tsx";

export function AchievementsSection({
  onPopup,
}: {
  onPopup: (title: string, body: string) => void;
}) {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        borderBottom: `6px solid ${COLORS.black}`,
        padding: isMobile ? "20px 16px" : 32,
      }}
    >
      <SectionHeader num="03">HALL OF GLORY</SectionHeader>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 16,
          marginTop: 20,
        }}
      >
        {achievements.map((a) => (
          <AchCard key={a.title} {...a} onPopup={onPopup} />
        ))}
      </div>
    </div>
  );
}
