import "../styles/Particles.css";

function Particles() {
  const particles = Array.from({ length: 80 });

  return (
    <div className="particles">
      {particles.map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 5}px`,
            height: `${2 + Math.random() * 5}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Particles;