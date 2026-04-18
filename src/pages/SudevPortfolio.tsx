import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const COLORS = {
  black: "#0a0a0a",
  white: "#f5f0e8",
  yellow: "#FFE600",
  red: "#FF2200",
  blue: "#0026FF",
  green: "#00FF41",
};

const skills = [
  {
    label: "HTML & CSS",
    style: "s1",
    quip: "You wrote your first website in HTML. So did everyone. But yours actually looked good.",
  },
  {
    label: "JavaScript",
    style: "s2",
    quip: "The language of the internet. Also the language of suffering. You speak both fluently.",
  },
  {
    label: "React + Next",
    style: "s3",
    quip: "Virtual DOM. Hooks. Server components. You live here now.",
  },
  {
    label: "Node.js",
    style: "s4",
    quip: "JavaScript but on the server. The backend had no idea what was coming.",
  },
  {
    label: "Zustand",
    style: "s5",
    quip: "Redux but for people who respect themselves.",
  },
  {
    label: "Redux",
    style: "s1",
    quip: "You know it. You survived it. You replaced it with Zustand.",
  },
  {
    label: "MongoDB",
    style: "s2",
    quip: "NoSQL. Schema-optional. Production-optimized. The vibe.",
  },
  {
    label: "Express.js",
    style: "s3",
    quip: "RESTful APIs so fast they have been reported for speeding.",
  },
  {
    label: "Tailwind CSS",
    style: "s4",
    quip: "Utility-first. Inline styles but make it fashion.",
  },
  {
    label: "GitHub",
    style: "s5",
    quip: "Where code goes to live, die, and be force-pushed.",
  },
  {
    label: "AWS EC2",
    style: "s1",
    quip: "You touched production servers. They did not crash. That is an achievement.",
  },
  {
    label: "Typesense",
    style: "s2",
    quip: "Search that actually finds things. Witchcraft.",
  },
  {
    label: "Payload CMS",
    style: "s3",
    quip: "Headless CMS. Like WordPress but you can look your friends in the eye.",
  },
  {
    label: "AI Tools",
    style: "s4",
    quip: "Writing code 2–3x faster. The robots work FOR you here.",
  },
  {
    label: "Vercel",
    style: "s5",
    quip: "git push → deployed. Peak developer experience. You deserve this.",
  },
];

const achievements = [
  {
    icon: "🏆",
    title: "DHADHICHI AWARD",
    desc: "Recipient of the prestigious Dhadhichi Award for whole-body donation to medical science. Not a bug. Not a typo.",
    popup:
      "The most unhinged achievement to put on a dev portfolio. Sudev pledged his whole body to medical science, which, honestly, is more commitment than most people show in code reviews. Respect.",
  },
  {
    icon: "🔦",
    title: "LIGHTHOUSE SURVIVOR",
    desc: "Inherited a Lighthouse score of 33. Did not quit. Did not cry (publicly). Brought it to 85+. This is a character arc.",
    popup:
      "Started with a 33. That score was so bad, Google was sending concerned emails. Fixed it to 85+. The site now loads before you even click the link. Probably.",
  },
  {
    icon: "💯",
    title: "PERFECT SEO SCORE",
    desc: "100/100. On Lighthouse. For SEO. Do you know how rare this is? Neither does Sudev, but he will put it on every resume forever.",
    popup:
      "The perfect score. Google personally called to say the sitemaps were immaculate. (They did not call but the score was 100 so same energy.)",
  },
  {
    icon: "❓",
    title: "FORMER S...",
    desc: "The resume says 'Former S' and then stops. A mystery. A legend. An enigma wrapped in a Tailwind className.",
    popup:
      "We do not know what S stands for. The resume cut off there. Possibilities include: Secretary, Superhero, Sorcerer, or just Steve.",
  },
];

const brags = [
  "▌ Currently writing cleaner code than you ▌",
  "▌ Zustand changed my life. Ask me how. ▌",
  "▌ Coffee → Code → Deploy → Repeat ▌",
  "▌ 'Works on my machine' — Sudev, before fixing it ▌",
  "▌ 2–3x faster with AI. HR does not know what this means. ▌",
  "▌ Lighthouse score of 100. No big deal. (Big deal.) ▌",
  "▌ Full-stack means I own all the bugs ▌",
];

