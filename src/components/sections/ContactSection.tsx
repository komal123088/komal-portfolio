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
      style={{
        padding: "100px 40px",
        maxWidth: "1180px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "60px" }}>
        <div
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
                <div>
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
