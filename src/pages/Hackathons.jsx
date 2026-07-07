import "../styles/Hackathons.css";
import {
  FaTrophy,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
} from "react-icons/fa";

function Hackathons() {

  const hackathons = [

    {
      title: "Adhoc Aditya Tech Fusion Hackathon",
      domain: "Advanced Web Technologies",
      date: "04 Feb 2025 - 07 Feb 2025",
      icon: <FaCode />,
      color: "#38BDF8",
      certificate: "/TechFusion-Hackathon.pdf",
    },

    {
      title: "Adhoc Aditya Ideastorm Hackathon",
      domain: "DevOps",
      date: "15 Sep 2025 - 18 Sep 2025",
      icon: <FaServer />,
      color: "#F59E0B",
      certificate: "/Ideastorm-Hackathon.pdf",
    },

  ];

  return (

<section
id="hackathons"
className="hackathons"
>

<div className="section-title">

<span>

ACHIEVEMENTS

</span>

<h2>

Hackathon <span>Experience</span>

</h2>

<p>

Participated in college hackathons focusing on
real-world software development, teamwork,
problem-solving and innovative solutions.

</p>

</div>

<div className="hackathon-grid">

{

hackathons.map((item,index)=>(

<div
className="hackathon-card"
key={index}
>

<div
className="hackathon-icon"
style={{color:item.color}}
>

{item.icon}

</div>

<div className="hackathon-badge">

<FaTrophy />

Hackathon

</div>

<h3>

{item.title}

</h3>

<h4>

{item.domain}

</h4>

<div className="hackathon-date">

📅 {item.date}

</div>

<p>

Successfully participated in a live hackathon,
collaborating with teams, solving technical
challenges and gaining practical industry exposure.

</p>

<a
href={item.certificate}
target="_blank"
rel="noopener noreferrer"
className="hackathon-btn"
>

<FaExternalLinkAlt />

View Certificate

</a>

</div>

))

}

</div>

</section>

  );
}

export default Hackathons;