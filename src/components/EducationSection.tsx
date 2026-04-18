import { COLORS } from "../assests/data";
import { useIsMobile } from "../hooks/useIsMobile.tsx";
import { EduCard } from "./EduCard.tsx";
import { SectionHeader } from "./SectionHeader.tsx";

export function EducationSection() {
  const isMobile = useIsMobile();
  return (
    <>
      <SectionHeader num="04">CERTIFIED BRAIN TRAINING</SectionHeader>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          borderBottom: `6px solid ${COLORS.black}`,
        }}
      >
        <EduCard
          degree="Master of Computer Applications"
          uni="Mansarovar Global University"
          years="2022 – 2024"
          note="Studied computers for a master's degree while simultaneously mastering actual computers at work. Multitasker confirmed."
          borderBottom={isMobile}
        />
        <EduCard
          degree="Bachelor of Computer Applications"
          uni="Utkal University"
          years="2017 – 2020"
          note="The origin story. Three years of C++, existential dread, and realizing JavaScript was actually fun. Dangerous combination."
          yellow
        />
      </div>
    </>
  );
}
