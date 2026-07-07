import { useEffect, useState } from "react";
import "../styles/Cursor.css";

function Cursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const move = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  return (
    <>

      <div
        className="cursor-dot"
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      <div
        className="cursor-ring"
        style={{
          left: position.x,
          top: position.y,
        }}
      />

    </>
  );

}

export default Cursor;