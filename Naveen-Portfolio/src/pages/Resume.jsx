import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const skills = [
    "Java",
    "Python",
    "C",
    "C++",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "SQL",
    "MongoDB",
    "DSA",
    "OOP",
    "DBMS",
    "Git",
    "GitHub",
    "VS Code",
    "Jupyter Notebook",
  ];

  const projects = [
    {
      title: "RecoverX – AI Revenue Recovery Agent",
      tech: "Python • FastAPI • Machine Learning • AI",
      description:
        "AI-powered revenue recovery agent built for the Razorpay AI Buildathon 2026. Evaluates failed payments, estimates success probability and Expected Value, applies guardrails, and maintains an auditable recovery trail.",
      result:
        "₹54.7L recovered • +57.9% uplift • 65.8% recovery rate",
    },

    {
      title: "SB Stocks – Stock Trading Platform",
      tech: "React • Vite • JavaScript • Tailwind CSS • Express • MongoDB",
      description:
        "Full-stack paper trading platform with authentication, stock search, interactive charts, portfolio tracking, order and transaction history, pagination, grid/table views, and an admin dashboard.",
    },

    {
      title: "CampusFlow – Student Complaint Management System",
      tech: "React • Node.js • Express.js • MongoDB • JWT • Tailwind CSS",
      description:
        "Full-stack complaint management system with dedicated Student and Admin modules. Students can submit and track complaints while administrators can manage complaints through role-based authentication and REST APIs.",
    },

    {
      title: "Student Union for Nation (SUN) NGO Website",
      tech: "HTML5 • CSS3 • JavaScript",
      description:
        "Responsive NGO website featuring Home, About, Programs, Volunteer Registration, Gallery, and Contact sections with interactive forms, gallery filtering, navigation, and scroll animations.",
    },
  ];

  const internships = [
    "ServiceNow Virtual Internship – SmartBridge (AICTE) • 4 Weeks",
    "Microsoft Azure Virtual Internship – Microsoft Elevate (AICTE) • 4 Weeks",
    "AI & ML Internship – SmartBridge (APSCHE) • 2 Months",
    "Artificial Intelligence Internship – Edzeeta Pvt. Ltd. • 3 Months",
    "Java Development Internship – Navodita Infotech • 1 Month",
  ];

  const certifications = [
    "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    "Programming in Human-Computer Interaction – NPTEL IIT Kharagpur",
    "TCS iON Career Edge – Young Professional",
    "AWS Solutions Architecture Job Simulation – Forage",
    "Microsoft Azure Virtual Program",
    "ServiceNow Virtual Program",
  ];

  return (
    <section
      id="resume"
      className="container"
      style={{
        padding: "60px 0",
      }}
    >
      <motion.div
        className="card"
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow:
            "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        {/* =========================
            TITLE
        ========================= */}

        <motion.h2
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          style={{
            fontSize: 28,
            color: "#00b4ff",
            marginBottom: 12,
          }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          style={{
            color: "#aaa",
            marginBottom: 25,
          }}
        >
          A quick glance at my education, skills, projects, and
          experience.
        </motion.p>

        {/* =========================
            PROFILE HEADER
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 25,
            background:
              "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 24,
                color: "#00b4ff",
                marginBottom: 6,
              }}
            >
              👨‍💻 KOMMAVARAPU NAVEEN BABU
            </h3>

            <p
              style={{
                margin: "6px 0",
                fontSize: 15,
                color: "#ccc",
              }}
            >
              B.Tech Computer Science & Engineering
            </p>

            <p
              style={{
                margin: "4px 0",
                fontSize: 14,
                color: "#aaa",
              }}
            >
              Kallam Haranadhareddy Institute of Technology
            </p>

            <p
              style={{
                margin: "4px 0",
                fontSize: 14,
                color: "#aaa",
              }}
            >
              Guntur, Andhra Pradesh • 2023–2027
            </p>

            <p
              style={{
                margin: "4px 0",
                fontSize: 14,
                color: "#aaa",
              }}
            >
              📧 naveennaveen78811@gmail.com
            </p>

            <p
              style={{
                margin: "4px 0",
                fontSize: 14,
                color: "#aaa",
              }}
            >
              📞 +91 7995095002
            </p>
          </div>

          {/* Summary */}

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            style={{
              background:
                "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "16px 20px",
              border:
                "1px solid rgba(0,180,255,0.2)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.7,
            }}
          >
            <strong
              style={{
                color: "#00b4ff",
              }}
            >
              Professional Summary
            </strong>

            <p
              style={{
                marginTop: 8,
                color: "#ccc",
              }}
            >
              Final-year Computer Science student with
              hands-on experience in software development,
              full-stack applications, AI/ML projects, and
              database-driven systems. Skilled in Java,
              Python, React, JavaScript, SQL, MongoDB, and
              core computer science concepts. Passionate
              about building practical solutions and
              continuously improving through projects and
              real-world learning.
            </p>
          </motion.div>
        </motion.div>

        {/* =========================
            EDUCATION
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
          }}
          style={{
            marginTop: 40,
            border:
              "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background:
              "rgba(255,255,255,0.03)",
          }}
        >
          <h4
            style={{
              fontSize: 20,
              color: "#00b4ff",
              marginBottom: 12,
            }}
          >
            🎓 Education
          </h4>

          <div
            style={{
              lineHeight: 1.8,
            }}
          >
            <strong>
              B.Tech – Computer Science & Engineering
            </strong>

            <p
              style={{
                margin: "4px 0",
                color: "#ccc",
              }}
            >
              Kallam Haranadhareddy Institute of Technology
              • 2023–2027
            </p>

            <span
              style={{
                color: "#aaa",
              }}
            >
              CGPA: 8.5
            </span>
          </div>
        </motion.div>

        {/* =========================
            PROJECTS
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
          }}
          style={{
            marginTop: 40,
          }}
        >
          <h4
            style={{
              fontSize: 20,
              color: "#00b4ff",
              marginBottom: 15,
            }}
          >
            💼 Projects
          </h4>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 0 18px rgba(0,180,255,0.15)",
                }}
                style={{
                  background:
                    "rgba(255,255,255,0.03)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: 18,
                }}
              >
                <h5
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    marginBottom: 8,
                  }}
                >
                  {index + 1}. {project.title}
                </h5>

                <p
                  style={{
                    color: "#00b4ff",
                    fontSize: 12,
                    marginBottom: 10,
                  }}
                >
                  {project.tech}
                </p>

                <p
                  style={{
                    color: "#bbb",
                    fontSize: 13,
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </p>

                {project.result && (
                  <p
                    style={{
                      color: "#00d4ff",
                      fontSize: 12,
                      marginTop: 10,
                      fontWeight: 600,
                    }}
                  >
                    📊 {project.result}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =========================
            SKILLS
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
          }}
          style={{
            marginTop: 40,
          }}
        >
          <h4
            style={{
              fontSize: 20,
              color: "#00b4ff",
              marginBottom: 12,
            }}
          >
            ⚙️ Skills
          </h4>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  scale: 1.08,
                  backgroundColor:
                    "rgba(0,180,255,0.2)",
                }}
                style={{
                  background:
                    "rgba(255,255,255,0.05)",
                  border:
                    "1px solid rgba(255,255,255,0.06)",
                  padding: "7px 13px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                  cursor: "default",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* =========================
            INTERNSHIPS
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.1,
          }}
          style={{
            marginTop: 40,
            border:
              "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background:
              "rgba(255,255,255,0.03)",
          }}
        >
          <h4
            style={{
              fontSize: 20,
              color: "#00b4ff",
              marginBottom: 12,
            }}
          >
            💼 Internships
          </h4>

          <ul
            style={{
              margin: 0,
              paddingLeft: 20,
              color: "#ccc",
              lineHeight: 1.9,
            }}
          >
            {internships.map((internship) => (
              <li key={internship}>
                {internship}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* =========================
            CERTIFICATIONS
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
          }}
          style={{
            marginTop: 40,
            border:
              "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background:
              "rgba(255,255,255,0.03)",
          }}
        >
          <h4
            style={{
              fontSize: 20,
              color: "#00b4ff",
              marginBottom: 12,
            }}
          >
            🏅 Certifications
          </h4>

          <ul
            style={{
              margin: 0,
              paddingLeft: 20,
              color: "#ccc",
              lineHeight: 1.9,
            }}
          >
            {certifications.map((certification) => (
              <li key={certification}>
                {certification}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* =========================
            ACHIEVEMENTS
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.3,
          }}
          style={{
            marginTop: 40,
            border:
              "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background:
              "rgba(255,255,255,0.03)",
          }}
        >
          <h4
            style={{
              fontSize: 20,
              color: "#00b4ff",
              marginBottom: 12,
            }}
          >
            🏆 Achievements
          </h4>

          <ul
            style={{
              margin: 0,
              paddingLeft: 20,
              color: "#ccc",
              lineHeight: 1.9,
            }}
          >
            <li>
              Ignite India 5.0 – Wadhwani Foundation
            </li>

            <li>
              Certificate of Appreciation – Campus
              Ambassador at Edzeeta
            </li>

            <li>
              AI Anantapur Police Hackathon 2026
            </li>
          </ul>
        </motion.div>

        {/* =========================
            LINKS
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.4,
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href="https://github.com/Naveenbabu45"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.1,
              color: "#00b4ff",
            }}
            style={{
              color: "#ccc",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            💻 GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/kommavarapunaveenbabu/"
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.1,
              color: "#00b4ff",
            }}
            style={{
              color: "#ccc",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            💼 LinkedIn
          </motion.a>

          <motion.a
            href="mailto:naveennaveen78811@gmail.com"
            whileHover={{
              scale: 1.1,
              color: "#00b4ff",
            }}
            style={{
              color: "#ccc",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            📧 Email
          </motion.a>
        </motion.div>

        {/* =========================
            RESUME PDF
        ========================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
          }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border:
              "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Naveen Babu Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* =========================
            DOWNLOAD BUTTON
        ========================= */}

        <motion.a
          href="/resume.pdf"
          download="Naveen-Babu-Resume.pdf"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background:
              "linear-gradient(90deg, #0077ff, #00b4ff)",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}