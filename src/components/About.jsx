import "../styles/About.css";
import { FaLightbulb, FaCode, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <div className="section-header">
        <span>About Me</span>
        <h2>
          Get To <span>Know Me</span>
        </h2>
      </div>

      <div className="about-container">

        <div className="about-text">

          <p>
            I'm a passionate and dedicated BCA graduate with a strong interest
            in Software Development and Full Stack Web Development.
          </p>

          <p>
            I enjoy transforming ideas into modern web applications using
            React.js, JavaScript, Python, SQL and Azure while continuously
            learning new technologies.
          </p>

          <p>
            My goal is to join a company where I can contribute, grow my
            technical skills and build impactful products.
          </p>

        </div>

        <div className="about-cards">

          <div className="about-card">
            <FaLightbulb className="about-icon" />
            <h3>Problem Solver</h3>
            <p>
              Love solving real-world programming challenges with clean
              solutions.
            </p>
          </div>

          <div className="about-card">
            <FaCode className="about-icon" />
            <h3>Clean Code</h3>
            <p>
              I focus on writing readable, scalable and maintainable code.
            </p>
          </div>

          <div className="about-card">
            <FaLaptopCode className="about-icon" />
            <h3>Continuous Learner</h3>
            <p>
              Always exploring new technologies and improving my development
              skills.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;