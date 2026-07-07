import "../styles/Loader.css";

function Loader() {
  return (
    <div className="loader-container">

      <div className="loader-logo">

        <span>YP</span>

      </div>

      <h2>Loading Portfolio...</h2>

      <div className="loader-bar">

        <div className="loader-progress"></div>

      </div>

    </div>
  );
}

export default Loader;