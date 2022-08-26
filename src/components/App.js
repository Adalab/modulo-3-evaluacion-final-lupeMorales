import "../styles/App.css";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
//components
import Filters from "./Filters";
import CharacterList from "./CharacterList";
function App() {
  const [dataCharacter, setDataCharacter] = useState([]);
  const [inputFilterName, setInputFilterName] = useState("");
  const [inputFiterHouse, setInputFilterHouse] = useState("gryffindor");

  useEffect(() => {
    callToApi().then((response) => {
      setDataCharacter(response);
    });
  }, []);

  const handleFilterName = (inputValue) => {
    setInputFilterName(inputValue);
  };
  const handleFilterHouse = (inputValue) => {
    setInputFilterHouse(inputValue);
  };

  const filteredCharacters = dataCharacter
    .filter((item) => {
      return item.name
        .toLowerCase()
        .includes(inputFilterName.toLocaleLowerCase());
    })
    .filter((item) => {
      return item.house.toLowerCase() === inputFiterHouse;
    });

  return (
    <div className="App">
      {/* <Header /> */}

      <Filters
        inputFilterName={inputFilterName}
        handleFilterName={handleFilterName}
        inputFiterHouse={inputFiterHouse}
        handleFilterHouse={handleFilterHouse}
      />
      <CharacterList character={filteredCharacters} />
    </div>
  );
}

export default App;
