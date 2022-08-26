import "../styles/App.css";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
//components
import Filters from "./Filters";
import CharacterList from "./CharacterList";
function App() {
  const [dataCharacter, setDataCharacter] = useState([]);
  const [inputFilterName, setInputFilterName] = useState("");

  const handleFilterName = (inputValue) => {
    setInputFilterName(inputValue);
  };

  useEffect(() => {
    callToApi().then((response) => {
      setDataCharacter(response);
    });
  }, []);
  return (
    <div className="App">
      {/* <Header /> */}
      <main>
        <Filters
          inputFilterName={inputFilterName}
          handleFilterName={handleFilterName}
        />
        <CharacterList character={dataCharacter} />
      </main>
    </div>
  );
}

export default App;
