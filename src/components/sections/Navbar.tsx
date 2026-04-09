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

  return (
    <nav
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
        background: scrolled ? "rgba(2,12,27,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      {/* LOGO */}
      <a
        href="#"
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
    </nav>
  );
}
