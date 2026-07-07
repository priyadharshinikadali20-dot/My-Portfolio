import { useEffect, useRef } from "react";
import "../styles/CursorSystem.css";

function CursorSystem() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const canvasRef = useRef(null);

  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const glow = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const particles = useRef([]);

  useEffect(() => {
    const dot = dotRef.current;
    const glowEl = glowRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;

      particles.current.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 2 + 1,
        life: 1,
      });
    };

    window.addEventListener("mousemove", move);

    const grow = () => glowEl.classList.add("cursor-hover");
    const shrink = () => glowEl.classList.remove("cursor-hover");

    document
      .querySelectorAll(
        "button,a,.project-card,.skill-card,.contact-card,.certificate-card,.education-card,.about-card"
      )
      .forEach((el) => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });

    let animation;

    const animate = () => {
      glow.current.x += (mouse.current.x - glow.current.x) * 0.12;
      glow.current.y += (mouse.current.y - glow.current.y) * 0.12;

      glowEl.style.transform = `translate(${glow.current.x}px, ${glow.current.y}px) translate(-50%,-50%)`;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        p.life -= 0.03;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(125,211,252,${p.life})`;

        ctx.fill();
      });

      particles.current = particles.current.filter((p) => p.life > 0);

      animation = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <>
      <canvas className="cursor-canvas" ref={canvasRef}></canvas>

      <div className="cursor-glow" ref={glowRef}></div>

      <div className="cursor-dot" ref={dotRef}></div>
    </>
  );
}

export default CursorSystem;