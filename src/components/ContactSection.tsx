import { useRef, useState } from "react";
import { COLORS } from "../assests/data";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { useIsMobile } from "../hooks/useIsMobile.tsx";
import { SectionHeader } from "./SectionHeader.tsx";
import { SendButton } from "./SendButton.tsx";

export function ContactSection() {
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
