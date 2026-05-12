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

/* ─────────────────────────────────────────
   CHAPTER NAV
───────────────────────────────────────── */
function ChapterNav() {
  const [active, setActive] = useState("my-work");
  const items = [
    { id: "my-work", label: "My Work" },
    { id: "youtube-section", label: "YouTube" },
    { id: "cinematic-product", label: "Cinematic" },
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
      style={{ position: "relative", background: "#000", overflow: "hidden", height: "clamp(260px,45vw,520px)", width: "100%" }}
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
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ background: badgeBg || "#333", color: "white", fontSize: 11, padding: "3px 12px", borderRadius: 4, fontWeight: 700, fontFamily: "-apple-system,sans-serif" }}>{badge}</span>
          <h3 style={{ color: "white", fontSize: "clamp(16px,3vw,20px)", fontWeight: 600, margin: 0, fontFamily: "-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif", letterSpacing: "-0.018em" }}>{title}</h3>
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

      {/* ── YouTube Section ───────────────────────────────────────────────── */}
      <div id="youtube-section" style={{ borderTop: "3px solid rgba(255,255,255,0.06)", marginTop: 0, width: "100%" }}>
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
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              {["4 projects", "YouTube", "Product Films"].map(tag => (
                <span key={tag} style={{
                  background: "rgba(247,201,72,0.1)", border: "1px solid rgba(247,201,72,0.25)",
                  color: "rgba(247,201,72,0.9)", fontSize: 13, padding: "6px 18px", borderRadius: 20,
                  fontFamily: "-apple-system,sans-serif",
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Cinematic thumbnail grid */}
        <div style={{ background: "#080600", padding: "20px clamp(16px,4vw,40px) 48px", overflowX: "auto", scrollbarWidth: "none", width: "100%", boxSizing: "border-box" }}>
          <div style={{ display: "flex", gap: 14, minWidth: "max-content" }}>
            {cinematicVideos.map((v, i) => (
              <a key={i} href={`https://youtu.be/${v.ytId}`} target="_blank" rel="noopener noreferrer"
                style={{ flexShrink: 0, width: "clamp(200px,28vw,300px)", textDecoration: "none" }}>
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
                <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                  {cat.tags.map(tag => (
                    <span key={tag} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.75)", fontSize: 13, padding: "6px 18px", borderRadius: 20, fontFamily: "-apple-system,sans-serif" }}>{tag}</span>
                  ))}
                </div>
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
      width: "100%", overflowX: "hidden",
    }}>
      <BackgroundMusic />
      <GlobalNav />
      <ChapterNav />
      <HeroSection />

      <div id="services" style={{ width: "100%" }}>
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <YTVideoBanner videoId={tvYTId} title="Video Reel 1" />
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

      <MyWorkSection />
      <ContactSection />
    </div>
  );
}