import "../styles/Learning.css";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaBrain,
  FaDatabase,
} from "react-icons/fa";

function Learning() {
  const learning = [
    {
      icon: <FaReact />,
      title: "Next.js",
      progress: "75%",
    },
    {
      icon: <FaDatabase />,
      title: "MongoDB",
      progress: "70%",
    },
    {
      icon: <FaDocker />,
      title: "Docker",
      progress: "55%",
    },
    {
      icon: <FaAws />,
      title: "AWS",
      progress: "45%",
    },
    {
      icon: <FaBrain />,
      title: "DSA",
      progress: "80%",
    },
    {
      icon: <FaNodeJs />,
      title: "Express.js",
      progress: "85%",
    },
  ];

  return (
    <section id="learning" className="learning">

      <div className="section-title">

        <span>CURRENTLY LEARNING</span>

        <h2>
          Always <span>Growing</span>
        </h2>

        <p>
          I'm continuously learning modern technologies to become a
          better Full Stack Developer and Software Engineer.
        </p>

      </div>

      <div className="learning-grid">

        {learning.map((item, index) => (

          <div className="learning-card" key={index}>

            <div className="learning-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{ width: item.progress }}
              ></div>

            </div>

            <span>{item.progress}</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Learning;