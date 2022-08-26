import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const renderCharList = props.character.map((char, index) => {
    return <CharacterCard key={index} char={char} />;
  });
  return (
    <section>
      <ul>{renderCharList}</ul>
    </section>
  );
};
export default CharacterList;
