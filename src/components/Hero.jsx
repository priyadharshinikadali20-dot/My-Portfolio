import { TypeAnimation } from "react-type-animation";
import { FaEye } from "react-icons/fa";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaRocket,
} from "react-icons/fa";

import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      {/* LEFT SIDE */}

      <div className="hero-left">

        <div className="greeting">
          👋 Hello, I'm
        </div>

        <h1>
          Yamuna <br />
          <span>Priyadharshini Kadali</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "Python Developer",
            2000,
            "SQL Developer",
            2000,
            "Software Engineer",
            2000,
          ]}
          wrapper="h2"
          repeat={Infinity}
        />

        <p className="description">
          Passionate BCA graduate and aspiring Full Stack Developer
          skilled in React.js, Node.js, Python, SQL and Azure.
          I enjoy building modern, responsive applications with
          beautiful UI and clean code.
        </p>

        <div className="status">
          Available for Internship
        </div>

        <div className="hero-buttons">

       <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="resume-btn"
>
  <FaEye />
  View Resume
</a>

          <a
            href="#projects"
            className="project-btn"
          >
            <FaRocket />
            View Projects
          </a>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="hero-right">

        <div className="profile-circle">

          <div className="orbit orbit1"></div>
          <div className="orbit orbit2"></div>

          <div className="profile-content">
            YP
          </div>

        </div>

      </div>

      {/* SOCIAL ICONS */}

      <div className="social-bar">

        <a
          href="https://github.com/priyadharshinikadali20-dot"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/yamuna-priyadharshini-kadali/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:priyadharshinikadali20@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      {/* TECH STACK */}

      <div className="tech-stack">

        <div className="tech-item">⚛ React</div>

        <div className="tech-item">🟢 Node.js</div>

        <div className="tech-item">🐍 Python</div>

        <div className="tech-item">🟨 JavaScript</div>

        <div className="tech-item">🗄 SQL</div>

        <div className="tech-item">☁ Azure</div>

      </div>

    </section>
  );
}

export default Hero;