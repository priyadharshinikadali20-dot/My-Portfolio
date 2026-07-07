import { useState } from "react";
import "../styles/Contact.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaEye,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {

  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {

    await navigator.clipboard.writeText(
      "priyadharshinikadali20@gmail.com"
    );

    setCopied(true);

    setTimeout(() => {

      setCopied(false);

    }, 2000);

  };

  const contacts = [

    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "priyadharshinikadali20@gmail.com",
      action: "Copy Email",
      color: "#38BDF8",
      copy: true,
    },

    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/priyadharshinikadali20-dot",
      action: "Visit GitHub",
      color: "#A855F7",
      link: "https://github.com/priyadharshinikadali20-dot",
    },

    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Let's Connect",
      action: "Open LinkedIn",
      color: "#0EA5E9",
      link: "https://www.linkedin.com/in/yamuna-priyadharshini-kadali/",
    },

    {
      icon: <FaEye />,
      title: "Resume",
      value: "View my latest Resume",
      action: "View Resume",
      color: "#22C55E",
      link: "/yamuna-priyadharshini-resume.pdf",
    },

  ];

  return (

<section
id="contact"
className="contact"
>

<div className="section-title">

<span>

GET IN TOUCH

</span>

<h2>

Let's <span>Work Together</span>

</h2>

<p className="contact-description">

I'm actively looking for Software Developer,
Full Stack Developer and Web Developer
opportunities.

Feel free to connect with me anytime.

</p>

</div>

<div className="contact-grid">

{

contacts.map((item,index)=>(

item.copy ? (

<div
key={index}
className="contact-card"
onClick={copyEmail}
>

<div
className="contact-icon"
style={{
color:item.color
}}
>

{item.icon}

</div>

<h3>

{item.title}

</h3>

<p>

{item.value}

</p>

<div className="contact-btn">

<FaPaperPlane />

{item.action}

</div>

</div>

) : (

<a
key={index}
href={item.link}
target="_blank"
rel="noreferrer"
className="contact-card"
>

<div
className="contact-icon"
style={{
color:item.color
}}
>

{item.icon}

</div>

<h3>

{item.title}

</h3>

<p>

{item.value}

</p>

<div className="contact-btn">

<FaPaperPlane />

{item.action}

</div>

</a>

)

))

}
</div>

{copied && (

<div className="copy-toast">

    ✅ Email copied successfully!

</div>

)}

</section>

  );

}

export default Contact;