const avatarLines = [
  "ok ok ok",
  "i said ok!!",
  "please stop",
  "this is a professional portfolio",
  "i'm calling HR",
  "...fine. i like it.",
];

const lhRows = [
  {
    label: "Performance",
    before: "33",
    after: "85+",
    width: "85%",
    color: COLORS.green,
  },
  {
    label: "SEO",
    before: "??",
    after: "100",
    width: "100%",
    color: COLORS.yellow,
  },
  {
    label: "Search Latency",
    before: "slow",
    after: "FAST",
    width: "95%",
    color: "#00bfff",
  },
  {
    label: "Redux in Codebase",
    before: "100%",
    after: "ZERO",
    width: "5%",
    color: COLORS.red,
  },
];

const skillStyles = {
  s1: {
    background: COLORS.yellow,
    color: COLORS.black,
    border: `3px solid ${COLORS.yellow}`,
  },
  s2: {
    background: "transparent",
    color: COLORS.yellow,
    border: `3px solid ${COLORS.yellow}`,
  },
  s3: {
    background: COLORS.red,
    color: COLORS.white,
    border: `3px solid ${COLORS.red}`,
  },
  s4: {
    background: "transparent",
    color: COLORS.white,
    border: `3px solid ${COLORS.white}`,
  },
  s5: {
    background: COLORS.green,
    color: COLORS.black,
    border: `3px solid ${COLORS.green}`,
  },
};

// ─── Responsive hook ──────────────────────────────────────────────────────────
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

// ─── Marquee ─────────────────────────────────────────────────────────────────
function Marquee() {
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

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({
  bragIdx,
  avatarClicks,
  onAvatarClick,
}: {
  bragIdx: number;
  avatarClicks: number;
  onAvatarClick: () => void;
}) {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        borderBottom: `6px solid ${COLORS.black}`,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        minHeight: isMobile ? "auto" : 380,
      }}
    >
      <div
        style={{
          borderRight: isMobile ? "none" : `6px solid ${COLORS.black}`,
          borderBottom: isMobile ? `6px solid ${COLORS.black}` : "none",
          padding: isMobile ? "32px 20px" : "40px 32px",
          background: COLORS.yellow,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            fontSize: isMobile ? 120 : 200,
            opacity: 0.08,
            fontFamily: "'Bebas Neue'",
            right: -20,
            bottom: -30,
            color: COLORS.black,
            pointerEvents: "none",
          }}
        >
          {"{ }"}
        </div>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: isMobile ? 11 : 13,
            color: "#00000088",
            marginBottom: 6,
            letterSpacing: 1,
          }}
        >
          &gt; whoami
        </div>
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: isMobile ? 48 : 64,
            letterSpacing: 6,
            lineHeight: 1,
          }}
        >
          <span
            style={{
              color: COLORS.black,
              textShadow: `4px 4px 0 ${COLORS.red}`,
            }}
          >
            SU
          </span>
          <span
            style={{
              color: COLORS.black,
              textShadow: `4px 4px 0 ${COLORS.red}`,
            }}
          >
            [
          </span>
          <span
            style={{
              color: COLORS.red,
              textShadow: `4px 4px 0 ${COLORS.black}`,
            }}
          >
            DEV
          </span>
          <span
            style={{
              color: COLORS.black,
              textShadow: `4px 4px 0 ${COLORS.red}`,
            }}
          >
            ]
          </span>
          <br />
          <span
            style={{
              color: COLORS.black,
              textShadow: `4px 4px 0 ${COLORS.red}`,
            }}
          >
            KUMAR
          </span>
        </div>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: isMobile ? 10 : 11,
            color: "#00000077",
            marginTop: 6,
            marginBottom: 2,
            letterSpacing: 1,
          }}
        >
          <span style={{ color: "#00000055" }}>{"// "}</span>the 'DEV' was not
          accidental
        </div>
        <div
          style={{
            fontSize: 12,
            marginTop: 12,
            textTransform: "uppercase",
            letterSpacing: 2,
            borderLeft: `4px solid ${COLORS.red}`,
            paddingLeft: 12,
            fontFamily: "'Space Mono', monospace",
          }}
        >
          Full-Stack Dev @ EVFY · Freelancer @ Goyabooking.com
        </div>
        <div
          style={{
            marginTop: 20,
            background: COLORS.black,
            color: COLORS.green,
            padding: "10px 14px",
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            lineHeight: 1.8,
            whiteSpace: "pre-line",
          }}
        >
          {`> Status: Employed. Caffeinated. Slightly unhinged.\n> Bugs fixed today: countless\n> Redux removed: with great pleasure\n> AI tools used: yes, all of them`}
        </div>
      </div>
      <div
        style={{
          background: COLORS.black,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          padding: isMobile ? "32px 20px" : "40px 32px",
        }}
      >
        <Avatar clicks={avatarClicks} onClick={onAvatarClick} />
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            ["33→85+", "Lighthouse"],
            ["100", "SEO Score"],
            ["2–3×", "Faster w/ AI"],
          ].map(([val, lbl]) => (
            <div
              key={lbl}
              style={{
                background: COLORS.yellow,
                color: COLORS.black,
                fontSize: 11,
                fontWeight: 700,
                padding: "6px 10px",
                fontFamily: "'Space Mono', monospace",
                border: `2px solid ${COLORS.yellow}`,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontFamily: "'Bebas Neue'",
                  letterSpacing: 2,
                }}
              >
                {val}
              </div>
              {lbl}
            </div>
          ))}
        </div>
        <BragText idx={bragIdx} />
      </div>
    </div>
  );
}

