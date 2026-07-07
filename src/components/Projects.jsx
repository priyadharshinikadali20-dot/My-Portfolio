import "../styles/Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaGamepad,
  FaCode,
  FaStar,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      number: "01",
      status: "LIVE",
      title: "AI Resume Analyzer",
      description:
        "A modern full-stack web application that analyzes PDF resumes using AI-powered logic. It extracts resume content, evaluates technical skills against job descriptions, and provides an ATS-style analysis through REST APIs.",

      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "JavaScript",
        "REST API",
      ],

      icon: <FaReact />,

      gradient:
        "linear-gradient(135deg,#38BDF8,#6366F1)",

      github:
        "https://github.com/priyadharshinikadali20-dot/resume-analyzer.git",

      live:
        "https://resume-analyzer-eight-sooty.vercel.app/",
    },

    {
      number: "02",
      status: "LIVE",
      title: "Fun Quiz Web Application",

      description:
        "An interactive responsive quiz platform featuring multiple-choice questions, automatic score calculation, attractive UI, and smooth user experience using JavaScript.",

      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive",
      ],

      icon: <FaGamepad />,

      gradient:
        "linear-gradient(135deg,#F472B6,#8B5CF6)",

      github:
        "https://github.com/priyadharshinikadali20-dot/fun-quiz.git",

      live:
        "https://fun-quiz-seven.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="projects"
    >
      <div className="section-title">

        <span>MY PORTFOLIO</span>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p>
          Here are some of my recent projects
          showcasing my skills in Full Stack
          Development, React.js, JavaScript,
          Node.js and modern web technologies.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div
            className="project-card"
            key={index}
          >

            <div
              className="project-thumb"
              style={{
                background: project.gradient,
              }}
            >

              <span className="project-number">
                {project.number}
              </span>

              <span className="project-status">
                ● {project.status}
              </span>

              <div className="project-thumb-icon">
                {project.icon}
              </div>

            </div>

            <div className="project-body">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tag-row">

                {project.tags.map(
                  (tag, i) => (

                    <span
                      className="tag"
                      key={i}
                    >
                      {tag}
                    </span>

                  )
                )}

              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-btn ghost"
                >
                  <FaGithub />

                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="link-btn solid"
                >
                  <FaExternalLinkAlt />

                  Live Demo
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="project-footer">

        <FaStar />

        <span>
          More exciting projects coming soon...
        </span>

      </div>

    </section>
  );
}

export default Projects;