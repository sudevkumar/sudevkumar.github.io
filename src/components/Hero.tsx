import { COLORS } from "../assests/data";
import { useIsMobile } from "../hooks/useIsMobile.tsx";
import { Avatar } from "./Avatar.tsx";
import { BragText } from "./BragText.tsx";

export function Hero({
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

        <a
          href={"./SudevKumar.pdf"}
          download="SudevKumarResume.pdf"
          style={{
            marginTop: 16,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: COLORS.red,
            color: COLORS.white,
            fontFamily: "'Bebas Neue'",
            fontSize: 20,
            letterSpacing: 3,
            padding: "12px 24px",
            textDecoration: "none",
            border: `3px solid ${COLORS.black}`,
            boxShadow: `4px 4px 0 ${COLORS.black}`,
            transition: "all 0.15s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform =
              "translate(-3px,-3px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              `7px 7px 0 ${COLORS.black}`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "none";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              `4px 4px 0 ${COLORS.black}`;
          }}
        >
          ↓ DOWNLOAD RESUME
        </a>
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
            ["13K+", "LinkedIn Reach"],
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
