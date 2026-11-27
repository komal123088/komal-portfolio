"use client";

import { useEffect, useRef, useState } from "react";
import { personal } from "@/data";
import { activeTheme } from "@/config/theme";

// Animated typing text
function TypeWriter({ texts }: { texts: string[] }) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx % texts.length];
    const speed = deleting ? 45 : 90;
    const pause = deleting ? 0 : charIdx === current.length ? 1800 : 0;

    const t = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplay(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setIdx((i) => i + 1);
      }
    }, pause || speed);
    return () => clearTimeout(t);
  }, [charIdx, deleting, idx, texts]);

  return (
    <span>
      {display}
      <span
        style={{
          animation: "blink 1s infinite",
          fontFamily: "var(--font-mono)",
        }}
      >
        |
      </span>
    </span>
  );
}

// 3D canvas with Three.js
function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    let cleanup: (() => void) | null = null;
    const c = activeTheme.colors;

    // Dynamic import to avoid SSR issues
    Promise.all([import("three")]).then(([THREE]) => {
      if (!mounted || !mountRef.current) return;
      const container = mountRef.current;
      const W = container.clientWidth || 520;
      const H = container.clientHeight || 520;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // Parse hex to THREE color
      const hexToColor = (hex: string) =>
        new THREE.Color(hex.replace("#", "0x") as unknown as string);

      // MAIN: Wireframe icosahedron
      const icoGeo = new THREE.IcosahedronGeometry(1.8, 1);
      const icoMat = new THREE.MeshBasicMaterial({
        color: hexToColor(c.primary),
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const ico = new THREE.Mesh(icoGeo, icoMat);
      scene.add(ico);

      // INNER: Solid icosahedron
      const innerGeo = new THREE.IcosahedronGeometry(1.3, 0);
      const innerMat = new THREE.MeshBasicMaterial({
        color: hexToColor(c.tertiary),
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      });
      const inner = new THREE.Mesh(innerGeo, innerMat);
      scene.add(inner);

      // OUTER RING: Torus
      const torusGeo = new THREE.TorusGeometry(2.4, 0.015, 8, 80);
      const torusMat = new THREE.MeshBasicMaterial({
        color: hexToColor(c.secondary),
        transparent: true,
        opacity: 0.4,
      });
      const torus = new THREE.Mesh(torusGeo, torusMat);
      torus.rotation.x = Math.PI / 3;
      scene.add(torus);

      // RING 2
      const torus2Geo = new THREE.TorusGeometry(2.8, 0.008, 8, 80);
      const torus2Mat = new THREE.MeshBasicMaterial({
        color: hexToColor(c.primary),
        transparent: true,
        opacity: 0.2,
      });
      const torus2 = new THREE.Mesh(torus2Geo, torus2Mat);
      torus2.rotation.x = Math.PI / 5;
      torus2.rotation.y = Math.PI / 4;
      scene.add(torus2);

      // PARTICLES
      const pCount = 300;
      const pPositions = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i++) {
        const r = 3 + Math.random() * 3;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        pPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        pPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        pPositions[i * 3 + 2] = r * Math.cos(phi);
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
      const pMat = new THREE.PointsMaterial({
        color: hexToColor(c.primary),
        size: 0.025,
        transparent: true,
        opacity: 0.6,
      });
      const points = new THREE.Points(pGeo, pMat);
      scene.add(points);

      // Mouse interaction
      let mouseX = 0,
        mouseY = 0;
      const onMouse = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / W - 0.5) * 2;
        mouseY = -((e.clientY - rect.top) / H - 0.5) * 2;
      };
      container.addEventListener("mousemove", onMouse);

      let frame = 0;
      const animate = () => {
        if (!mounted) return;
        frame++;
        const t = frame * 0.005;

        ico.rotation.x = t * 0.4 + mouseY * 0.3;
        ico.rotation.y = t * 0.6 + mouseX * 0.3;
        inner.rotation.x = -t * 0.5;
        inner.rotation.y = -t * 0.7;
        torus.rotation.z = t * 0.3;
        torus2.rotation.z = -t * 0.2;
        torus2.rotation.x += 0.001;
        points.rotation.y = t * 0.1;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
      animate();

      const resizeHandler = () => {
        const nW = container.clientWidth;
        const nH = container.clientHeight;
        camera.aspect = nW / nH;
        camera.updateProjectionMatrix();
        renderer.setSize(nW, nH);
      };
      window.addEventListener("resize", resizeHandler);

      cleanup = () => {
        mounted = false;
        container.removeEventListener("mousemove", onMouse);
        window.removeEventListener("resize", resizeHandler);
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    });

    return () => {
      mounted = false;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="hero-three"
      style={{
        width: "100%",
        height: "500px",
        maxWidth: "520px",
        position: "relative",
        cursor: "none",
      }}
    />
  );
}

// Corner decoration component
function CornerDeco({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const styles: Record<string, string | number> = {
    position: "absolute",
    width: "22px",
    height: "22px",
    borderTop: pos.startsWith("t") ? "2px solid var(--primary)" : "none",
    borderBottom: pos.startsWith("b") ? "2px solid var(--primary)" : "none",
    borderLeft: pos.endsWith("l") ? "2px solid var(--primary)" : "none",
    borderRight: pos.endsWith("r") ? "2px solid var(--primary)" : "none",
    top: pos.startsWith("t") ? 0 : "auto",
    bottom: pos.startsWith("b") ? 0 : "auto",
    left: pos.endsWith("l") ? 0 : "auto",
    right: pos.endsWith("r") ? 0 : "auto",
  };
  return <div style={styles} />;
}

export function HeroSection() {
  const c = activeTheme.colors;

  return (
    <section
      id="about"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 40px 60px",
        position: "relative",
        zIndex: 2,
        background: activeTheme.gradients.hero,
      }}
    >
      {/* RESPONSIVE STYLES */}
      <style>{`
        .hero-grid > * { min-width: 0; }

        /* Laptop / small desktop */
        @media (max-width: 1100px) {
          .hero-section { padding: 100px 32px 60px !important; }
          .hero-grid { gap: 40px !important; }
          .hero-three { height: 440px !important; }
        }

        /* Tablet */
        @media (max-width: 900px) {
          .hero-section { padding: 100px 24px 90px !important; }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
          .hero-left { text-align: center; }
          .hero-tag { justify-content: center !important; }
          .hero-bio { margin-left: auto !important; margin-right: auto !important; }
          .hero-buttons { justify-content: center !important; }
          .hero-social { justify-content: center !important; }
          .hero-scene-wrap {
            width: 100% !important;
            max-width: 520px !important;
          }
          .hero-three {
            height: 400px !important;
            margin: 0 auto !important;
          }
          .hero-badge-status { left: 0 !important; }
          .hero-badge-exp { right: 0 !important; }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .hero-section { padding: 90px 16px 80px !important; }
          .hero-grid { gap: 44px !important; }
          .hero-typewriter {
            font-size: 15px !important;
            min-height: 24px !important;
          }
          .hero-bio {
            font-size: 15px !important;
            line-height: 1.7 !important;
            margin-bottom: 28px !important;
          }
          .hero-buttons { gap: 12px !important; }
          .hero-btn {
            padding: 12px 22px !important;
            font-size: 11px !important;
            letter-spacing: 1.5px !important;
          }
          .hero-three { height: 320px !important; }
          .hero-badge-status {
            bottom: 12px !important;
            padding: 8px 12px !important;
          }
          .hero-badge-exp {
            top: 12px !important;
            padding: 8px 12px !important;
          }
          .hero-scroll { display: none !important; }
        }

        /* Small phones */
        @media (max-width: 380px) {
          .hero-section { padding: 85px 14px 70px !important; }
          .hero-btn {
            padding: 11px 16px !important;
            font-size: 10px !important;
          }
          .hero-three { height: 280px !important; }
        }
      `}</style>

      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* LEFT — TEXT */}
        <div
          className="hero-left"
          style={{ animation: "fadeInLeft 0.7s 0.1s both" }}
        >
          {/* Tag */}
          <div
            className="hero-tag"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--primary)",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                width: "32px",
                height: "1px",
                background: "var(--primary)",
                display: "inline-block",
              }}
            />
            Full Stack Developer
          </div>

          {/* NAME with glitch */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: "12px",
              position: "relative",
            }}
          >
            <span style={{ color: "var(--text)", display: "block" }}>
              KOMAL
            </span>
            <span
              style={{
                background: "var(--grad-text)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "block",
              }}
            >
              RAZA
            </span>
          </h1>

          {/* TYPEWRITER */}
          <div
            className="hero-typewriter"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "18px",
              color: "var(--secondary)",
              marginBottom: "20px",
              minHeight: "28px",
            }}
          >
            <TypeWriter
              texts={[
                "Building Digital Experiences",
                "React & Next.js Specialist",
                "Full Stack Engineer",
                "UI/UX Enthusiast",
                "Problem Solver",
              ]}
            />
          </div>

          {/* BIO */}
          <p
            className="hero-bio"
            style={{
              fontSize: "16px",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              marginBottom: "36px",
              maxWidth: "480px",
            }}
          >
            {personal.bio}
          </p>

          {/* BUTTONS */}
          <div
            className="hero-buttons"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <a
              href="#projects"
              className="hero-btn"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "13px 28px",
                border: "1px solid var(--primary)",
                background: "var(--grad-btn)",
                color: "var(--primary)",
                textDecoration: "none",
                clipPath:
                  "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
                transition: "all 0.3s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 0 24px var(--border-glow)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              View Projects
            </a>

            <a
              href={personal.resumeUrl}
              download
              className="hero-btn"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "13px 28px",
                border: "1px solid rgba(255,0,110,0.5)",
                background: "transparent",
                color: "var(--secondary)",
                textDecoration: "none",
                clipPath:
                  "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
                transition: "all 0.3s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,0,110,0.08)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.transform = "translateY(0)";
              }}
            >
              Download CV
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div
            className="hero-social"
            style={{ display: "flex", gap: "12px", marginTop: "32px" }}
          >
            {[
              { label: "GH", url: personal.social.github },
              { label: "IN", url: personal.social.linkedin },
            ].map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--primary)";
                  el.style.color = "var(--primary)";
                  el.style.boxShadow = "0 0 12px var(--border)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--text-muted)";
                  el.style.boxShadow = "none";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — 3D SCENE */}
        <div
          className="hero-right"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "fadeInRight 0.7s 0.3s both",
            position: "relative",
          }}
        >
          <div className="hero-scene-wrap" style={{ position: "relative" }}>
            <CornerDeco pos="tl" />
            <CornerDeco pos="tr" />
            <CornerDeco pos="bl" />
            <CornerDeco pos="br" />
            <ThreeScene />

            {/* Floating badge */}
            <div
              className="hero-badge-status"
              style={{
                position: "absolute",
                bottom: "30px",
                left: "-20px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                padding: "10px 16px",
                animation: "float 3s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--primary)",
                  letterSpacing: "2px",
                }}
              >
                STATUS
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13px",
                  color: "var(--text)",
                  marginTop: "2px",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    background: "#39ff14",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "6px",
                    animation: "pulse-dot 2s infinite",
                  }}
                />
                OPEN TO WORK
              </div>
            </div>

            {/* Floating badge 2 */}
            <div
              className="hero-badge-exp"
              style={{
                position: "absolute",
                top: "40px",
                right: "-20px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                padding: "10px 16px",
                animation: "float 4s ease-in-out infinite 1.5s",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "20px",
                  fontWeight: 900,
                  color: "var(--primary)",
                }}
              >
                3+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-muted)",
                  letterSpacing: "1px",
                }}
              >
                YRS EXP
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll"
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--text-muted)",
          letterSpacing: "2px",
          animation: "fadeInUp 1s 1.5s both",
        }}
      >
        SCROLL
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(var(--primary), transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
