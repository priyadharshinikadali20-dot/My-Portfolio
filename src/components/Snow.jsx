import "../styles/Snow.css";

export default function Snow() {

  const flakes = [...Array(100)];

  return (

    <div className="snow-container">

      {flakes.map((_, i) => (

        <span
          key={i}
          className="snowflake"
          style={{
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * 8 + "s",
            animationDuration: 5 + Math.random() * 8 + "s",
            width: 2 + Math.random() * 5 + "px",
            height: 2 + Math.random() * 5 + "px",
            opacity: 0.4 + Math.random() * 0.5,
            "--drift": (Math.random() * 80 - 40) + "px",
          }}
        />

      ))}

    </div>

  );

}