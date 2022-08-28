import "../styles/components/CharacterCard.scss";
import imageDefault from "../images/imgDefault.png";

import { Link } from "react-router-dom";
const CharacterCard = (props) => {

  return (
    <li className="card">
      <Link to={`/character/${props.char.id}`}>
        <article className="card__container">
          
          <h3 className="card__name">{props.char.name}</h3>
          <img
            className="card__image"
            src={props.char.image || imageDefault}
            alt={`Foto de ${props.char.name}`}
            title={`Foto de ${props.char.name}`}
          ></img>
          <p className="card__text">{props.char.specie}</p>
          {/* <p>Ver Detalle</p> */}
        </article>
      </Link>
    </li>
  );
};

export default CharacterCard;
