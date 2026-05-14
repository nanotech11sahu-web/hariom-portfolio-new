import { useState, useEffect, useRef } from "react";

/* ── LOCAL ASSETS ── */
const LOCAL_VIDEOS = [
  "C3pdCC9toqy", "DAIrnhCtJPd", "DAQaGDJN9nx", "DIi9TV3NrmM",
  "DQeG5Igj8IS", "DRmPikcAkbs", "DVOCGZkgnlq", "DOqVpxbj4I9",
  "DWGs0MYj4dK", "DWoBhATE2bj", "DT7imY4DdlE", "DObCjgBAh3z",
  "DPoBtKiAhJT", "C7lx5QGPdMf", "C0OgyLTpGj7", "DOtFMlKDziB",
  "DO0vfz3j-hV", "DWYnEHEjwX2", "DK121mNPV4Z", "DNSzQQkPV1w",
  "DNsQf7J3kay", "DOtFMlKDziB",
].map(code => ({
  src: `/assets/Video by tractorgyan [${code}].mp4`,
  code,
  link: `https://www.instagram.com/reel/${code}/`,
}));

/* ─────────────────────────────────────────
   GLOBAL NAV
───────────────────────────────────────── */
function GlobalNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Home", id: "hero" },
    { label: "My Work", id: "my-work" },
    { label: "YouTube", id: "youtube-section" },
    { label: "Cinematic", id: "cinematic-product" },
    { label: "Brand Videos", id: "brand-video" },
    { label: "AI Videos", id: "ai-video" },
    { label: "Instagram Reels", id: "instagram-trend" },
    { label: "Contact", id: "contact-section" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      background: scrolled ? "rgba(10,10,10,0.98)" : "rgba(10,10,10,0.85)",
      backdropFilter: "blur(24px)",
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
      borderBottom: "1px solid rgba(255,255,255,0.07)",
      transition: "background 0.3s",
      width: "100%",
      boxSizing: "border-box",
    }}>
      <div style={{
        width: "100%", padding: "0 20px", height: 58,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        boxSizing: "border-box",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: "50%",
            background: "linear-gradient(135deg,#f7c948,#e6a800)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <span style={{ color: "#000", fontWeight: 900, fontSize: 17, fontFamily: "Georgia,serif" }}>H</span>
          </div>
          <span style={{
            color: "white", fontWeight: 700, fontSize: 17,
            fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif",
            letterSpacing: "-0.02em",
          }}>
            Hariom <span style={{ color: "#f7c948" }}>Patidar</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }} className="desktop-nav">
          {links.map(l => (
            <button key={l.label} onClick={() => scrollTo(l.id)}
              style={{
                color: "rgba(255,255,255,0.62)", fontSize: 13,
                background: "none", border: "none", cursor: "pointer",
                whiteSpace: "nowrap", letterSpacing: "-0.01em",
                fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif",
                transition: "color 0.2s", padding: 0,
              }}
              onMouseEnter={e => e.target.style.color = "white"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.62)"}
            >{l.label}</button>
          ))}
          <a href="mailto:hpatidar0099@gmail.com"
            style={{
              background: "#f7c948", color: "#000", fontSize: 13,
              padding: "8px 18px", borderRadius: 22, textDecoration: "none",
              fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif",
              fontWeight: 600, letterSpacing: "-0.01em",
              transition: "opacity 0.2s", whiteSpace: "nowrap",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.82"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >Contact Us</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "white", fontSize: 24, padding: "4px 8px",
            display: "none",
          }}
        >☰</button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(10,10,10,0.98)", padding: "12px 20px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}>
          {links.map(l => (
            <button key={l.label} onClick={() => scrollTo(l.id)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                color: "rgba(255,255,255,0.8)", fontSize: 15,
                background: "none", border: "none", cursor: "pointer",
                padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.07)",
                fontFamily: "-apple-system,sans-serif",
              }}
            >{l.label}</button>
          ))}
          <a href="mailto:hpatidar0099@gmail.com"
            style={{
              display: "inline-block", marginTop: 14,
              background: "#f7c948", color: "#000", fontSize: 14,
              padding: "10px 24px", borderRadius: 22, textDecoration: "none",
              fontWeight: 600,
            }}
          >Contact Us</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
