import "../styles/pages/NotFound.scss";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="notFound">
      <h2 className="notFound__text">
        ¿Te has perdido? Volvamos a{" "}
        <Link to="/">
          <span className="notFound__text--strong" title="Volver a Inicio">
            Hogwarts
          </span>
        </Link>
      </h2>
      ;{/*  <button className="notFound__button">Home</button> */}
    </div>
  );
};
export default NotFound;
