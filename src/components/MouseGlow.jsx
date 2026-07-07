import { useEffect, useRef } from "react";

function getZoom() {
  const z = parseFloat(getComputedStyle(document.documentElement).zoom);
  return z && !isNaN(z) ? z : 1;
}

function MouseGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const ring = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;

    const move = (e) => {
      const zoom = getZoom();
      // compensate for CSS zoom so the cursor lines up with the real mouse position
      mouse.current.x = e.clientX / zoom;
      mouse.current.y = e.clientY / zoom;

      dot.style.left = mouse.current.x + "px";
      dot.style.top = mouse.current.y + "px";
    };

    const grow = () => ringEl.classList.add("cursor-hover");
    const shrink = () => ringEl.classList.remove("cursor-hover");

    window.addEventListener("mousemove", move);

    const hoverItems = document.querySelectorAll(
      "a, button, .project-card, .skill-card"
    );

    hoverItems.forEach((item) => {
      item.addEventListener("mouseenter", grow);
      item.addEventListener("mouseleave", shrink);
    });

    let frame;
    const animate = () => {
      // ease the ring toward the dot for a smooth trailing feel
      ring.current.x += (mouse.current.x - ring.current.x) * 0.18;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.18;
      ringEl.style.left = ring.current.x + "px";
      ringEl.style.top = ring.current.y + "px";
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      hoverItems.forEach((item) => {
        item.removeEventListener("mouseenter", grow);
        item.removeEventListener("mouseleave", shrink);
      });
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </>
  );
}

export default MouseGlow;