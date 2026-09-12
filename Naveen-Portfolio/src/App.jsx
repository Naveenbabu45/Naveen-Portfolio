import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Certificates from "./pages/Certificates";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SkillNetwork from "./pages/Skills";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section id="home" className="portfolio-section">
          <Home />
        </section>

        <section id="projects" className="portfolio-section">
          <Projects />
        </section>

        <section id="gallery" className="portfolio-section">
          <Gallery />
        </section>

        <section id="skills" className="portfolio-section">
          <SkillNetwork />
        </section>

        <section id="certificates" className="portfolio-section">
          <Certificates />
        </section>

        <section id="blog" className="portfolio-section">
          <Blog />
        </section>

        <section id="resume" className="portfolio-section">
          <Resume />
        </section>

        <section id="about" className="portfolio-section">
          <About />
        </section>

        <section id="contact" className="portfolio-section">
          <Contact />
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Naveen Babu — Built with React
      </footer>
    </div>
  );
}