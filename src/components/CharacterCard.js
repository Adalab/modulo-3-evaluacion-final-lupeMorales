const CharacterCard = (props) => {
  return (
    <li>
      <img
        src={props.char.image}
        alt={`Foto de ${props.char.name}`}
        title={`Foto de ${props.char.name}`}
      ></img>
      <h3>{props.char.name}</h3>
      <p>{props.char.specie}</p>
      <p>Ver Detalle</p>
    </li>
  );
};
export default CharacterCard;