function VideoBannerHero() {
  const isMobile = window.innerWidth < 768;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: isMobile ? "42vh" : "78vh",
        minHeight: isMobile ? "340px" : "600px",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* VIDEO */}
      <video
        src="/assets/main_banner_video.MP4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: isMobile ? "center top" : "center center",
          zIndex: 0,
        }}
      />

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.82) 100%)",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "absolute",
          bottom: isMobile ? "16px" : "40px",
          left: isMobile ? "18px" : "60px",
          right: isMobile ? "18px" : "60px",
          zIndex: 3,

          display: isMobile ? "block" : "flex",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "flex-end",
        }}
      >
        {/* LEFT SIDE */}
        <div>
          <h1
            style={{
              color: "#fff",
              fontSize: isMobile ? "28px" : "72px",
              fontWeight: 700,
              lineHeight: isMobile ? "1.02" : "1",
              margin: 0,
              letterSpacing: "-0.04em",
              fontFamily:
                "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif",
              textShadow: "0 2px 20px rgba(0,0,0,0.7)",
              whiteSpace: isMobile ? "normal" : "nowrap",
            }}
          >
            {isMobile ? (
              <>
                Content Creator <br />
                & Editor
              </>
            ) : (
              "Content Creator & Editor"
            )}
          </h1>

          {/* MOBILE BUTTONS */}
          {isMobile && (
            <div
              style={{
                display: "flex",
                gap: 10,
                marginTop: "18px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#contact-section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact-section");
                }}
                style={{
                  background: "#f7c948",
                  color: "#000",
                  fontSize: "13px",
                  padding: "11px 20px",
                  borderRadius: 999,
                  textDecoration: "none",
                  fontWeight: 700,
                  fontFamily: "-apple-system,sans-serif",
                  boxShadow: "0 4px 18px rgba(247,201,72,0.35)",
                }}
              >
                Get in Touch
              </a>

              <button
                onClick={() => scrollTo("my-work")}
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.28)",
                  color: "#fff",
                  fontSize: "13px",
                  padding: "11px 20px",
                  borderRadius: 999,
                  cursor: "pointer",
                  fontFamily: "-apple-system,sans-serif",
                }}
              >
                View My Work
              </button>
            </div>
          )}
        </div>

        {/* DESKTOP BUTTONS */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: 14,
              flexShrink: 0,
            }}
          >
            <a
              href="#contact-section"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact-section");
              }}
              style={{
                background: "#f7c948",
                color: "#000",
                fontSize: "15px",
                padding: "13px 28px",
                borderRadius: 999,
                textDecoration: "none",
                fontWeight: 700,
                fontFamily: "-apple-system,sans-serif",
                boxShadow: "0 4px 18px rgba(247,201,72,0.35)",
              }}
            >
              Get in Touch
            </a>

            <button
              onClick={() => scrollTo("my-work")}
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.28)",
                color: "#fff",
                fontSize: "15px",
                padding: "13px 28px",
                borderRadius: 999,
                cursor: "pointer",
                fontFamily: "-apple-system,sans-serif",
              }}
            >
              View My Work
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   YT VIDEO BANNER
───────────────────────────────────────── */
function YTVideoBanner({ videoId, title }) {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIframeSrc(url);
        } else {
          setIframeSrc("");
        }
      },
      { threshold: 0.25 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [videoId]);

  return (
    <section
      ref={containerRef}
      style={{ position: "relative", background: "#000", overflow: "hidden", height: "clamp(330px,60vw,630px)", width: "100%" }}
    >
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          frameBorder="0"
          allow="autoplay; muted; encrypted-media; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%) scale(1.02)",
            width: "calc(100% + 4px)",
            height: "calc(100% + 4px)",
            minHeight: "56.25vw",
            minWidth: "177.78vh",
            pointerEvents: "none",
          }}
          title={title}
        />
      </div>
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.35) 100%)",
        pointerEvents: "none",
      }} />
    </section>
  );
}

/* ─────────────────────────────────────────
   LOCAL VIDEO SHORT CARD
───────────────────────────────────────── */
function LocalVideoShort({ src, link }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  if (error) return null;

  const handleClick = () => {
    if (link) window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      style={{ flexShrink: 0, cursor: link ? "pointer" : "default", position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: "clamp(130px, 18vw, 165px)",
        height: "clamp(230px, 32vw, 293px)",
        borderRadius: 16, overflow: "hidden",
        position: "relative", background: "#111",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.6)" : "0 2px 12px rgba(0,0,0,0.4)",
        transition: "box-shadow 0.3s, transform 0.3s",
        transform: hovered ? "scale(1.04)" : "scale(1)",
      }}>
        <video
          ref={videoRef}
          src={src}
          muted loop playsInline autoPlay
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={() => setError(true)}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)", pointerEvents: "none" }} />
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          opacity: hovered ? 1 : 0, transition: "opacity 0.25s",
          background: hovered ? "rgba(0,0,0,0.32)" : "transparent",
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            background: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
          }}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="white" style={{ marginLeft: 2 }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "8px 10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.7)" stroke="none"/>
            </svg>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 10, fontFamily: "-apple-system,sans-serif" }}>Reel</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SHORTS STRIP
