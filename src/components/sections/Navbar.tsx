"use client";

import { useState, useEffect } from "react";
import { personal } from "@/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Screen bari ho jaye to mobile menu band kar do
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Menu khula ho to page scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className="nav-root"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 40px",
        background: scrolled || menuOpen ? "rgba(2,12,27,0.95)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        borderBottom:
          scrolled || menuOpen
            ? "1px solid var(--border)"
            : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      {/* RESPONSIVE STYLES */}
      <style>{`
        .nav-burger { display: none; }
        .nav-mobile { display: none; }

        /* Tablet */
        @media (max-width: 900px) {
          .nav-root { padding: 14px 24px !important; }
          .nav-links { display: none !important; }
          .nav-status { display: none !important; }

          .nav-burger {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5px;
            width: 40px;
            height: 40px;
            padding: 9px;
            background: transparent;
            border: 1px solid var(--border);
            cursor: pointer;
          }
          .nav-burger span {
            display: block;
            height: 2px;
            width: 100%;
            background: var(--primary);
            transition: transform 0.3s, opacity 0.3s;
          }
          .nav-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
          .nav-burger.open span:nth-child(2) { opacity: 0; }
          .nav-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

          .nav-mobile {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            max-height: 0;
            overflow: hidden;
            background: rgba(2,12,27,0.97);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid transparent;
            transition: max-height 0.4s ease, border-color 0.4s ease;
          }
          .nav-mobile.open {
            max-height: 90vh;
            border-bottom-color: var(--border);
          }
          .nav-mobile ul {
            list-style: none;
            margin: 0;
            padding: 8px 24px 0;
          }
          .nav-mobile li a {
            display: block;
            padding: 16px 4px;
            font-family: var(--font-mono);
            font-size: 13px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: var(--text-muted);
            text-decoration: none;
            border-bottom: 1px solid var(--border);
          }
          .nav-mobile li a:hover { color: var(--primary); }
          .nav-mobile-status {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 18px 28px 22px;
            font-family: var(--font-mono);
            font-size: 11px;
            letter-spacing: 2px;
            color: var(--primary);
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .nav-root { padding: 12px 16px !important; }
          .nav-logo { font-size: 16px !important; letter-spacing: 2px !important; }
          .nav-mobile ul { padding: 4px 16px 0; }
          .nav-mobile-status { padding: 16px 20px 20px; }
        }
      `}</style>

      {/* LOGO */}
      <a
        href="#"
        className="nav-logo"
        onClick={() => setMenuOpen(false)}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "18px",
          fontWeight: 900,
          color: "var(--primary)",
          textDecoration: "none",
          letterSpacing: "3px",
          textShadow: "0 0 var(--glow-size) var(--primary)",
        }}
      >
        KR<span style={{ color: "var(--secondary)" }}>.DEV</span>
      </a>

      {/* DESKTOP LINKS */}
      <ul
        className="nav-links"
        style={{
          display: "flex",
          gap: "28px",
          listStyle: "none",
          alignItems: "center",
        }}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "var(--text-muted)",
                textDecoration: "none",
                letterSpacing: "2px",
                textTransform: "uppercase",
                transition: "color 0.2s, text-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--primary)";
                (e.target as HTMLElement).style.textShadow =
                  "0 0 10px var(--primary)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--text-muted)";
                (e.target as HTMLElement).style.textShadow = "none";
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* STATUS BADGE */}
      <div
        className="nav-status"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--primary)",
          letterSpacing: "2px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            background: "#39ff14",
            borderRadius: "50%",
            animation: "pulse-dot 2s infinite",
            display: "inline-block",
          }}
        />
        AVAILABLE
      </div>

      {/* HAMBURGER (sirf tablet/mobile par) */}
      <button
        type="button"
        className={`nav-burger ${menuOpen ? "open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* MOBILE MENU (sirf tablet/mobile par) */}
      <div className={`nav-mobile ${menuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-mobile-status">
          <span
            style={{
              width: "8px",
              height: "8px",
              background: "#39ff14",
              borderRadius: "50%",
              animation: "pulse-dot 2s infinite",
              display: "inline-block",
            }}
          />
          AVAILABLE
        </div>
      </div>
    </nav>
  );
}
