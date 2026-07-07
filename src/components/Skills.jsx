import "../styles/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaMicrosoft,
} from "react-icons/fa";

function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5", level: "95%" },
    { icon: <FaCss3Alt />, name: "CSS3", level: "90%" },
    { icon: <FaJsSquare />, name: "JavaScript", level: "85%" },
    { icon: <FaReact />, name: "React.js", level: "85%" },
    { icon: <FaNodeJs />, name: "Node.js", level: "80%" },
    { icon: <FaPython />, name: "Python", level: "90%" },
    { icon: <FaDatabase />, name: "SQL", level: "85%" },
    { icon: <FaGitAlt />, name: "Git", level: "80%" },
    { icon: <FaGithub />, name: "GitHub", level: "85%" },
    { icon: <FaMicrosoft />, name: "Azure", level: "75%" },
  ];

  return (
    <section id="skills" className="skills">

      <div className="section-title">
        <span>MY SKILLS</span>
        <h2>Technologies I Work With</h2>
        <p>
          These are the technologies and tools I use to build modern,
          scalable and responsive web applications.
        </p>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-top">

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div>

                <h3>{skill.name}</h3>

                <span>{skill.level}</span>

              </div>

            </div>

            <div className="progress">

              <div
                className="progress-fill"
                style={{ width: skill.level }}
              ></div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;