───────────────────────────────────────── */
function ShortsStrip({ title, badge, badgeBg, videos }) {
  const stripRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir) => {
    if (stripRef.current) stripRef.current.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  const checkScroll = () => {
    const el = stripRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  return (
    <div style={{ background: "#000", padding: "36px 0 32px", position: "relative", width: "100%" }}>
      <div style={{ padding: "0 20px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {[{ dir: -1, icon: "‹" }, { dir: 1, icon: "›" }].map(({ dir, icon }) => (
            <button key={dir} onClick={() => scroll(dir)}
              style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white", fontSize: 18, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s",
                opacity: (dir === -1 ? canScrollLeft : canScrollRight) ? 1 : 0.3,
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            >{icon}</button>
          ))}
        </div>
      </div>
      <div
        ref={stripRef}
        onScroll={checkScroll}
        style={{
          display: "flex", gap: 12, overflowX: "auto",
          padding: "4px 20px 8px", scrollbarWidth: "none", scrollSnapType: "x mandatory",
          flexWrap: "nowrap",
        }}
      >
        {videos.map((v, i) => (
          <div key={i} style={{ scrollSnapAlign: "start", marginRight: 40 }}>
            <LocalVideoShort src={v.src} link={v.link} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function HeroSection() {
  return (
    <section id="hero" style={{
      background: "linear-gradient(180deg,#050505 0%,#0a0a0a 100%)",
      textAlign: "center", padding: "clamp(60px,10vw,88px) 24px clamp(50px,8vw,72px)",
      position: "relative", overflow: "hidden", width: "100%", boxSizing: "border-box",
    }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "80%", height: 300, background: "radial-gradient(ellipse, rgba(247,201,72,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <h1 style={{
        color: "white", fontSize: "clamp(32px,7vw,68px)", fontWeight: 700,
        letterSpacing: "-0.03em", lineHeight: 1.04, margin: "0 0 22px",
        fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif", position: "relative",
      }}>
        Content Creator<br />&amp; Editor
      </h1>
      <p style={{
        color: "rgba(255,255,255,0.68)", fontSize: "clamp(15px,2.5vw,18px)", lineHeight: 1.65,
        maxWidth: 660, margin: "0 auto 32px",
        fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif", position: "relative",
      }}>
        Award‑winning brand videos. Viral Instagram reels. YouTube growth strategy. AI‑generated content. End-to-end production from concept to delivery.
      </p>
      <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
        <a href="#contact-section" onClick={e => { e.preventDefault(); document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" }); }}
          style={{ background: "#f7c948", color: "#000", fontSize: "clamp(13px,2vw,15px)", padding: "12px 28px", borderRadius: 24, textDecoration: "none", fontFamily: "-apple-system,sans-serif", fontWeight: 600 }}>
          Get in Touch
        </a>
        <button onClick={() => document.getElementById("my-work")?.scrollIntoView({ behavior: "smooth" })}
          style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "white", fontSize: "clamp(13px,2vw,15px)", padding: "12px 28px", borderRadius: 24, cursor: "pointer", fontFamily: "-apple-system,sans-serif" }}>
          View My Work
        </button>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────── */
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send");
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact-section" style={{
      background: "linear-gradient(160deg,#050505 0%,#0f0f0f 100%)",
      padding: "clamp(60px,10vw,100px) clamp(20px,5vw,40px)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      width: "100%", boxSizing: "border-box",
    }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20, background: "rgba(247,201,72,0.1)", border: "1px solid rgba(247,201,72,0.25)", borderRadius: 20, padding: "6px 16px" }}>
            <span style={{ color: "#f7c948", fontSize: 12, fontFamily: "-apple-system,sans-serif", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>Contact</span>
          </div>
          <h2 style={{ color: "white", fontSize: "clamp(28px,5vw,52px)", fontWeight: 700, margin: "0 0 16px", letterSpacing: "-0.03em", fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif" }}>
            Let's Work Together
          </h2>
        </div>

        {sent ? (
          <div style={{
            background: "rgba(40,205,65,0.12)", border: "1px solid rgba(40,205,65,0.3)",
            borderRadius: 20, padding: "40px 32px", textAlign: "center",
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h3 style={{ color: "white", fontFamily: "-apple-system,sans-serif", margin: "0 0 8px", fontSize: 22 }}>Message Sent!</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontFamily: "-apple-system,sans-serif", margin: 0 }}>Thanks for reaching out. I'll get back to you soon.</p>
            <button onClick={() => setSent(false)} style={{ marginTop: 20, background: "#f7c948", color: "#000", border: "none", borderRadius: 20, padding: "10px 24px", cursor: "pointer", fontWeight: 600, fontFamily: "-apple-system,sans-serif" }}>Send Another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-grid">
              <div>
                <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontFamily: "-apple-system,sans-serif", fontWeight: 500 }}>Your Name *</label>
                <input
                  name="name" type="text" required
                  value={form.name} onChange={handleChange}
                  placeholder="Hariom Patidar"
                  style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "14px 16px", color: "white", fontSize: 15, fontFamily: "-apple-system,sans-serif", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                  onFocus={e => e.target.style.borderColor = "rgba(247,201,72,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
                />
              </div>
              <div>
                <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontFamily: "-apple-system,sans-serif", fontWeight: 500 }}>Email Address *</label>
                <input
                  name="email" type="email" required
                  value={form.email} onChange={handleChange}
                  placeholder="you@example.com"
                  style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "14px 16px", color: "white", fontSize: 15, fontFamily: "-apple-system,sans-serif", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                  onFocus={e => e.target.style.borderColor = "rgba(247,201,72,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
                />
              </div>
            </div>
            <div>
              <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontFamily: "-apple-system,sans-serif", fontWeight: 500 }}>Subject</label>
              <input
                name="subject" type="text"
                value={form.subject} onChange={handleChange}
                placeholder="Brand video project, YouTube editing..."
                style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "14px 16px", color: "white", fontSize: 15, fontFamily: "-apple-system,sans-serif", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                onFocus={e => e.target.style.borderColor = "rgba(247,201,72,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
              />
            </div>
            <div>
              <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontFamily: "-apple-system,sans-serif", fontWeight: 500 }}>Message *</label>
              <textarea
                name="message" required rows={5}
                value={form.message} onChange={handleChange}
                placeholder="Tell me about your project..."
                style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "14px 16px", color: "white", fontSize: 15, fontFamily: "-apple-system,sans-serif", outline: "none", boxSizing: "border-box", resize: "vertical", minHeight: 140, transition: "border-color 0.2s" }}
                onFocus={e => e.target.style.borderColor = "rgba(247,201,72,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
              />
            </div>
            {error && (
              <div style={{ background: "rgba(255,60,60,0.12)", border: "1px solid rgba(255,60,60,0.3)", borderRadius: 12, padding: "12px 16px", color: "#ff6b6b", fontSize: 14, fontFamily: "-apple-system,sans-serif" }}>
                ⚠️ {error}
              </div>
            )}
            <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <button
                type="submit" disabled={sending}
                style={{ background: sending ? "rgba(247,201,72,0.6)" : "#f7c948", color: "#000", border: "none", borderRadius: 24, padding: "14px 36px", fontSize: 15, fontWeight: 700, cursor: sending ? "not-allowed" : "pointer", fontFamily: "-apple-system,sans-serif", transition: "opacity 0.2s" }}
              >
                {sending ? "Sending..." : "Send Message →"}
              </button>
              <a href="mailto:hpatidar0099@gmail.com" style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontFamily: "-apple-system,sans-serif", textDecoration: "none" }}>
                or email directly: hpatidar0099@gmail.com
              </a>
            </div>
          </form>
        )}
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: 72, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#f7c948,#e6a800)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#000", fontWeight: 900, fontSize: 14, fontFamily: "Georgia,serif" }}>H</span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.6)", fontFamily: "-apple-system,sans-serif", fontSize: 13 }}>
            Hariom Patidar — Video Content Creator &amp; Editor
          </span>
        </div>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, fontFamily: "-apple-system,sans-serif", margin: 0 }}>© 2025 Hariom Patidar. All rights reserved.</p>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────
   MY WORK SECTION
