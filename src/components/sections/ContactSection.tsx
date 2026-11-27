"use client";

import { useState } from "react";
import { personal } from "@/data";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your form handling logic (e.g., Resend, Formspree, EmailJS)
    console.log("Form submitted:", form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactItems = [
    {
      icon: "@",
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: "in",
      label: "LinkedIn",
      value: "linkedin.com/in/komalraza",
      href: personal.social.linkedin,
    },
    {
      icon: "</>",
      label: "GitHub",
      value: "github.com/komalraza",
      href: personal.social.github,
    },
  ];

  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        padding: "100px 40px",
        maxWidth: "1180px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* RESPONSIVE STYLES */}
      <style>{`
        .contact-grid > * { min-width: 0; }
        .contact-fields > * { min-width: 0; }
        .contact-input { max-width: 100%; box-sizing: border-box; }

        /* Laptop / small desktop */
        @media (max-width: 1100px) {
          .contact-section { padding: 90px 32px !important; }
          .contact-grid { gap: 40px !important; }
          .contact-form { padding: 30px !important; }
        }

        /* Tablet */
        @media (max-width: 900px) {
          .contact-section { padding: 80px 24px !important; }
          .contact-header { margin-bottom: 48px !important; }
          .contact-title-line { width: 80px !important; }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .contact-section { padding: 64px 16px !important; }
          .contact-header { margin-bottom: 36px !important; }
          .contact-label { font-size: 10px !important; letter-spacing: 3px !important; }
          .contact-intro {
            font-size: 15px !important;
            line-height: 1.7 !important;
            margin-bottom: 28px !important;
          }

          /* Name aur Email upar neeche */
          .contact-fields {
            grid-template-columns: 1fr !important;
          }

          .contact-form { padding: 24px 16px !important; }

          /* Lambi email / link value screen se bahar na jaye */
          .contact-item { padding: 12px !important; gap: 12px !important; }
          .contact-item-text { min-width: 0; }
          .contact-item-value {
            font-size: 12px !important;
            overflow-wrap: anywhere;
            word-break: break-word;
          }

          /* iOS par 16px se chhota font zoom kar deta hai */
          .contact-input { font-size: 16px !important; }
        }

        /* Small phones */
        @media (max-width: 380px) {
          .contact-section { padding: 56px 12px !important; }
          .contact-form { padding: 20px 12px !important; }
          .contact-item-icon {
            width: 34px !important;
            height: 34px !important;
          }
        }

        /* Touch devices par hover se element khisakta nahi */
        @media (hover: none) {
          .contact-item:hover { transform: none !important; }
        }
      `}</style>

      {/* Header */}
      <div className="contact-header" style={{ marginBottom: "60px" }}>
        <div
          className="contact-label"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--primary)",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          // 05 — Get In Touch
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3vw, 38px)",
            fontWeight: 700,
            color: "var(--text)",
          }}
        >
          Contact
          <div
            className="contact-title-line"
            style={{
              height: "2px",
              width: "55%",
              background: "linear-gradient(90deg, var(--primary), transparent)",
              marginTop: "10px",
            }}
          />
        </h2>
      </div>

      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "60px",
          alignItems: "start",
        }}
      >
        {/* LEFT — Info */}
        <div style={{ animation: "fadeInLeft 0.6s 0.1s both" }}>
          <p
            className="contact-intro"
            style={{
              fontSize: "16px",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              marginBottom: "40px",
            }}
          >
            Have a project in mind, a job opportunity, or just want to talk
            tech? My inbox is always open — I respond within 24 hours.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="contact-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  textDecoration: "none",
                  padding: "14px",
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border-glow)";
                  el.style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateX(0)";
                }}
              >
                <div
                  className="contact-item-icon"
                  style={{
                    width: "38px",
                    height: "38px",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--primary)",
                    flexShrink: 0,
                    background: "var(--grad-btn)",
                  }}
                >
                  {item.icon}
                </div>
                <div className="contact-item-text">
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--text-muted)",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="contact-item-value"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      color: "var(--text)",
                      marginTop: "2px",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — Form */}
        <div
          className="contact-form"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            padding: "36px",
            position: "relative",
            animation: "fadeInRight 0.6s 0.2s both",
          }}
        >
          {/* Corner deco */}
          {(["tl", "br"] as const).map((pos) => (
            <div
              key={pos}
              style={{
                position: "absolute",
                width: "16px",
                height: "16px",
                top: pos === "tl" ? 0 : "auto",
                bottom: pos === "br" ? 0 : "auto",
                left: pos === "tl" ? 0 : "auto",
                right: pos === "br" ? 0 : "auto",
                borderTop: pos === "tl" ? "2px solid var(--primary)" : "none",
                borderLeft: pos === "tl" ? "2px solid var(--primary)" : "none",
                borderBottom:
                  pos === "br" ? "2px solid var(--primary)" : "none",
                borderRight: pos === "br" ? "2px solid var(--primary)" : "none",
              }}
            />
          ))}

          <form onSubmit={handleSubmit}>
            <div
              className="contact-fields"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              {(["name", "email"] as const).map((field) => (
                <div key={field}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--primary)",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    {field} *
                  </label>
                  <input
                    className="contact-input"
                    type={field === "email" ? "email" : "text"}
                    required
                    value={form[field]}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, [field]: e.target.value }))
                    }
                    style={{
                      width: "100%",
                      background: "rgba(0,0,0,0.4)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      padding: "10px 14px",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--primary)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--border)")
                    }
                    placeholder={
                      field === "name" ? "Your name" : "your@email.com"
                    }
                  />
                </div>
              ))}
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--primary)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Subject
              </label>
              <input
                className="contact-input"
                type="text"
                value={form.subject}
                onChange={(e) =>
                  setForm((f) => ({ ...f, subject: e.target.value }))
                }
                style={{
                  width: "100%",
                  background: "rgba(0,0,0,0.4)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  padding: "10px 14px",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                placeholder="Project inquiry, job opportunity..."
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--primary)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Message *
              </label>
              <textarea
                className="contact-input"
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                style={{
                  width: "100%",
                  background: "rgba(0,0,0,0.4)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  padding: "10px 14px",
                  outline: "none",
                  resize: "vertical",
                  transition: "border-color 0.2s",
                  lineHeight: 1.6,
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                fontFamily: "var(--font-display)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                padding: "15px",
                background: sent ? "rgba(57,255,20,0.1)" : "var(--grad-btn)",
                border: sent
                  ? "1px solid #39ff14"
                  : "1px solid var(--border-glow)",
                color: sent ? "#39ff14" : "var(--primary)",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                if (!sent) {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 0 30px var(--border-glow)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {sent ? "✓ MESSAGE SENT" : "SEND MESSAGE →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
