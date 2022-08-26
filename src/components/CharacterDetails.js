const CharacterDetails = (props) => {
  return (
    <section>
      <a href="#">
        <p>Volver</p>
      </a>
      <img
        src={props.character.image}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      ></img>
      <h3>{props.character.name}</h3>
      <p>{props.character.specie}</p>
      <p>casa:{props.character.house}</p>
      <p>género{props.character.gender}</p>
      <p>ancestro{props.character.ancestry}</p>
      <p>{props.character.status}</p>
    </section>
  );
};
export default CharacterDetails;