───────────────────────────────────────── */
function makeReels(codes) {
  return codes.map(code => ({
    src: `/assets/Video by tractorgyan [${code}].mp4`,
    code,
    link: `https://www.instagram.com/reel/${code}/`,
  }));
}
function YouTubeContentSection() {
  const ytVideos = [
    { ytId: "xm9_4OHl2XQ", title: "Top 10 Tractors 2023" },
    { ytId: "DqMDi4A7Ve8", title: "2026 में आएंगे ये ट्रैक्टर" },
    { ytId: "8QkWeInuFPo", title: "5 ट्रैक्टर कभी ना खरीदें" },
    { ytId: "PGjTr-XLTm0", title: "Mahindra 575 DI YUVO 4WD" },
    { ytId: "_4OYQjTEfcc", title: "New Holland 3600 TX Super" },
    { ytId: "KeKppOWl5tI", title: "YouTube Video 5" },
  ];

  return (
    <div id="youtube-section" style={{ borderTop: "3px solid rgba(255,255,255,0.06)", width: "100%" }}>
      <div style={{
        padding: "clamp(40px,7vw,56px) clamp(20px,5vw,40px) 28px",
        background: "linear-gradient(160deg,#1a0000 0%,#3d0000 45%,#0d0000 100%)",
        textAlign: "center", width: "100%", boxSizing: "border-box",
      }}>
        <span style={{ background: "#ff0000", color: "white", fontSize: 11, padding: "3px 12px", borderRadius: 4, fontWeight: 700, fontFamily: "-apple-system,sans-serif" }}>YouTube Growth</span>
        <h3 style={{
          color: "white", fontSize: "clamp(22px,4vw,40px)", fontWeight: 600,
          margin: "14px 0 10px", letterSpacing: "-0.02em",
          fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif",
        }}>YouTube Content</h3>
        <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 16, margin: "0 auto 24px", fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif", maxWidth: 500 }}>
          Audience engagement, retention, and platform growth.
        </p>
      </div>

      <div style={{ background: "#0a0000", padding: "20px clamp(16px,4vw,40px) 48px", overflowX: "auto", scrollbarWidth: "none", width: "100%", boxSizing: "border-box" }}>
        <div style={{ display: "flex", gap: 14, minWidth: "max-content" }}>
          {ytVideos.map((v, i) => (
            <a key={i} href={`https://youtu.be/${v.ytId}`} target="_blank" rel="noopener noreferrer"
              style={{ flexShrink: 0, width: "clamp(160px,22vw,220px)", textDecoration: "none" }}>
              <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", borderRadius: 12, overflow: "hidden", background: "#1a0000", marginBottom: 8 }}>
                <img src={`https://img.youtube.com/vi/${v.ytId}/hqdefault.jpg`} alt={v.title}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", transition: "background 0.2s", display: "flex", alignItems: "center", justifyContent: "center" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,0,0,0.4)"; e.currentTarget.querySelector(".yt-play").style.opacity = "1"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0)"; e.currentTarget.querySelector(".yt-play").style.opacity = "0"; }}
                >
                  <div className="yt-play" style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.2s" }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="white" style={{ marginLeft: 2 }}><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
                <div style={{ position: "absolute", top: 6, right: 6, background: "#ff0000", borderRadius: 4, padding: "2px 6px", fontSize: 9, fontWeight: 700, color: "white" }}>YT</div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, margin: 0, fontFamily: "-apple-system,sans-serif", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{v.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
function MyWorkSection() {
  const brandVideos = makeReels([
    "DObCjgBAh3z", "DNsQf7J3kay", "DNSzQQkPV1w", "DK121mNPV4Z",
    "DOtFMlKDziB", "DWYnEHEjwX2", "DO0vfz3j-hV", "C0OgyLTpGj7",
    "C7lx5QGPdMf", "DPoBtKiAhJT",
  ]);

  const endToEnd = makeReels([
    "DT7imY4DdlE", "DWoBhATE2bj", "DWGs0MYj4dK",
    "DX09LAetF5X", "DXWhyekE2La", "DW6FP-fD8Nl", "DTSTEZGDfba", // ← NEW
  ]);

  const aiVideos = makeReels([
    "DOqVpxbj4I9", "DVOCGZkgnlq", "DRmPikcAkbs", "DQeG5Igj8IS",
    "DXRRvgSj1cJ", "DSq4wWlAkst", "DWqQMe7jRKz", // ← NEW
  ]);

  const trendVideos = makeReels([
    "DIi9TV3NrmM", "DAQaGDJN9nx", "DAIrnhCtJPd", "C3pdCC9toqy",
    "DVlImRHD2eo", "DTKoAO2jX7G", "DRzGQKNjRxc", // ← NEW
  ]);

  const ytVideos = [
    { ytId: "xm9_4OHl2XQ", title: "Top 10 Tractors 2023" },
    { ytId: "DqMDi4A7Ve8", title: "2026 में आएंगे ये ट्रैक्टर" },
    { ytId: "8QkWeInuFPo", title: "5 ट्रैक्टर कभी ना खरीदें" },
    { ytId: "PGjTr-XLTm0", title: "Mahindra 575 DI YUVO 4WD" },
    { ytId: "_4OYQjTEfcc", title: "New Holland 3600 TX Super" },
    { ytId: "KeKppOWl5tI", title: "YouTube Video 5" },
  ];

  // ── Cinematic Product Videos ─────────────────────────────────────────────
  const cinematicVideos = [
    { ytId: "iJRGrjX3IDA", title: "Cinematic Product Film" },
    { ytId: "tKzEuhmHygw", title: "Product Showcase Reel" },
    { ytId: "T1ceqm6bhas", title: "Brand Product Story", thumb: `https://i.ytimg.com/vi/T1ceqm6bhas/0.jpg` },
    { ytId: "xhs2dZWahK4", title: "Cinematic Commercial" },
  ];

  const categories = [
    {
      id: "brand-video",
      badge: "Brand Video",
      badgeBg: "linear-gradient(90deg,#1c1c3a,#2c2c5a)",
      title: "Brand‑Focused Video",
      desc: "Delivered brand-focused video projects by leading the complete production process — concept development, storytelling, direction, and editing.",
      gradient: "linear-gradient(160deg,#0d0d1a 0%,#1a1a3a 45%,#0a0a12 100%)",
      videos: brandVideos,
      tags: ["10 projects", "Instagram Reels"],
    },
    {
      id: "end-to-end",
      badge: "End-to-End",
      badgeBg: "linear-gradient(90deg,#3a1500,#5a2000)",
      title: "End-to-End Production",
      desc: "Executed end-to-end production including concept development, scripting, direction, anchoring, editing, and thumbnail design.",
      gradient: "linear-gradient(160deg,#1a0800 0%,#3d1500 45%,#0d0500 100%)",
      videos: endToEnd,
      tags: ["3 projects", "Full Pipeline"],
    },
    {
      id: "ai-video",
      badge: "AI Video",
      badgeBg: "linear-gradient(90deg,#0a1a3a,#1a0a3a)",
      title: "AI‑Generated Video",
      desc: "Produced innovative AI-generated video content by combining creative direction with emerging technologies to deliver engaging and visually unique results.",
      gradient: "linear-gradient(160deg,#050d1a 0%,#0f1a3a 45%,#080510 100%)",
      videos: aiVideos,
      tags: ["4 projects", "AI Tools"],
    },
    {
      id: "instagram-trend",
      badge: "Instagram Trends",
      badgeBg: "linear-gradient(90deg,#833ab4,#fd1d1d,#fcb045)",
      title: "Instagram Trend Videos",
      desc: "Created engaging Instagram trend-based videos by aligning viral concepts with original storytelling, handling scripting, direction, editing, and thumbnail design end-to-end.",
      gradient: "linear-gradient(160deg,#1a0a2a 0%,#2d0a1a 45%,#0d0510 100%)",
      videos: trendVideos,
      tags: ["4 projects", "Reels"],
    },
  ];

  return (
    <section id="my-work" style={{ background: "#000", width: "100%" }}>

      {/* ── Cinematic Product Videos Section ─────────────────────────────── */}
      <div style={{ height: "clamp(32px,6vw,64px)", background: "#000" }} />

      <div id="cinematic-product" style={{ borderTop: "3px solid rgba(255,255,255,0.06)", width: "100%" }}>
        <div style={{
          padding: "clamp(40px,7vw,56px) clamp(20px,5vw,40px) 28px",
          background: "linear-gradient(160deg,#0a0800 0%,#1f1800 45%,#0a0800 100%)",
          textAlign: "center", width: "100%", boxSizing: "border-box",
          position: "relative", overflow: "hidden",
        }}>
          {/* Subtle gold glow */}
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: "100%", background: "radial-gradient(ellipse, rgba(247,201,72,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <span style={{
              background: "linear-gradient(90deg,#b8860b,#f7c948)",
              color: "#000", fontSize: 11, padding: "3px 14px", borderRadius: 4,
              fontWeight: 700, fontFamily: "-apple-system,sans-serif",
            }}>🎬 Cinematic</span>
            <h3 style={{
              color: "white", fontSize: "clamp(22px,4vw,40px)", fontWeight: 600,
              margin: "14px 0 10px", letterSpacing: "-0.02em",
              fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif",
            }}>Cinematic Product Videos</h3>
            <p style={{
              color: "rgba(255,255,255,0.68)", fontSize: 16, margin: "0 auto 24px",
              fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif", maxWidth: 500,
            }}>
              High-end product cinematography with cinematic color grading, motion design, and visual storytelling.
            </p>
          </div>
        </div>

        {/* Cinematic thumbnail grid */}
        <div style={{ background: "#080600", padding: "20px clamp(16px,4vw,40px) 48px", overflowX: "auto", scrollbarWidth: "none", width: "100%", boxSizing: "border-box" }}>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            {cinematicVideos.map((v, i) => (
              <a key={i} href={`https://youtu.be/${v.ytId}`} target="_blank" rel="noopener noreferrer"
                style={{ flexShrink: 0, width: "clamp(160px,22vw,220px)", textDecoration: "none" }}>
                <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", borderRadius: 14, overflow: "hidden", background: "#1a1400", marginBottom: 10 }}>
                <img
                  src={v.thumb || `https://img.youtube.com/vi/${v.ytId}/maxresdefault.jpg`}
                  alt={v.title}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={e => {
                    if (e.target.src.includes("maxresdefault")) {
                      e.target.src = `https://img.youtube.com/vi/${v.ytId}/hqdefault.jpg`;
                    } else if (e.target.src.includes("hqdefault")) {
                      e.target.src = `https://img.youtube.com/vi/${v.ytId}/mqdefault.jpg`;
                    } else if (e.target.src.includes("mqdefault")) {
                      e.target.src = `https://img.youtube.com/vi/${v.ytId}/sddefault.jpg`;
                    } else {
                      e.target.src = `https://img.youtube.com/vi/${v.ytId}/0.jpg`;
                    }
                  }}
                />
                  {/* Dark cinematic overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)", pointerEvents: "none" }} />
                  {/* Hover layer */}
                  <div
                    style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", transition: "background 0.25s", display: "flex", alignItems: "center", justifyContent: "center" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,0,0,0.45)"; e.currentTarget.querySelector(".cp-play").style.opacity = "1"; e.currentTarget.querySelector(".cp-play").style.transform = "scale(1)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0)"; e.currentTarget.querySelector(".cp-play").style.opacity = "0"; e.currentTarget.querySelector(".cp-play").style.transform = "scale(0.85)"; }}
                  >
                    <div className="cp-play" style={{
                      width: 52, height: 52, borderRadius: "50%",
                      background: "linear-gradient(135deg,#f7c948,#e6a800)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      opacity: 0, transform: "scale(0.85)",
                      transition: "opacity 0.25s, transform 0.25s",
                      boxShadow: "0 4px 20px rgba(247,201,72,0.5)",
                    }}>
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="#000" style={{ marginLeft: 3 }}><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                  {/* Gold badge */}
                  <div style={{ position: "absolute", top: 8, right: 8, background: "linear-gradient(135deg,#f7c948,#e6a800)", borderRadius: 4, padding: "2px 8px", fontSize: 9, fontWeight: 700, color: "#000" }}>
                    🎬 CINEMATIC
                  </div>
                </div>
                <p style={{
                  color: "rgba(255,255,255,0.88)", fontSize: 13, margin: 0,
                  fontFamily: "-apple-system,sans-serif", fontWeight: 500,
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>{v.title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Category Sections ─────────────────────────────────────────────── */}
      {categories.map((cat) => (
        <div key={cat.id}>
          <div style={{ height: "clamp(32px,6vw,64px)", background: "#000" }} />

          <div id={cat.id} style={{ borderTop: "3px solid rgba(255,255,255,0.06)", width: "100%" }}>
            <div style={{
              position: "relative",
              background: cat.gradient,
              padding: "clamp(40px,7vw,56px) clamp(20px,5vw,40px) clamp(32px,6vw,44px)",
              textAlign: "center", width: "100%", boxSizing: "border-box",
            }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <span style={{ background: cat.badgeBg, color: "white", fontSize: 11, padding: "3px 14px", borderRadius: 4, fontWeight: 700, fontFamily: "-apple-system,sans-serif", display: "inline-block", marginBottom: 16 }}>{cat.badge}</span>
                <h3 style={{ color: "white", fontSize: "clamp(22px,4vw,44px)", fontWeight: 700, margin: "0 0 14px", letterSpacing: "-0.025em", fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif", lineHeight: 1.08 }}>{cat.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(14px,2.2vw,17px)", lineHeight: 1.6, margin: "0 auto 26px", fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif", maxWidth: 520 }}>{cat.desc}</p>
              </div>
            </div>

            {cat.videos.length > 0 && (
              <ShortsStrip
                title={cat.title}
                badge={cat.badge}
                badgeBg={cat.badgeBg}
                videos={cat.videos}
                initialCount={6}
              />
            )}
          </div>
        </div>
      ))}

      <div style={{ height: "clamp(40px,7vw,72px)", background: "#000" }} />
    </section>
  );
}

/* ─────────────────────────────────────────
   ABOUT + EXPERIENCE SECTION
───────────────────────────────────────── */
function AboutSection() {
  const experiences = [
    {
      role: "Video Production Manager",
      company: "Rapsa Technologies (TractorGyan)",
      period: "April 2021 – Present",
      color: "#f7c948",
      glow: "rgba(247,201,72,0.4)",
      badge: "Current",
      points: [
        "Scaled TractorGyan's social media from 5,000 → 200,000+ followers independently",
        "Created multiple videos reaching millions of viewers across platforms",
        "Led end-to-end production: concept, scripting, direction, editing & publishing",
        "Built and executed viral content strategies for the automobile niche",
        "Managed brand video campaigns, AI-generated content, and Instagram Reels",
      ],
    },
    {
      role: "Videographer & Editor",
      company: "makeupby_tanvibhatt",
      period: "2020",
      color: "#a78bfa",
      glow: "rgba(167,139,250,0.4)",
      badge: "2020",
      points: [
        "Professionally shot and edited videos for a makeup studio/institute",
        "Delivered polished social media content tailored to beauty audiences",
      ],
    },
    {
      role: "Freelance Work",
      company: "Pre Wedding Shoots & Short Films",
      period: "2019",
      color: "#6ee7b7",
      glow: "rgba(110,231,183,0.4)",
      badge: "2019",
      points: [
        "Worked on pre-wedding shoots and short film projects alongside college studies",
        "Completed India Film Project — 50-hour filmmaking challenge (Season 8 Certificate)",
      ],
    },
  ];

  const skills = [
    { label: "Premiere Pro",    src: "/logo/premiere-pro.png" },
    { label: "After Effects",   src: "/logo/after-effects.png" },
    { label: "DaVinci Resolve", src: "/logo/davinci.png" },
    { label: "Final Cut Pro",   src: "/logo/final_cut_pro.png" },
    { label: "Photoshop",       src: "/logo/photoshop.png" },
    { label: "Illustrator",     src: "/logo/illustrator.png" },
    { label: "Kling AI",        src: "/logo/kling.png" },
    { label: "Claude AI",       src: "/logo/claude.png" },
  ];

  return (
    <section
      id="about-section"
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "clamp(64px,10vw,100px) clamp(20px,5vw,56px)",
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow background */}
      <div style={{
        position: "absolute", top: 0, left: "25%",
        width: "50%", height: "40%",
        background: "radial-gradient(ellipse, rgba(247,201,72,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 10px 2px var(--dot-glow); }
          50%       { box-shadow: 0 0 26px 8px var(--dot-glow); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes lineGrow {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes statPop {
          from { opacity: 0; transform: scale(0.75); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes topBarSweep {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .about-fade { animation: fadeUp 0.7s cubic-bezier(.22,.68,0,1.2) both; }
        .gold-text {
          background: linear-gradient(90deg, #f7c948 0%, #fff8dc 40%, #f7c948 60%, #e6a800 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
        }
        .glow-dot {
          animation: glowPulse 2.5s ease-in-out infinite;
        }
        .exp-card {
          transition: transform 0.28s cubic-bezier(.22,.68,0,1.2), background 0.28s;
        }
        .exp-card:hover {
          transform: translateX(8px);
          background: rgba(255,255,255,0.03) !important;
        }
        .stat-card {
          animation: statPop 0.6s cubic-bezier(.22,.68,0,1.2) both;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(247,201,72,0.2) !important;
        }
        .timeline-line {
          transform-origin: top;
          animation: lineGrow 1.2s cubic-bezier(.22,.68,0,1.2) 0.3s both;
        }
        .bar-sweep {
          transform-origin: left;
          animation: topBarSweep 0.7s cubic-bezier(.22,.68,0,1.2) both;
        }
        .skill-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 10px;
          padding: 7px 13px 7px 9px;
          cursor: default;
          transition: background 0.22s, border-color 0.22s, transform 0.22s;
        }
        .skill-pill:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(247,201,72,0.35);
          transform: translateY(-2px);
        }
        .skill-pill img {
          width: 22px;
          height: 22px;
          object-fit: contain;
          border-radius: 5px;
          flex-shrink: 0;
        }
        .skill-pill span {
          color: rgba(255,255,255,0.72);
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
        }
        @media (max-width: 720px) {
          .about-grid-inner { grid-template-columns: 1fr !important; }
          .about-divider     { display: none !important; }
        }
      `}</style>

      <div
        className="about-grid-inner"
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1px 1fr",
          gap: "0 52px",
          alignItems: "start",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ═══════════ LEFT: ABOUT ═══════════ */}
        <div>
          {/* Badge */}
          <div
            className="about-fade"
            style={{
              animationDelay: "0.05s",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(247,201,72,0.08)",
              border: "1px solid rgba(247,201,72,0.3)",
              borderRadius: 24,
              padding: "5px 16px",
              marginBottom: 22,
            }}
          >
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#f7c948", display: "inline-block",
              animation: "glowPulse 2s ease-in-out infinite",
              "--dot-glow": "rgba(247,201,72,0.6)",
            }} />
            <span style={{ color: "#f7c948", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
              About Me
            </span>
          </div>

          {/* Name */}
          <h2
            className="about-fade"
            style={{
              animationDelay: "0.1s",
              margin: "0 0 4px",
              fontSize: "clamp(30px,4vw,52px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "white",
              fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif",
            }}
          >
            Hariom
          </h2>
          <h2
            className="gold-text about-fade"
            style={{
              animationDelay: "0.13s",
              margin: "0 0 22px",
              fontSize: "clamp(30px,4vw,52px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif",
            }}
          >
            Patidar
          </h2>

          {/* Tag pills */}
          <div className="about-fade" style={{ animationDelay: "0.17s", display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 24 }}>
            {["Video Creator", "Editor", "Scriptwriter"].map((tag) => (
              <span key={tag} style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.55)",
                fontSize: 12, padding: "4px 12px", borderRadius: 20, fontWeight: 500,
              }}>{tag}</span>
            ))}
          </div>

          {/* Body text */}
          {[
            <>A passionate content creator and Video Editor with over <span style={{ color: "#f7c948", fontWeight: 700 }}>5 years</span> of dedicated experience in the automobile industry — combining creativity with strategy to build powerful digital brands.</>,
            <>Currently <span style={{ color: "white", fontWeight: 600 }}>Video Production Manager</span> at TractorGyan, independently scaling the platform from <span style={{ color: "#f7c948", fontWeight: 700 }}>5,000 → 200,000+ followers</span> through viral content and consistent execution.</>,
            <>I don't just create content — <em style={{ color: "white", fontStyle: "italic", fontWeight: 600 }}>I create impact.</em> With expertise in digital marketing and deep knowledge of the automobile sector, I bring creativity, leadership, and execution.</>,
          ].map((text, i) => (
            <p
              key={i}
              className="about-fade"
              style={{
                animationDelay: `${0.2 + i * 0.07}s`,
                color: "rgba(255,255,255,0.68)",
                fontSize: "clamp(13px,1.6vw,15px)",
                lineHeight: 1.8,
                margin: "0 0 16px",
                fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif",
              }}
            >
              {text}
            </p>
          ))}

          {/* ── SKILLS ── */}
          <div className="about-fade" style={{ animationDelay: "0.38s", marginTop: 32 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7, marginBottom: 20,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%", background: "#f7c948",
                display: "inline-block", animation: "glowPulse 2s ease-in-out infinite",
                "--dot-glow": "rgba(247,201,72,0.6)",
              }} />
              <span style={{
                color: "rgba(255,255,255,0.4)", fontSize: 10,
                letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600,
              }}>Tools &amp; Skills</span>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
            }}>
              {[
                { label: "Premiere Pro",    src: "/logo/premiere-pro.png" },
                { label: "After Effects",   src: "/logo/after-effects.png" },
                { label: "DaVinci Resolve", src: "/logo/davinci.png" },
                { label: "Final Cut Pro",   src: "/logo/final_cut_pro.png" },
                { label: "Photoshop",       src: "/logo/photoshop.png" },
                { label: "Illustrator",     src: "/logo/illustrator.png" },
                { label: "Kling AI",        src: "/logo/kling.png" },
                { label: "Claude AI",       src: "/logo/claude.png" },
              ].map((skill, i) => (
                <div
                  key={skill.label}
                  className="about-fade"
                  style={{
                    animationDelay: `${0.42 + i * 0.05}s`,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    borderRadius: 16,
                    padding: "20px 10px 16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                    cursor: "default",
                    transition: "background 0.25s, border-color 0.25s, transform 0.25s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.borderColor = "rgba(247,201,72,0.35)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <img
                    src={skill.src}
                    alt={skill.label}
                    style={{
                      width: 48, height: 48,
                      objectFit: "contain",
                      borderRadius: 10,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: 11,
                    fontWeight: 500,
                    textAlign: "center",
                    lineHeight: 1.3,
                    fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif",
                  }}>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ═══════════ CENTER DIVIDER ═══════════ */}
        <div
          className="about-divider"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(247,201,72,0.45) 20%, rgba(247,201,72,0.45) 80%, transparent 100%)",
            width: 1,
            alignSelf: "stretch",
          }}
        />

        {/* ═══════════ RIGHT: EXPERIENCE ═══════════ */}
        <div>
          {/* Badge */}
          <div
            className="about-fade"
            style={{
              animationDelay: "0.05s",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.13)",
              borderRadius: 24,
              padding: "5px 16px",
              marginBottom: 22,
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>💼</span>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
              Experience
            </span>
          </div>

          <h2
            className="about-fade"
            style={{
              animationDelay: "0.1s",
              margin: "0 0 36px",
              fontSize: "clamp(24px,3.2vw,42px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "white",
              lineHeight: 1.05,
              fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif",
            }}
          >
            Career Journey
          </h2>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical timeline line */}
            <div
              className="timeline-line"
              style={{
                position: "absolute",
                left: 17,
                top: 22,
                bottom: 22,
                width: 2,
                borderRadius: 2,
                background: "linear-gradient(to bottom, rgba(247,201,72,0.7), rgba(167,139,250,0.5), rgba(110,231,183,0.4), transparent)",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="exp-card about-fade"
                  style={{
                    animationDelay: `${0.2 + i * 0.15}s`,
                    display: "flex",
                    gap: 20,
                    marginBottom: i < experiences.length - 1 ? 28 : 0,
                    padding: "18px 16px 18px 0",
                    borderRadius: 16,
                    background: "transparent",
                  }}
                >
                  {/* Dot column */}
                  <div style={{ flexShrink: 0, paddingTop: 2 }}>
                    <div
                      className="glow-dot"
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: exp.color,
                        border: `3px solid #050505`,
                        marginLeft: 9,
                        "--dot-glow": exp.glow,
                        position: "relative",
                        zIndex: 1,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Year badge + badge label */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.13)",
                        color: "rgba(255,255,255,0.5)",
                        fontSize: 11,
                        padding: "3px 10px",
                        borderRadius: 8,
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        fontFamily: "-apple-system,sans-serif",
                      }}>{exp.period}</span>
                      {exp.badge === "Current" && (
                        <span style={{
                          background: "rgba(247,201,72,0.12)",
                          border: "1px solid rgba(247,201,72,0.3)",
                          color: "#f7c948",
                          fontSize: 10,
                          padding: "2px 9px",
                          borderRadius: 8,
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}>● Present</span>
                      )}
                    </div>

                    {/* Role */}
                    <div style={{
                      color: "white",
                      fontSize: "clamp(14px,1.8vw,16px)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      marginBottom: 3,
                      fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif",
                    }}>{exp.role}</div>

                    {/* Company */}
                    <div style={{
                      color: exp.color,
                      fontSize: 13,
                      fontWeight: 500,
                      marginBottom: 12,
                      letterSpacing: "-0.01em",
                    }}>{exp.company}</div>

                    {/* Points */}
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                      {exp.points.map((pt, j) => (
                        <li
                          key={j}
                          style={{
                            display: "flex",
                            gap: 9,
                            color: "rgba(255,255,255,0.58)",
                            fontSize: "clamp(12px,1.4vw,13px)",
                            lineHeight: 1.6,
                            fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif",
                          }}
                        >
                          <span style={{ color: exp.color, flexShrink: 0, fontSize: 10, marginTop: 4 }}>▸</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   BACKGROUND MUSIC
───────────────────────────────────────── */
function BackgroundMusic() {
  const playerRef = useRef(null);
  const initializedRef = useRef(false);

  const initPlayer = () => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    playerRef.current = new window.YT.Player("yt-bg-player", {
      videoId: "mBXgbfmuY30",
      playerVars: { autoplay: 1, loop: 1, playlist: "mBXgbfmuY30", controls: 0, rel: 0 },
      events: {
        onReady: (e) => { e.target.setVolume(30); e.target.playVideo(); },
      },
    });
  };

  useEffect(() => {
    const startOnInteraction = () => {
      if (window.YT && window.YT.Player) {
        initPlayer();
      } else {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
        window.onYouTubeIframeAPIReady = initPlayer;
      }
      window.removeEventListener("scroll", startOnInteraction);
      window.removeEventListener("click", startOnInteraction);
    };

    window.addEventListener("scroll", startOnInteraction, { once: true });
    window.addEventListener("click", startOnInteraction, { once: true });

    return () => {
      window.removeEventListener("scroll", startOnInteraction);
      window.removeEventListener("click", startOnInteraction);
    };
  }, []);

  return (
    <div style={{ position: "fixed", left: -9999, top: -9999, width: 1, height: 1, overflow: "hidden" }}>
      <div id="yt-bg-player" />
    </div>
  );
}

/* ─────────────────────────────────────────
   ROOT
───────────────────────────────────────── */
export default function App() {
  const tvYTId = "xm9_4OHl2XQ";
  const musicYTId = "DqMDi4A7Ve8";

  const serviceVideos1 = LOCAL_VIDEOS.slice(0, 8);
  const serviceVideos2 = LOCAL_VIDEOS.slice(4, 12);

  return (
    <div style={{
      fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display','Helvetica Neue',sans-serif",
      minHeight: "100vh", background: "#000",
      width: "100%", overflowX: "hidden",textAlign: "left",
    }}>
      <BackgroundMusic />
      <GlobalNav />
      <div style={{ height: 58 }} />  {/* ← add this line */}
      <VideoBannerHero />
      <AboutSection />
      <div id="services" style={{ width: "100%" }}>
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <YTVideoBanner videoId={tvYTId} title="Video Reel 1" />
        </section>

        <YouTubeContentSection />

        <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <YTVideoBanner videoId={musicYTId} title="Video Reel 2" />
        </section>
      </div>

      <MyWorkSection />
      <ContactSection />
    </div>
  );
}
