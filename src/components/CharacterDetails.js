import "../styles/components/CharacterDetails.scss";
import imageDefault from "../images/imgDefault.png";
import { Link } from "react-router-dom";

const CharacterDetails = (props) => {
  return (
    <section className="detail">
      <Link to="/">
        <i class="fa-solid fa-door-open fa-lg"></i>
      </Link>
      <article className="detail__container">
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

          <p className="detail__text">{props.character.specie}</p>
          <p className="detail__text">Casa: {props.character.house}</p>
          <p className="detail__text">
            Género:{" "}
            {props.character.gender === "male" ? (
              <i class="fa-solid fa-mars"></i>
            ) : (
              <i class="fa-solid fa-venus"></i>
            )}
          </p>
          <p className="detail__text">Ancestro: {props.character.ancestry}</p>
          <p className="detail__text">
            Status:{" "}
            {props.character.status === true ? (
              <i class="fa-solid fa-heart"></i>
            ) : (
              <i class="fa-solid fa-tombstone"></i>
            )}
          </p>
        </div>
      </article>
    </section>
  );
};
export default CharacterDetails;
