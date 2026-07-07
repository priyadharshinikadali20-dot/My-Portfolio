import "../styles/Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        <h2>Yamuna Priyadharshini</h2>
        <span>Full Stack Developer</span>
      </div>

      <p className="footer-text">
        Passionate about building modern, responsive and scalable
        web applications with React, Node.js, Python and Microsoft Azure.
      </p>

      <div className="footer-social">

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

      </div>

      <a href="#home" className="scroll-top">

        <FaArrowUp />

      </a>

      <div className="footer-line"></div>

      <p className="copyright">

        © 2026 Yamuna Priyadharshini. All Rights Reserved.

      </p>

      <p className="made-with">

        Made with <FaHeart /> using React & Vite

      </p>

    </footer>
  );
}

export default Footer;