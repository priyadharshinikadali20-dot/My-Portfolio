import "../styles/Experience.css";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCloud,
  FaMicrosoft,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Experience() {
  return (
    <section id="experience" className="experience">

      <div className="section-title">
        <span>PROFESSIONAL EXPERIENCE</span>
        <h2>
          Internship <span>Experience</span>
        </h2>

        <p>
          Hands-on industry experience in Cloud Computing and
          Full Stack Development through a Microsoft Azure internship.
        </p>
      </div>

      <div className="experience-card">

        <div className="experience-header">

          <div className="company-icon">
            <FaMicrosoft />
          </div>

          <div>

            <span className="experience-date">
              <FaCalendarAlt /> June 2023 – September 2023
            </span>

            <h2>Azure Cloud Developer Intern</h2>

            <h3>Tencon Infra Pvt. Ltd.</h3>

          </div>

        </div>

        <p className="experience-description">
          Successfully completed a cloud computing internship focused on
          designing, developing and deploying a Microsoft Azure-based
          To-Do List Application. Gained practical exposure to cloud
          deployment, CRUD operations and software development lifecycle
          while working on real-world industry tasks.
        </p>

        <div className="experience-tags">

          <span><FaCloud /> Microsoft Azure</span>

          <span>React.js</span>

          <span>JavaScript</span>

          <span>HTML5</span>

          <span>CSS3</span>

          <span>CRUD</span>

          <span>Git</span>

        </div>

        <div className="experience-achievements">

          <div>
            <FaCheckCircle />
            Developed a cloud-based To-Do List Application.
          </div>

          <div>
            <FaCheckCircle />
            Implemented complete CRUD functionality.
          </div>

          <div>
            <FaCheckCircle />
            Successfully deployed the application on Microsoft Azure.
          </div>

          <div>
            <FaCheckCircle />
            Learned Azure cloud services and deployment workflow.
          </div>

          <div>
            <FaCheckCircle />
            Worked with frontend and backend technologies.
          </div>

          <div>
            <FaCheckCircle />
            Improved debugging, testing and problem-solving skills.
          </div>

        </div>

        <div className="experience-footer">

          <div className="experience-stats">

            <div>

              <h3>3+</h3>

              <p>Months</p>

            </div>

            <div>

              <h3>1</h3>

              <p>Cloud Project</p>

            </div>

            <div>

              <h3>Azure</h3>

              <p>Deployment</p>

            </div>

          </div>

          <a
            href="/Internship-Certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-btn"
          >
            <FaExternalLinkAlt />
            View Internship Certificate
          </a>

        </div>

      </div>

    </section>
  );
}

export default Experience;