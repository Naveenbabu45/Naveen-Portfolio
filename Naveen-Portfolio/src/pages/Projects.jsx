import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "🤖 RecoverX – AI Revenue Recovery Agent",
    desc: "AI-powered revenue recovery agent built for the Razorpay AI Buildathon 2026. It evaluates failed payments, estimates the success probability and Expected Value of recovery actions, applies guardrails, and records every decision in an auditable trail.",
    ss: "/recoverx.png",
    tech: ["Python", "FastAPI", "Machine Learning", "AI"],
    live: "https://recoverx-dashboard.onrender.com/",
    code: "https://github.com/Naveenbabu45/recoverx",
    result: "₹54.7L recovered • +57.9% uplift • 65.8% recovery rate",
  },

  {
    title: "📈 Stock Market Dashboard",
    desc: "Interactive stock market dashboard built with React and Vite. It supports stock search, API-based market data, interactive charts, pagination, grid/table views, reusable components, and a responsive interface.",
    ss: "/stock-market.png",
    tech: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "Axios",
      "Chart.js",
    ],
    live: "https://sb-stocks-frontend.onrender.com/",
    code: "https://github.com/Naveenbabu45/STOCK-TRADING-APP",
  },

  {
    title: "🎓 CampusFlow – Student Complaint Management",
    desc: "Full-stack campus complaint management system designed to simplify reporting and managing campus-related complaints. Students can register, log in securely, raise and track complaints, and manage their profiles. Administrators can manage complaints, update statuses, and track resolution through a dedicated dashboard.",
    ss: "/campusflow.png",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "Tailwind CSS",
    ],
    live: "https://campusflow-frontend-green.vercel.app/",
    code: "https://github.com/Naveenbabu45/CampusFlow",
  },

  {
    title: "🤝 Student Union for Nation (SUN)",
    desc: "Responsive NGO website featuring Home, About, Programs, Volunteer Registration, Gallery, and Contact sections with interactive forms, gallery filtering, scroll animations, responsive navigation, and mobile-friendly design.",
    ss: "/sun.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://sun-ngo-website.vercel.app/",
    code: "https://github.com/Naveenbabu45/SUN-NGO-Website",
  },
];

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div
        className="card"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: 16,
          padding: 30,
        }}
      >
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>

        <p className="text-gray-400 mb-10">
          A collection of projects built across AI, full-stack development,
          data visualization, and web development.
        </p>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                delay: idx * 0.15,
              }}
              whileHover={{
                scale: 1.03,
              }}
              viewport={{ once: true }}
              style={{
                background:
                  "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))",
                border: "1px solid rgba(0,255,255,0.1)",
                borderRadius: 16,
                padding: 16,
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(0,255,255,0.08)",
              }}
            >
              {/* Project Image */}
              <motion.div
                className="ss"
                whileHover={{ scale: 1.05 }}
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: 12,
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </motion.div>

              {/* Project Content */}
              <div style={{ marginTop: 12 }}>
                <h3
                  style={{
                    fontSize: 18,
                    color: "#0ea5e9",
                    marginBottom: 6,
                  }}
                >
                  {p.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    color: "#bbb",
                    marginBottom: 8,
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>

                {/* RecoverX Results */}
                {p.result && (
                  <div
                    style={{
                      marginBottom: 10,
                      padding: "8px 10px",
                      borderRadius: 8,
                      background: "rgba(0,255,255,0.05)",
                      border: "1px solid rgba(0,255,255,0.12)",
                      color: "#67e8f9",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    📊 {p.result}
                  </div>
                )}

                {/* Tech Stack */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 10,
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "rgba(0,255,255,0.05)",
                        border: "1px solid rgba(0,255,255,0.1)",
                        padding: "3px 8px",
                        borderRadius: 6,
                        fontSize: 12,
                        color: "#aaf",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 10,
                  }}
                >
                  {/* Code Button */}
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      background: "rgba(255,255,255,0.05)",
                      color: "#0ea5e9",
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      border: "1px solid rgba(0,255,255,0.1)",
                      textDecoration: "none",
                    }}
                  >
                    <Github size={14} />
                    Code
                  </motion.a>

                  {/* Live Button */}
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      background:
                        "linear-gradient(90deg, #06b6d4, #0891b2)",
                      color: "#fff",
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    <ExternalLink size={14} />
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}