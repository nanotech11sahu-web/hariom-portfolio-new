import { useState, useEffect, useRef } from "react";

/* ── LOCAL ASSETS ── */
const LOCAL_VIDEOS = [
  "C3pdCC9toqy", "DAIrnhCtJPd", "DAQaGDJN9nx", "DIi9TV3NrmM",
  "DQeG5Igj8IS", "DRmPikcAkbs", "DVOCGZkgnIq", "DOqVpxbj4I9",
  "DWGs0MYj4dK", "DWoBhATE2bj", "DT7imY4DdIE", "DObCjgBAh3z",
  "DPoBtKiAhJT", "C7lx5QGPdMf", "C0OgyLTpGj7", "DOtFMlKDziB",
  "DO0vfz3j-hV", "DWYnEHEjwX2", "DOtFMIKDziB", "DK121mNPV4ZJ",
  "DNSzQQkPV1w", "DNsQf7J3kay", "DWoBhATE2bj", "DobCjgBAh3z",
].map(code => ({
  src: `/assets/Video by tractorgyan [${code}].mp4`,
  code,
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
      position: "sticky", top: 0, zIndex: 9999,
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
        <div style={{ display: "flex", alignItems: "center", gap: 22, "@media(max-width:768px)": { display: "none" } }} className="desktop-nav">
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

/* ─────────────────────────────────────────
   CHAPTER NAV
───────────────────────────────────────── */
function ChapterNav() {
  const [active, setActive] = useState("my-work");
  const items = [
    { id: "my-work", label: "My Work" },
    { id: "youtube-section", label: "YouTube" },
    { id: "brand-video", label: "Brand Videos" },
    { id: "end-to-end", label: "End-to-End" },
    { id: "ai-video", label: "AI Videos" },
    { id: "instagram-trend", label: "Instagram Reels" },
    { id: "contact-section", label: "Contact" },
  ];
  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div style={{
      background: "#1d1d1f",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      position: "sticky", top: 58, zIndex: 998,
      width: "100%", boxSizing: "border-box",
    }}>
      <div style={{ width: "100%", padding: "0 12px", overflowX: "auto", scrollbarWidth: "none", boxSizing: "border-box" }}>
        <div style={{ display: "flex" }}>
          {items.map(item => (
            <button key={item.id} onClick={() => handleClick(item.id)}
              style={{
                padding: "13px 16px", fontSize: 12, background: "transparent",
                border: "none", cursor: "pointer", whiteSpace: "nowrap",
                color: active === item.id ? "white" : "rgba(255,255,255,0.55)",
                borderBottom: active === item.id ? "2px solid #f7c948" : "2px solid transparent",
                fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif",
                letterSpacing: "-0.01em", transition: "color 0.2s",
              }}
            >{item.label}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   YT VIDEO BANNER
───────────────────────────────────────── */
function YTVideoBanner({ videoId, title }) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1`;
  return (
    <section style={{ position: "relative", background: "#000", overflow: "hidden", height: "clamp(260px,45vw,520px)", width: "100%" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <iframe
          src={embedUrl}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%", height: "100%",
            minWidth: "177.78vh",
            minHeight: "56.25vw",
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
function LocalVideoShort({ src }) {
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

  return (
    <div
      ref={containerRef}
      style={{ flexShrink: 0, cursor: "pointer", position: "relative" }}
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
        }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="black" style={{ marginLeft: 2 }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "8px 10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#28cd41", boxShadow: "0 0 6px #28cd41" }} />
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 10, fontFamily: "-apple-system,sans-serif" }}>LIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SHORTS STRIP WITH SHOW MORE
───────────────────────────────────────── */
function ShortsStrip({ title, badge, badgeBg, videos, initialCount = 6 }) {
  const [showAll, setShowAll] = useState(false);
  const stripRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const displayedVideos = showAll ? videos : videos.slice(0, initialCount);

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
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ background: badgeBg || "#333", color: "white", fontSize: 11, padding: "3px 12px", borderRadius: 4, fontWeight: 700, fontFamily: "-apple-system,sans-serif" }}>{badge}</span>
          <h3 style={{ color: "white", fontSize: "clamp(16px,3vw,20px)", fontWeight: 600, margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif", letterSpacing: "-0.018em" }}>{title}</h3>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {videos.length > initialCount && (
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                background: "rgba(247,201,72,0.15)", border: "1px solid rgba(247,201,72,0.4)",
                color: "#f7c948", fontSize: 12, padding: "6px 16px", borderRadius: 20,
                cursor: "pointer", fontFamily: "-apple-system,sans-serif", fontWeight: 600,
                transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(247,201,72,0.25)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(247,201,72,0.15)"}
            >
              {showAll ? "Show Less" : `+${videos.length - initialCount} More`}
            </button>
          )}
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
          flexWrap: showAll ? "wrap" : "nowrap",
        }}
      >
        {displayedVideos.map((v, i) => (
          <div key={i} style={{ scrollSnapAlign: "start" }}>
            <LocalVideoShort src={v.src} />
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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact-section" style={{
      background: "linear-gradient(160deg,#050505 0%,#0f0f0f 100%)",
      padding: "clamp(60px,10vw,100px) clamp(20px,5vw,40px)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      width: "100%", boxSizing: "border-box",
    }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {/* Header */}
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
                  style={{
                    width: "100%", background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12,
                    padding: "14px 16px", color: "white", fontSize: 15,
                    fontFamily: "-apple-system,sans-serif", outline: "none",
                    boxSizing: "border-box", transition: "border-color 0.2s",
                  }}
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
                  style={{
                    width: "100%", background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12,
                    padding: "14px 16px", color: "white", fontSize: 15,
                    fontFamily: "-apple-system,sans-serif", outline: "none",
                    boxSizing: "border-box", transition: "border-color 0.2s",
                  }}
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
                style={{
                  width: "100%", background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12,
                  padding: "14px 16px", color: "white", fontSize: 15,
                  fontFamily: "-apple-system,sans-serif", outline: "none",
                  boxSizing: "border-box", transition: "border-color 0.2s",
                }}
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
                style={{
                  width: "100%", background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12,
                  padding: "14px 16px", color: "white", fontSize: 15,
                  fontFamily: "-apple-system,sans-serif", outline: "none",
                  boxSizing: "border-box", resize: "vertical", minHeight: 140,
                  transition: "border-color 0.2s",
                }}
                onFocus={e => e.target.style.borderColor = "rgba(247,201,72,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
              />
            </div>

            <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <button
                type="submit" disabled={sending}
                style={{
                  background: sending ? "rgba(247,201,72,0.6)" : "#f7c948",
                  color: "#000", border: "none", borderRadius: 24,
                  padding: "14px 36px", fontSize: 15, fontWeight: 700,
                  cursor: sending ? "not-allowed" : "pointer",
                  fontFamily: "-apple-system,sans-serif",
                  transition: "opacity 0.2s",
                }}
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
function MyWorkSection() {
  const allVideos = LOCAL_VIDEOS.slice(0, 24);
  const brandVideos = allVideos.slice(0, 10);
  const endToEnd = allVideos.slice(10, 14);
  const aiVideos = allVideos.slice(14, 18);
  const trendVideos = allVideos.slice(18, 24);

  const ytVideos = [
    { ytId: "xm9_4OHl2XQ", title: "Top 10 Tractors 2023" },
    { ytId: "DqMDi4A7Ve8", title: "2026 में आएंगे ये ट्रैक्टर" },
    { ytId: "8QkWeInuFPo", title: "5 ट्रैक्टर कभी ना खरीदें" },
    { ytId: "PGjTr-XLTm0", title: "Mahindra 575 DI YUVO 4WD" },
    { ytId: "_4OYQjTEfcc", title: "New Holland 3600 TX Super" },
    { ytId: "KeKppOWl5tI", title: "YouTube Video 5" },
  ];

  const categories = [
    {
      id: "brand-video",
      badge: "Brand Video",
      badgeBg: "linear-gradient(90deg,#1c1c3a,#2c2c5a)",
      title: "Brand‑Focused Video",
      desc: "Complete production pipeline: concept development, storytelling, direction, and editing.",
      gradient: "linear-gradient(160deg,#0d0d1a 0%,#1a1a3a 45%,#0a0a12 100%)",
      videos: brandVideos,
      tags: ["10 projects", "Instagram Reels"],
    },
    {
      id: "end-to-end",
      badge: "End-to-End",
      badgeBg: "linear-gradient(90deg,#3a1500,#5a2000)",
      title: "End-to-End Production",
      desc: "Scripting, direction, anchoring, editing, and thumbnail design.",
      gradient: "linear-gradient(160deg,#1a0800 0%,#3d1500 45%,#0d0500 100%)",
      videos: endToEnd,
      tags: ["4 projects", "Full Pipeline"],
    },
    {
      id: "ai-video",
      badge: "AI Video",
      badgeBg: "linear-gradient(90deg,#0a1a3a,#1a0a3a)",
      title: "AI‑Generated Video",
      desc: "Creative direction meets emerging AI technology for visually unique results.",
      gradient: "linear-gradient(160deg,#050d1a 0%,#0f1a3a 45%,#080510 100%)",
      videos: aiVideos,
      tags: ["4 projects", "AI Tools"],
    },
    {
      id: "instagram-trend",
      badge: "Instagram Trends",
      badgeBg: "linear-gradient(90deg,#833ab4,#fd1d1d,#fcb045)",
      title: "Instagram Trend Videos",
      desc: "Viral concepts with original storytelling — scripting, direction, editing end-to-end.",
      gradient: "linear-gradient(160deg,#1a0a2a 0%,#2d0a1a 45%,#0d0510 100%)",
      videos: trendVideos,
      tags: ["6 projects", "Reels"],
    },
  ];

  const SECTION_DIVIDER = (
    <div style={{ height: 2, background: "linear-gradient(90deg, transparent, rgba(247,201,72,0.3), transparent)", margin: "0" }} />
  );

  return (
    <section id="my-work" style={{ background: "#000", width: "100%" }}>

      {/* My Work Hero */}
      {/* <div style={{
        background: "linear-gradient(160deg,#0a0a0a 0%,#141414 100%)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "clamp(60px,10vw,80px) 40px clamp(40px,7vw,60px)",
        textAlign: "center",
        width: "100%", boxSizing: "border-box",
      }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 20, padding: "6px 16px" }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28cd41", boxShadow: "0 0 8px #28cd41" }} />
          <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, fontFamily: "-apple-system,sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}>Portfolio</span>
        </div>
        <h2 style={{
          color: "white", fontSize: "clamp(32px,6vw,64px)", fontWeight: 700,
          margin: "0 0 20px", letterSpacing: "-0.03em",
          fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif", lineHeight: 1.04,
        }}>My Work</h2>
        <p style={{
          color: "rgba(255,255,255,0.52)", fontSize: "clamp(15px,2.5vw,18px)", lineHeight: 1.65,
          margin: "0 auto", fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif",
          maxWidth: 600,
        }}>
          A curated collection of video production spanning brand storytelling, YouTube content strategy, AI-generated video, and viral Instagram reels.
        </p>
      </div> */}

      {/* YouTube Section */}
      <div id="youtube-section" style={{ borderTop: "3px solid rgba(255,255,255,0.06)", marginTop: 0, width: "100%" }}>
        <div style={{
          padding: "clamp(40px,7vw,56px) clamp(20px,5vw,40px) 28px",
          background: "linear-gradient(160deg,#1a0000 0%,#3d0000 45%,#0d0000 100%)",
          textAlign: "center",
          width: "100%", boxSizing: "border-box",
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

        {/* YouTube thumbnail grid */}
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

      {/* Category Sections — with bigger spacing between */}
      {categories.map((cat, idx) => (
        <div key={cat.id}>
          {/* Big visual divider between sections */}
          <div style={{ height: "clamp(32px,6vw,64px)", background: "#000" }} />

          <div id={cat.id} style={{ borderTop: "3px solid rgba(255,255,255,0.06)", width: "100%" }}>
            {/* Category Banner */}
            <div style={{
              position: "relative",
              background: cat.gradient,
              padding: "clamp(40px,7vw,56px) clamp(20px,5vw,40px) clamp(32px,6vw,44px)",
              textAlign: "center",
              width: "100%", boxSizing: "border-box",
            }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <span style={{
                  background: cat.badgeBg, color: "white", fontSize: 11,
                  padding: "3px 14px", borderRadius: 4, fontWeight: 700,
                  fontFamily: "-apple-system,sans-serif", display: "inline-block", marginBottom: 16,
                }}>{cat.badge}</span>
                <h3 style={{
                  color: "white", fontSize: "clamp(22px,4vw,44px)", fontWeight: 700,
                  margin: "0 0 14px", letterSpacing: "-0.025em",
                  fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif", lineHeight: 1.08,
                }}>{cat.title}</h3>
                <p style={{
                  color: "rgba(255,255,255,0.72)", fontSize: "clamp(14px,2.2vw,17px)", lineHeight: 1.6,
                  margin: "0 auto 26px",
                  fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Text',sans-serif",
                  maxWidth: 520,
                }}>{cat.desc}</p>
                <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                  {cat.tags.map(tag => (
                    <span key={tag} style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      color: "rgba(255,255,255,0.75)", fontSize: 13,
                      padding: "6px 18px", borderRadius: 20,
                      fontFamily: "-apple-system,sans-serif",
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Video shorts strip */}
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

      {/* Bottom spacing */}
      <div style={{ height: "clamp(40px,7vw,72px)", background: "#000" }} />
    </section>
  );
}
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

  // Use LOCAL_VIDEOS for the service sections instead of fake cards
  const serviceVideos1 = LOCAL_VIDEOS.slice(0, 6);
  const serviceVideos2 = LOCAL_VIDEOS.slice(6, 12);

  return (
    <div style={{
      fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display','Helvetica Neue',sans-serif",
      minHeight: "100vh", background: "#000",
      width: "100%", overflowX: "hidden",
    }}>
      <BackgroundMusic /> 
      <GlobalNav />
      <ChapterNav />
      <HeroSection />

      {/* Services — YouTube banner + real shorts */}
      <div id="services" style={{ width: "100%" }}>

        <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <YTVideoBanner videoId={tvYTId} title="Video Reel 1" />
          {/* Show actual shorts instead of fake cards */}
          <ShortsStrip
            title="Featured Shorts"
            badge="Featured"
            badgeBg="#333"
            videos={serviceVideos1}
            initialCount={6}
          />
        </section>

        <div style={{ height: "clamp(24px,5vw,48px)", background: "#000" }} />

        <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <YTVideoBanner videoId={musicYTId} title="Video Reel 2" />
          <ShortsStrip
            title="More Content"
            badge="Latest"
            badgeBg="linear-gradient(90deg,#833ab4,#fd1d1d,#fcb045)"
            videos={serviceVideos2}
            initialCount={6}
          />
        </section>
      </div>

      {/* My Work */}
      <MyWorkSection />

      {/* Contact */}
      <ContactSection />
    </div>
  );
}
