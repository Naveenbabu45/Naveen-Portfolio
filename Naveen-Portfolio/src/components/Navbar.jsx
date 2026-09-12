import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Gallery", id: "gallery" },
  { label: "Skills", id: "skills" },
  { label: "Certificates", id: "certificates" },
  { label: "Blog", id: "blog" },
  { label: "Resume", id: "resume" },
  { label: "About Me", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navRef = useRef(null);
  const linksRef = useRef(null);

  /* =========================
     CHECK NAVBAR OVERFLOW
  ========================= */

  const checkOverflow = () => {
    if (!navRef.current || !linksRef.current) return;

    setShowButton(
      linksRef.current.scrollWidth > navRef.current.offsetWidth
    );
  };

  useEffect(() => {
    checkOverflow();

    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  /* =========================
     ACTIVE SECTION DETECTION
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = navRef.current?.offsetHeight || 80;

      const sections = links
        .map((link) => ({
          id: link.id,
          element: document.getElementById(link.id),
        }))
        .filter((item) => item.element);

      if (sections.length === 0) return;

      let currentSection = "home";
      let closestDistance = Infinity;

      sections.forEach(({ id, element }) => {
        const rect = element.getBoundingClientRect();

        /*
          Distance from the top of the viewport
          after accounting for navbar height.
        */
        const distance = Math.abs(rect.top - navHeight);

        /*
          Section must be visible / already passed.
        */
        if (rect.top <= navHeight + 150 && distance < closestDistance) {
          closestDistance = distance;
          currentSection = id;
        }
      });

      /*
        At very top always keep Home active.
      */
      if (window.scrollY < 100) {
        currentSection = "home";
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /* =========================
     SCROLL TO SECTION
  ========================= */

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    setActiveSection(id);
    setIsOpen(false);

    const navHeight = navRef.current?.offsetHeight || 80;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <nav
        ref={navRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          fontFamily: "inherit",
        }}
      >
        {/* =========================
            LOGO
        ========================= */}

        <button
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "none",
            border: "none",
            color: "inherit",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <motion.div
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
            style={{
              fontWeight: "bold",
              fontSize: "1.4rem",
              color: "var(--accent)",
            }}
          >
            NB
          </motion.div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: 14,
                color: "#fff",
              }}
            >
              Naveen Babu
            </h1>

            <div
              style={{
                fontSize: 12,
                color: "var(--muted)",
              }}
            >
              Software Developer
            </div>
          </div>
        </button>

        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}

        <div
          ref={linksRef}
          style={{
            display: showButton ? "none" : "flex",
            justifyContent: "center",
            gap: "2rem",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                position: "relative",
                fontSize: "0.95rem",
                textDecoration: "none",
                color:
                  activeSection === link.id
                    ? "var(--accent)"
                    : "white",
                fontWeight: 500,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  color: "var(--accent)",
                  textShadow: "0 0 8px var(--accent)",
                }}
                transition={{
                  duration: 0.3,
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>{link.label}</span>

                {activeSection === link.id && (
                  <motion.div
                    layoutId="underline"
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    style={{
                      width: "70%",
                      height: "2px",
                      marginTop: "4px",
                      borderRadius: "1px",
                      backgroundColor:
                        "var(--accent)",
                      boxShadow:
                        "0 0 6px var(--accent)",
                    }}
                  />
                )}
              </motion.div>
            </button>
          ))}
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}

        {showButton && (
          <div className="mobile-btn">
            <button
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "1.8rem",
                cursor: "pointer",
                zIndex: 10000,
              }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        )}
      </nav>

      {/* =========================
          MOBILE NAVIGATION
      ========================= */}

      <AnimatePresence>
        {isOpen && showButton && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "4rem",
              overflowY: "auto",
              zIndex: 9999,
            }}
          >
            {/* Close Button */}

            <button
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                fontSize: "2rem",
                color: "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              ✕
            </button>

            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{
                  color:
                    activeSection === link.id
                      ? "var(--accent)"
                      : "#fff",
                  background: "none",
                  border: "none",
                  padding: "1rem 0",
                  width: "100%",
                  textAlign: "center",
                  fontSize: 16,
                  cursor: "pointer",
                  borderBottom:
                    "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}