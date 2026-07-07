import { useEffect, useState } from "react";
import "../styles/Navbar.css";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function Navbar({ theme, setTheme }) {
  const [sticky, setSticky] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenu(false);

  return (
    <nav className={sticky ? "navbar active" : "navbar"}>

      {/* Logo */}

      <div className="logo">
        <span>YP</span>
      </div>

      {/* Navigation */}

      <ul className={menu ? "nav-links open" : "nav-links"}>

        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="#hackathons" onClick={closeMenu}>
            Hackathons
          </a>
        </li>

        <li>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
        </li>

        <li>
          <a href="#certifications" onClick={closeMenu}>
            Certificates
          </a>
        </li>

        <li>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>

      </ul>

      {/* Right Side */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >

        {/* Theme Toggle */}

        <div
          className="theme-toggle"
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </div>

        {/* Mobile Menu */}

        <div
          className="menu-btn"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <FaTimes /> : <FaBars />}
        </div>

      </div>

    </nav>
  );
}

export default Navbar;