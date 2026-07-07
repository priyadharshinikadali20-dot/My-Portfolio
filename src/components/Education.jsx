import "../styles/Education.css";
import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaAward,
} from "react-icons/fa";

function Education() {

  const education = [

    {
      icon:<FaGraduationCap />,
      degree:"Bachelor of Computer Applications (BCA)",
      institute:"Aditya Degree College",
      duration:"2023 – 2026",
      score:"CGPA : 8.5 / 10",
      color:"#38BDF8",
    },

    {
      icon:<FaUniversity />,
      degree:"Intermediate (Class XII)",
      institute:"Aditya Junior College",
      duration:"2022 – 2023",
      score:"Completed",
      color:"#A855F7",
    },

    {
      icon:<FaSchool />,
      degree:"Secondary School (Class X)",
      institute:"Mahatma Gandhi High School",
      duration:"2020 – 2021",
      score:"Completed",
      color:"#22C55E",
    },

  ];

  return(

<section
id="education"
className="education"
>

<div className="section-title">

<span>ACADEMIC JOURNEY</span>

<h2>

Education <span>Timeline</span>

</h2>

<p>

My academic journey has built a strong
foundation in computer science,
programming, databases and modern
software development.

</p>

</div>

<div className="education-grid">

{

education.map((item,index)=>(

<div
className="education-card"
key={index}
>

<div
className="education-icon"
style={{
color:item.color
}}
>

{item.icon}

</div>

<div className="education-year">

{item.duration}

</div>

<h3>

{item.degree}

</h3>

<h4>

{item.institute}

</h4>

<div className="education-score">

<FaAward/>

<span>

{item.score}

</span>

</div>

</div>

))

}

</div>

</section>

  );

}

export default Education;