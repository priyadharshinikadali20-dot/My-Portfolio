import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Background from "./components/Background";
import Particles from "./components/Particles";
import CursorSystem from "./components/CursorSystem";
import Snow from "./components/Snow";
import Hackathons from "./pages/Hackathons";
import Stats from "./components/Stats";
import Learning from "./components/Learning";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [theme, setTheme] = useState("dark");

useEffect(() => {
  document.body.setAttribute("data-theme", theme);
}, [theme]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {

    return <Loader />;

  }
  return (
    <>
      {/* Background Effects */}
      <Background />
      <Particles />
      <Snow />
      <CursorSystem />

      {/* Website */}
      <Navbar
  theme={theme}
  setTheme={setTheme}
/>

      <main>

        <Hero />
        <Stats />

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>
        <Learning />

        <section id="projects">
          <Projects />
        </section>
        <section id="hackthons">
          <Hackathons />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;