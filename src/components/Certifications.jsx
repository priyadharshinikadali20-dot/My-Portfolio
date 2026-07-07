import "../styles/Certifications.css";
import {
  FaCloud,
  FaRobot,
  FaDatabase,
  FaPython,
  FaCertificate,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Certifications() {
  const certificates = [
    {
      icon: <FaCloud />,
      title: "Deloitte Australia Technology Job Simulation",
      issuer: "Forage",
      year: "2026",
      color: "#38BDF8",
      link: "/Deloitte.pdf",
    },
    {
      icon: <FaRobot />,
      title: "IBM AI Fundamentals",
      issuer: "IBM SkillsBuild",
      year: "2026",
      color: "#A855F7",
      link: "/IBM-AI-Fundamentals.pdf",
    },
    {
      icon: <FaDatabase />,
      title: "Network security engineer",
      issuer: "Skill India",
      year: "2026",
      color: "#22C55E",
      link: "/Network-security-engineer-skill India certificate.pdf",
    },
    {
      icon: <FaDatabase />,
      title: "SQL (Intermediate)",
      issuer: "HackerRank",
      year: "2026",
      color: "#22C55E",
      link: "/SQL-Intermediate.pdf",
    },
    {
      icon: <FaPython />,
      title: "Python Essentials",
      issuer: "Cisco Networking Academy",
      year: "2026",
      color: "#FACC15",
      link: "/Python-Essentials.pdf",
    },
    {
      icon: <FaCertificate />,
      title: "Introduction to Generative AI",
      issuer: "Simplilearn",
      year: "2026",
      color: "#FB7185",
      link: "/Generative-AI.pdf",
    },
    {
      icon: <FaCertificate />,
      title: "Soft Skills Certification",
      issuer: "Pearson MePro",
      year: "2026",
      color: "#F97316",
      link: "/Pearson-MePro.pdf",
    },
  ];

  return (
    <section id="certifications" className="certifications">

      <div className="section-title">

        <span>ACHIEVEMENTS</span>

        <h2>
          Professional <span>Certifications</span>
        </h2>

        <p>
          Certifications that strengthen my knowledge in
          Full Stack Development, Cloud Computing,
          Artificial Intelligence and Programming.
        </p>

      </div>

      <div className="certificate-grid">

        {certificates.map((item, index) => (

          <div
            className="certificate-card"
            key={index}
          >

            <div
              className="certificate-icon"
              style={{
                color: item.color,
              }}
            >
              {item.icon}
            </div>

            <div className="certificate-year">
              {item.year}
            </div>

            <h3>{item.title}</h3>

            <p>{item.issuer}</p>

            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="certificate-btn"
            >
              <FaExternalLinkAlt />

              View Certificate

            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;