import { useEffect, useRef } from "react";
import "../styles/CursorTrail.css";

function CursorTrail() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (x, y) => {
      for (let i = 0; i < 2; i++) {
        particlesRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 1.4,
          vy: (Math.random() - 0.5) * 1.4,
          life: 1,
          size: Math.random() * 2.5 + 1,
          hue: Math.random() > 0.5 ? "56,189,248" : "125,211,252",
        });
      }
    };

    const move = (e) => {
  const zoom = parseFloat(getComputedStyle(document.documentElement).zoom) || 1;
  spawn(e.clientX / zoom, e.clientY / zoom);
};
    window.addEventListener("mousemove", move);

    let frame;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue},${Math.max(p.life, 0)})`;
        ctx.fill();
      });
      particlesRef.current = particlesRef.current.filter((p) => p.life > 0);
      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trail-canvas" />;
}

export default CursorTrail;