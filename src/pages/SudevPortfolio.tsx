import { useState, useEffect } from "react";
import { brags, COLORS } from "../assests/data";
import { Marquee } from "../components/Marquee.tsx";
import { Hero } from "../components/Hero.tsx";
import { LighthouseSection } from "../components/LighthouseSection.tsx";
import { ExperienceSection } from "../components/ExperienceSection.tsx";
import { SkillsSection } from "../components/SkillsSection.tsx";
import { AchievementsSection } from "../components/AchievementsSection.tsx";
import { EducationSection } from "../components/EducationSection.tsx";
import { ContactSection } from "../components/ContactSection.tsx";
import { Footer } from "../components/Footer.tsx";
import { Popup } from "../components/Popup.tsx";

// ─── Popup ────────────────────────────────────────────────────────────────────

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function SudevPortfolio() {
  const [bragIdx, setBragIdx] = useState(0);
  const [avatarClicks, setAvatarClicks] = useState(0);
  const [popup, setPopup] = useState<{ title: string; body: string } | null>(
    null,
  );
  const [lhAnimate, setLhAnimate] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Bebas+Neue&display=swap";
    document.head.appendChild(link);
    const t = setTimeout(() => setLhAnimate(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setBragIdx((i) => (i + 1) % brags.length),
      2800,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Space Mono', monospace",
        background: COLORS.white,
        color: COLORS.black,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Marquee />
      <Hero
        bragIdx={bragIdx}
        avatarClicks={avatarClicks}
        onAvatarClick={() => setAvatarClicks((c) => c + 1)}
      />
      <LighthouseSection animate={lhAnimate} />
      <ExperienceSection />
      <SkillsSection />
      <AchievementsSection
        onPopup={(title, body) => setPopup({ title, body })}
      />
      <EducationSection />
      <ContactSection />
      <Footer />
      {popup && (
        <Popup
          title={popup.title}
          body={popup.body}
          onClose={() => setPopup(null)}
        />
      )}
    </div>
  );
}
