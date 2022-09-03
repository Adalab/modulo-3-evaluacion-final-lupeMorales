import "../styles/pages/Error404.scss";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error__container">
      <h2 className="error__text">
        {/* ¿Te has perdido? Sube al tren que volvemos a Hogarts */}
        404
      </h2>
      <h3 className="error__text--sub">error</h3>
      <Link to="/">
        <p className="error__button"> Vuelve a Hogwarts</p>
      </Link>
    </div>
  );
};
export default Error404;
