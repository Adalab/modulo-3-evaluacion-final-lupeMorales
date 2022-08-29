import "../styles/components/CharacterDetails.scss";
import imageDefault from "../images/imgDefault.png";
import { Link } from "react-router-dom";

const CharacterDetails = (props) => {
  return (
    <section className="detail">
      <article className="detail__container">
        <Link to="/" className="detail__link" title="Vuelve a búsqueda">
          <i className="fa-solid fa-door-open fa-xl"></i>
        </Link>
        <div className={`border-${props.character.house}`}>
          <img
            className="detail__img"
            src={props.character.image || imageDefault}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}
          ></img>
        </div>
        <div className="detail__info">
          <h3 className="detail__title">{props.character.name}</h3>

          <p className="detail__text">Raza: {props.character.specie}</p>
          <p className="detail__text">Casa: {props.character.house}</p>
          <p className="detail__text">
            Género:{" "}
            {props.character.gender === "male" ? (
              <i className="fa-solid fa-mars"></i>
            ) : (
              <i className="fa-solid fa-venus"></i>
            )}
          </p>
          <p className="detail__text">
            Ancestro: {props.character.ancestry || "desconocido"}
          </p>
          <p className="detail__text">
            Status:{" "}
            {props.character.status === true ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-solid fa-skull"></i>
            )}
          </p>
        </div>
      </article>
    </section>
  );
};

export default CharacterDetails;
