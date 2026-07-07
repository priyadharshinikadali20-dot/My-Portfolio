import "../styles/Stats.css";
import {
  FaProjectDiagram,
  FaCertificate,
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaCode,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaCertificate />,
      number: "15+",
      title: "Certificates",
    },
    {
      icon: <FaProjectDiagram />,
      number: "2",
      title: "Projects",
    },
    {
      icon: <FaBriefcase />,
      number: "1",
      title: "Internship",
    },
    {
      icon: <FaTrophy />,
      number: "2",
      title: "Hackathons",
    },
    {
      icon: <FaGraduationCap />,
      number: "8.5",
      title: "CGPA",
    },
    {
      icon: <FaCode />,
      number: "100%",
      title: "Passion",
    },
  ];

  return (
    <section className="stats">

      <div className="section-title">

        <span>MY JOURNEY</span>

        <h2>
          Portfolio <span>Highlights</span>
        </h2>

      </div>

      <div className="stats-grid">

        {stats.map((item, index) => (

          <div className="stats-card" key={index}>

            <div className="stats-icon">
              {item.icon}
            </div>

            <h3>{item.number}</h3>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Stats;