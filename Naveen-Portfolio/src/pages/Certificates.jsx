import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Certificates.css";

const CERTS = {
  tech: [
    {
      id: 1,
      title:
        "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      org: "Oracle",
      date: "2026",
      img: "/gallery/certificate1.png",
    },

    {
      id: 2,
      title: "Programming in Human-Computer Interaction",
      org: "NPTEL – IIT Kharagpur",
      date: "2025",
      img: "/gallery/certificate2.png",
    },

    {
      id: 3,
      title: "TCS iON Career Edge – Young Professional",
      org: "TCS iON",
      date: "2025",
      img: "/gallery/certificate3.png",
    },
  ],

  other: [
    {
      id: 4,
      title: "AWS Solutions Architecture Job Simulation",
      org: "AWS – Forage",
      date: "2025",
      img: "/gallery/certificate4.png",
    },

    {
      id: 5,
      title: "Microsoft Azure Virtual Program",
      org: "Microsoft Elevate",
      date: "2026",
      img: "/gallery/certificate5.png",
    },

    {
      id: 6,
      title: "ServiceNow Virtual Internship Program",
      org: "ServiceNow – SmartBridge",
      date: "2026",
      img: "/gallery/certificate6.png",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="certificates"
      className="container"
      style={{
        padding: "40px 0",
      }}
    >
      <div
        className="card"
        style={{
          background: "#111",
          borderRadius: 12,
          padding: 24,
        }}
      >
        {/* =========================
            TITLE
        ========================= */}

        <h2
          style={{
            fontSize: "1.8rem",
            color: "#fff",
            marginBottom: 4,
          }}
        >
          Certificates 🏅
        </h2>

        <p
          className="lead"
          style={{
            color: "#aaa",
          }}
        >
          Explore my certifications and professional learning achievements.
        </p>

        {/* =========================
            TABS
        ========================= */}

        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 20,
            flexWrap: "wrap",
          }}
        >
          {["tech", "other"].map((t) => (
            <motion.button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background:
                  tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </motion.button>
          ))}
        </div>

        {/* =========================
            CERTIFICATES GRID
        ========================= */}

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -25,
            }}
            transition={{
              duration: 0.4,
            }}
            style={{
              marginTop: 28,
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {CERTS[tab].map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow:
                    "0 0 18px rgba(0, 183, 255, 0.35)",
                }}
                style={{
                  background:
                    "linear-gradient(145deg, #1a1a1a, #111)",
                  border:
                    "1px solid rgba(0, 183, 255, 0.25)",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                  overflow: "hidden",
                }}
              >
                {/* Certificate Image */}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    cursor: "pointer",
                    overflow: "hidden",
                    borderRadius: 10,
                  }}
                  onClick={() =>
                    setSelectedCert(cert)
                  }
                >
                  <img
                    src={cert.img}
                    alt={cert.title}
                    style={{
                      width: "100%",
                      height: 180,
                      borderRadius: 10,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </motion.div>

                {/* Certificate Details */}

                <div
                  style={{
                    marginTop: 14,
                  }}
                >
                  <strong
                    style={{
                      fontSize: 16,
                      lineHeight: 1.4,
                      display: "block",
                    }}
                  >
                    {cert.title}
                  </strong>

                  <div
                    style={{
                      fontSize: 13,
                      color: "#bbb",
                      marginTop: 7,
                    }}
                  >
                    {cert.org} • {cert.date}
                  </div>
                </div>

                {/* View Button */}

                <div
                  style={{
                    marginTop: 14,
                  }}
                >
                  <button
                    className="btn"
                    onClick={() =>
                      setSelectedCert(cert)
                    }
                    style={{
                      background:
                        "linear-gradient(90deg, #0077ff, #00b7ff)",
                      border: "none",
                      color: "#fff",
                      borderRadius: 7,
                      padding: "7px 16px",
                      cursor: "pointer",
                      fontWeight: 500,
                    }}
                  >
                    View Certificate
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================
          FULLSCREEN CERTIFICATE
      ========================= */}

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedCert(null)
            }
            style={{
              position: "fixed",
              inset: 0,
              background:
                "rgba(0, 0, 0, 0.88)",
              backdropFilter: "blur(8px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              zIndex: 9999,
              cursor: "zoom-out",
            }}
          >
            {/* Close Button */}

            <button
              onClick={() =>
                setSelectedCert(null)
              }
              style={{
                position: "absolute",
                top: 20,
                right: 25,
                width: 42,
                height: 42,
                borderRadius: "50%",
                border:
                  "1px solid rgba(0, 183, 255, 0.5)",
                background:
                  "rgba(0, 0, 0, 0.7)",
                color: "#fff",
                fontSize: 24,
                cursor: "pointer",
                zIndex: 10000,
              }}
              aria-label="Close certificate"
            >
              ×
            </button>

            {/* Certificate Image */}

            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{
                scale: 0.85,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.85,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              style={{
                maxWidth: "92%",
                maxHeight: "88vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: 10,
                boxShadow:
                  "0 0 35px rgba(0, 183, 255, 0.3)",
                cursor: "default",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}