import "../styles/App.css";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
//components
import Filters from "./Filters";
import CharacterList from "./CharacterList";
function App() {
  const [dataCharacter, setDataCharacter] = useState([]);
  const [inputFilterName, setInputFilterName] = useState("");

  useEffect(() => {
    callToApi().then((response) => {
      setDataCharacter(response);
    });
  }, []);

  const handleFilterName = (inputValue) => {
    setInputFilterName(inputValue);
  };

  const filteredCharacters = dataCharacter.filter((item) => {
    return item.name
      .toLowerCase()
      .includes(inputFilterName.toLocaleLowerCase());
  });

  return (
    <div className="App">
      {/* <Header /> */}
      <main>
        <Filters
          inputFilterName={inputFilterName}
          handleFilterName={handleFilterName}
        />
        <CharacterList character={filteredCharacters} />
      </main>
    </div>
  );
}

export default App;
