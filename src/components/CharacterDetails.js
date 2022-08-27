import "../styles/components/CharacterDetails.scss";
import { Link } from "react-router-dom";

const CharacterDetails = (props) => {
  return (
    <section className="detail">
      <Link to="/">
        <p>Volver</p>
      </Link>
      <article className="detail__container">
        <div>
          <img
            src={props.character.image}
            alt={`Foto de ${props.character.name}`}
            title={`Foto de ${props.character.name}`}
          ></img>
        </div>

        <div detail__info>
          <h3>{props.character.name}</h3>

          <p>{props.character.specie}</p>
          <p>casa:{props.character.house}</p>
          <p>género{props.character.gender}</p>
          <p>ancestro{props.character.ancestry}</p>
          <p>{props.character.status}</p>
        </div>
      </article>
    </section>
  );
};
export default CharacterDetails;
