import { COLORS } from "../assests/data";
import { useIsMobile } from "../hooks/useIsMobile.tsx";
import { ExpCard } from "./ExpCard.tsx";
import { SectionHeader } from "./SectionHeader.tsx";

export function ExperienceSection() {
  const isMobile = useIsMobile();
  return (
    <>
      <SectionHeader num="01">WORK HISTORY (I HAVE RECEIPTS)</SectionHeader>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          borderBottom: `6px solid ${COLORS.black}`,
        }}
      >
        <ExpCard
          company="EVFY"
          role="Full-Stack Developer · Full-Time · Still Alive"
          bullets={[
            "Built production-grade MERN apps that actually work in prod (revolutionary)",
            "Pushed Lighthouse from 33 → 85+ (it was a crime scene before)",
            "Hit 100/100 SEO. Google now sends personal thank-you notes.",
            "Integrated Typesense Cloud so search actually finds things",
            "Real-time blog features: comments, views, reviews — users engaged",
            "Switched Redux → Zustand. Boilerplate went extinct. Good riddance.",
            "Google Ads + analytics → money appeared. Magic.",
            "Deployed on Vercel & AWS EC2. Both survived.",
            "Maintained legacy code without crying. Much respect earned.",
            "Add google adsense and analytics to existing sites without breaking them. A true test of skill and patience.",
          ]}
          confession="Spent 3 days debugging a bug that was a missing semicolon. The code is fine. I am not."
          borderRight={!isMobile}
        />
        <ExpCard
          company={"GOYA\nBOOKING"}
          role="Frontend Freelancer · Flights, Hotels, But Make It Fast"
          bullets={[
            "Built flight and hotel booking app in React.js + Tailwind",
            "State managed via LocalStorage/SessionStorage (very scrappy, very works)",
            "Live flight search + dynamic fares via real APIs (real planes, real prices)",
            "Live hotel search + dynamic pricing via real APIs (real hotels, real prices)",
            "LCC & non-LCC airline filtering logic — it's complicated, it works",
            "Conversion-optimized UI/UX — users actually booked things",
            "Deployed on Hostinger — uptime maintained, dignity intact",
          ]}
          confession="Users complained the app was 'too fast.' First and only time that was a complaint."
        />
      </div>
    </>
  );
}
