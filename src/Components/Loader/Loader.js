import Spinner from "react-bootstrap/Spinner";
import "./Loader.css"

function Loader() {
  return (
    <div className="loader-page-div d-flex justify-content-center align-items-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;