function Avatar({ clicks, onClick }: { clicks: number; onClick: () => void }) {
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

function BragText({ idx }: { idx: number }) {
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

// ─── Lighthouse ───────────────────────────────────────────────────────────────
function LighthouseSection({ animate }: { animate: boolean }) {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        padding: isMobile ? "20px 16px" : "24px 32px",
        borderBottom: `6px solid ${COLORS.black}`,
        background: "#111",
      }}
    >
      <div
        style={{
          color: COLORS.yellow,
          fontFamily: "'Bebas Neue'",
          fontSize: isMobile ? 22 : 28,
          letterSpacing: 3,
          marginBottom: 16,
        }}
      >
        LIGHTHOUSE GLOW-UP REPORT ▸
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {lhRows.map(({ label, before, after, width, color }) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? 6 : 12,
            }}
          >
            <div
              style={{
                color: "#aaa",
                fontSize: isMobile ? 10 : 12,
                fontFamily: "'Space Mono', monospace",
                width: isMobile ? 100 : 140,
                flexShrink: 0,
              }}
            >
              {label}
            </div>
            {!isMobile && (
              <div
                style={{
                  color: "#555",
                  fontSize: 11,
                  fontFamily: "'Space Mono', monospace",
                  width: 50,
                  textAlign: "right",
                }}
              >
                {before}
              </div>
            )}
            <div
              style={{
                flex: 1,
                background: "#333",
                height: 20,
                border: "1px solid #555",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: animate ? width : "0%",
                  background: color,
                  transition: "width 1.2s cubic-bezier(.22,1,.36,1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight: 6,
                  fontSize: 11,
                  fontFamily: "'Space Mono', monospace",
                  fontWeight: 700,
                  color: "#000",
                }}
              >
                {after}
              </div>
            </div>
            <div
              style={{
                color,
                fontSize: isMobile ? 11 : 13,
                fontWeight: 700,
                fontFamily: "'Space Mono', monospace",
                width: isMobile ? 40 : 50,
                textAlign: "right",
              }}
            >
              {after}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({
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

// ─── Experience ───────────────────────────────────────────────────────────────
function ExperienceSection() {
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

function ExpCard({
  company,
  role,
  bullets,
  confession,
  borderRight,
}: {
  company: string;
  role: string;
  bullets: string[];
  confession: string;
  borderRight?: boolean;
}) {
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: isMobile ? "20px 16px" : 32,
        borderRight: borderRight ? `6px solid ${COLORS.black}` : "none",
        borderBottom: isMobile ? `4px solid ${COLORS.black}` : "none",
        background: hovered ? COLORS.yellow : "transparent",
        transition: "background 0.15s",
      }}
    >
      <div
        style={{
          fontFamily: "'Bebas Neue'",
          fontSize: isMobile ? 28 : 36,
          letterSpacing: 3,
          borderBottom: `4px solid ${COLORS.black}`,
          paddingBottom: 8,
          marginBottom: 16,
          whiteSpace: "pre-line",
        }}
      >
        {company}
      </div>
      <div
        style={{
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: 2,
          color: COLORS.red,
          fontWeight: 700,
          marginBottom: 16,
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {role}
      </div>
      <ul style={{ listStyle: "none", fontSize: 12, lineHeight: 1.8 }}>
        {bullets.map((b, i) => (
          <li
            key={i}
            style={{
              padding: "4px 0",
              borderBottom: "1px dashed #999",
              display: "flex",
              gap: 8,
            }}
          >
            <span style={{ color: COLORS.red, flexShrink: 0 }}>▸</span>
            {b}
          </li>
        ))}
      </ul>
      <div
        style={{
          marginTop: 16,
          background: COLORS.black,
          color: COLORS.green,
          fontSize: 11,
          padding: "10px 12px",
          fontStyle: "italic",
          lineHeight: 1.6,
          fontFamily: "'Space Mono', monospace",
        }}
      >
        <span style={{ color: "#888" }}>{"// dev confession: "}</span>
        {confession}
      </div>
    </div>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────
function SkillsSection() {
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

function SkillTag({
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

// ─── Achievements ─────────────────────────────────────────────────────────────
function AchievementsSection({
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

function AchCard({
  icon,
  title,
  desc,
  popup,
  onPopup,
}: {
  icon: string;
  title: string;
  desc: string;
  popup: string;
  onPopup: (t: string, b: string) => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPopup(title, popup)}
      style={{
        border: `4px solid ${COLORS.black}`,
        padding: 20,
        cursor: "pointer",
        background: hovered ? COLORS.yellow : COLORS.white,
        transform: hovered ? "translate(-4px,-4px)" : "none",
        boxShadow: hovered ? `4px 4px 0 ${COLORS.black}` : "none",
        transition: "all 0.1s",
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 8 }}>{icon}</div>
      <div
        style={{ fontFamily: "'Bebas Neue'", fontSize: 20, letterSpacing: 2 }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 12,
          lineHeight: 1.6,
          marginTop: 6,
          color: "#444",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {desc}
      </div>
      {hovered && (
        <div
          style={{
            fontSize: 11,
            color: COLORS.red,
            fontWeight: 700,
            marginTop: 10,
            fontFamily: "'Space Mono', monospace",
          }}
        >
          ▸ click to read the full lore
        </div>
      )}
    </div>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────
function EducationSection() {
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

function EduCard({
  degree,
  uni,
  years,
  note,
  yellow,
  borderBottom,
}: {
  degree: string;
  uni: string;
  years: string;
  note: string;
  yellow?: boolean;
  borderBottom?: boolean;
}) {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        padding: isMobile ? "20px 16px" : 32,
        borderRight: yellow || isMobile ? "none" : `6px solid ${COLORS.black}`,
        borderBottom: borderBottom ? `6px solid ${COLORS.black}` : "none",
        background: yellow ? COLORS.yellow : "transparent",
      }}
    >
      <div
        style={{ fontFamily: "'Bebas Neue'", fontSize: 24, letterSpacing: 3 }}
      >
        {degree}
      </div>
      <div
        style={{
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: 1,
          color: "#666",
          margin: "6px 0",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {uni}
      </div>
      <div
        style={{ fontSize: 28, fontFamily: "'Bebas Neue'", color: COLORS.red }}
      >
        {years}
      </div>
      <div
        style={{
          fontSize: 11,
          fontStyle: "italic",
          marginTop: 8,
          color: "#555",
          borderLeft: `3px solid ${COLORS.red}`,
          paddingLeft: 10,
          fontFamily: "'Space Mono', monospace",
          lineHeight: 1.6,
        }}
      >
        {note}
      </div>
    </div>
  );
}

// ─── Contact / Hire Me ────────────────────────────────────────────────────────
function ContactSection() {
  const isMobile = useIsMobile();
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `3px solid ${focused === field ? COLORS.yellow : "#444"}`,
    color: COLORS.white,
    fontFamily: "'Space Mono', monospace",
    fontSize: 13,
    padding: "10px 4px",
    outline: "none",
    transition: "border-color 0.2s",
    marginBottom: 20,
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setSending(true);
    emailjs
      .sendForm(
        "service_52ux8sj", // ← your EmailJS service ID
        "template_jg0is3g", // ← your EmailJS template ID
        form.current,
        { publicKey: "8BfXOONaJLuriNrOJ" }, // ← your public key
      )
      .then(
        () => {
          toast.success("Message sent! Sudev will respond eventually.");
          form.current?.reset();
          setSending(false);
        },
        () => {
          toast.error("Something went wrong. Try carrier pigeon.");
          setSending(false);
        },
      );
  };

  return (
    <>
      <SectionHeader num="05">LET'S HAVE A CHAT (PLS)</SectionHeader>
      <div
        style={{
          background: COLORS.black,
          borderBottom: `6px solid ${COLORS.black}`,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        }}
      >
        {/* Contact Info */}
        <div
          style={{
            padding: isMobile ? "28px 16px" : "40px 32px",
            borderRight: isMobile ? "none" : `6px solid #222`,
            borderBottom: isMobile ? `4px solid #222` : "none",
          }}
        >
          <div
            style={{
              fontFamily: "'Bebas Neue'",
              fontSize: isMobile ? 28 : 36,
              color: COLORS.yellow,
              letterSpacing: 3,
              marginBottom: 8,
            }}
          >
            PING ME ANYWHERE
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#888",
              fontFamily: "'Space Mono', monospace",
              lineHeight: 1.8,
              marginBottom: 28,
            }}
          >
            Open to new projects, unhinged ideas, and opportunities
            <br />
            to make the internet slightly less bad.
          </div>

          {[
            {
              label: "MAIL ME",
              value: "sudevkumar82@gmail.com",
              icon: "✉",
              href: "mailto:sudevkumar82@gmail.com",
            },
            {
              label: "CALL ME",
              value: "+91 83288 47712",
              icon: "☎",
              href: "tel:+918328847712",
            },
            {
              label: "WHATSAPP ME",
              value: "+91 82498 74197",
              icon: "💬",
              href: "https://wa.me/918249874197",
            },
          ].map(({ label, value, icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "14px 0",
                borderBottom: "1px dashed #333",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "8px")}
              onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  border: `3px solid ${COLORS.yellow}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  color: COLORS.yellow,
                  flexShrink: 0,
                  fontFamily: "sans-serif",
                  transition: "all 0.15s",
                }}
              >
                {icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    color: "#666",
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: COLORS.white,
                    fontFamily: "'Space Mono', monospace",
                    marginTop: 2,
                  }}
                >
                  {value}
                </div>
              </div>
            </a>
          ))}

          <div
            style={{
              marginTop: 28,
              background: "#111",
              border: `2px solid #222`,
              padding: "14px 16px",
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: COLORS.green,
              lineHeight: 1.8,
            }}
          >
            <span style={{ color: "#555" }}>{"// response time: "}</span>faster
            than a Redux store update
          </div>
        </div>

        {/* Form */}
        <div style={{ padding: isMobile ? "28px 16px" : "40px 32px" }}>
          <div
            style={{
              fontFamily: "'Bebas Neue'",
              fontSize: isMobile ? 28 : 36,
              color: COLORS.yellow,
              letterSpacing: 3,
              marginBottom: 24,
            }}
          >
            SEND A MESSAGE
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: "0 20px",
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: 10,
                    color: "#666",
                    fontFamily: "'Space Mono', monospace",
                    textTransform: "uppercase",
                    letterSpacing: 2,
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="off"
                  placeholder="John Recruiter"
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("name")}
                />
              </div>
              <div>
                <label
                  style={{
                    fontSize: 10,
                    color: "#666",
                    fontFamily: "'Space Mono', monospace",
                    textTransform: "uppercase",
                    letterSpacing: 2,
                  }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="off"
                  placeholder="hire@company.com"
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("email")}
                />
              </div>
            </div>
            <div>
              <label
                style={{
                  fontSize: 10,
                  color: "#666",
                  fontFamily: "'Space Mono', monospace",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                autoComplete="off"
                placeholder="I want to hire you (hopefully)"
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
                style={inputStyle("subject")}
              />
            </div>
            <div>
              <label
                style={{
                  fontSize: 10,
                  color: "#666",
                  fontFamily: "'Space Mono', monospace",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                required
                autoComplete="off"
                placeholder="Dear Sudev, we have reviewed your portfolio and were simultaneously impressed and confused. Please report Monday."
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                rows={5}
                style={{
                  ...inputStyle("message"),
                  resize: "vertical",
                  marginBottom: 28,
                }}
              />
            </div>
            <SendButton sending={sending} />
          </form>
        </div>
      </div>
    </>
  );
}

function SendButton({ sending }: { sending: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="submit"
      disabled={sending}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: sending ? "#333" : hovered ? COLORS.yellow : "transparent",
        color: sending ? "#666" : hovered ? COLORS.black : COLORS.yellow,
        border: `3px solid ${sending ? "#333" : COLORS.yellow}`,
        fontFamily: "'Bebas Neue'",
        fontSize: 22,
        letterSpacing: 3,
        padding: "12px 32px",
        cursor: sending ? "not-allowed" : "pointer",
        transition: "all 0.15s",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      {sending ? "TRANSMITTING..." : "SEND IT ▸"}
    </button>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        background: COLORS.red,
        padding: isMobile ? "28px 16px" : "32px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "'Bebas Neue'",
            fontSize: isMobile ? 28 : 32,
            letterSpacing: 4,
            color: COLORS.white,
            textShadow: `3px 3px 0 ${COLORS.black}`,
          }}
        >
          SUDEV KUMAR © {new Date().getFullYear()}
        </div>
        <div
          style={{
            fontSize: 11,
            color: COLORS.yellow,
            marginTop: 4,
            fontFamily: "'Space Mono', monospace",
          }}
        >
          Built with React, caffeine, and questionable decisions.
        </div>
      </div>
      <div
        style={{
          fontSize: 11,
          color: "rgba(255,255,255,0.5)",
          fontFamily: "'Space Mono', monospace",
          textAlign: isMobile ? "left" : "right",
        }}
      >
        No bugs were harmed
        <br />
        in making this portfolio.
      </div>
    </div>
  );
}

// ─── Popup ────────────────────────────────────────────────────────────────────
function Popup({
  title,
  body,
  onClose,
}: {
  title: string;
  body: string;
  onClose: () => void;
}) {
  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 998,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: COLORS.white,
          border: `6px solid ${COLORS.black}`,
          padding: 32,
          zIndex: 999,
          maxWidth: 380,
          width: "90%",
          boxShadow: `12px 12px 0 ${COLORS.black}`,
          textAlign: "center",
          fontFamily: "'Space Mono', monospace",
          animation: "popIn 0.2s cubic-bezier(.36,.07,.19,.97)",
        }}
      >
        <style>{`@keyframes popIn{0%{transform:translate(-50%,-50%) scale(0.5) rotate(-5deg)}80%{transform:translate(-50%,-50%) scale(1.05) rotate(1deg)}100%{transform:translate(-50%,-50%) scale(1) rotate(0)}}`}</style>
        <div
          style={{
            fontFamily: "'Bebas Neue'",
            fontSize: 32,
            letterSpacing: 3,
            marginBottom: 12,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.8, marginBottom: 20 }}>
          {body}
        </div>
        <button
          onClick={onClose}
          style={{
            background: COLORS.black,
            color: COLORS.white,
            border: "none",
            fontFamily: "'Bebas Neue'",
            fontSize: 20,
            padding: "10px 28px",
            cursor: "pointer",
            letterSpacing: 2,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = COLORS.red)}
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = COLORS.black)
          }
        >
          OK COOL ✕
        </button>
      </div>
    </>
  );
}

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
