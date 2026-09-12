import React from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "5rem 1rem",
        boxSizing: "border-box",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1.5rem",
            background:
              "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* Introduction */}
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I’m <strong>Naveen Babu</strong> — a final-year{" "}
          <strong>Computer Science Engineering student</strong> passionate
          about software development, problem solving, and building
          real-world applications.
        </p>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.8)",
            marginBottom: "1rem",
          }}
        >
          I enjoy turning ideas into practical projects using technologies
          such as <strong>Java, Python, React, JavaScript, Node.js</strong>,
          databases, and modern web technologies. I have worked on projects
          including an AI-powered revenue recovery system, a stock trading
          application, and a student complaint management system.
        </p>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.8)",
          }}
        >
          I’m continuously improving my skills in{" "}
          <strong>Data Structures & Algorithms, OOP, DBMS</strong>, and
          full-stack development. My goal is to start my career as a software
          developer and contribute to impactful technology solutions.
        </p>

        {/* Quick Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            marginTop: "2.5rem",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "1.3rem",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <FaGraduationCap
              size={28}
              color="var(--accent)"
              style={{ marginBottom: "0.7rem" }}
            />
            <h4 style={{ color: "var(--accent)", marginBottom: "0.4rem" }}>
              Education
            </h4>
            <p style={{ color: "rgba(255,255,255,0.75)", margin: 0 }}>
              B.Tech CSE
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "1.3rem",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <FaCode
              size={26}
              color="var(--accent)"
              style={{ marginBottom: "0.7rem" }}
            />
            <h4 style={{ color: "var(--accent)", marginBottom: "0.4rem" }}>
              Programming
            </h4>
            <p style={{ color: "rgba(255,255,255,0.75)", margin: 0 }}>
              Java • Python • C • C++
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "1.3rem",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <FaLaptopCode
              size={26}
              color="var(--accent)"
              style={{ marginBottom: "0.7rem" }}
            />
            <h4 style={{ color: "var(--accent)", marginBottom: "0.4rem" }}>
              Development
            </h4>
            <p style={{ color: "rgba(255,255,255,0.75)", margin: 0 }}>
              React • Node.js • MongoDB
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          {/* B.Tech */}
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 25px rgba(0,255,200,0.15)",
            }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "14px",
              padding: "1.7rem 2rem",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 15px rgba(0,255,200,0.05)",
              display: "flex",
              alignItems: "center",
              gap: "1.3rem",
            }}
          >
            <FaUniversity size={42} color="var(--accent)" />

            <div>
              <h4
                style={{
                  color: "var(--accent)",
                  marginBottom: "0.5rem",
                  fontSize: "1.25rem",
                }}
              >
                B.Tech in Computer Science and Engineering
              </h4>

              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  marginBottom: "0.3rem",
                }}
              >
                <strong>
                  Kallam Haranadhareddy Institute of Technology
                </strong>
              </p>

              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "0.3rem",
                }}
              >
                Guntur, Andhra Pradesh
              </p>

              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "0.3rem",
                }}
              >
                2023 – 2027 | CGPA: 8.5
              </p>

              <p
                style={{
                  color: "rgba(255,255,255,0.65)",
                  margin: 0,
                }}
              >
                Final Year Student
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;