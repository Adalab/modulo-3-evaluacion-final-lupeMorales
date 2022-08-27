import "../styles/App.scss";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
//route
import { matchPath, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
//components
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";
import Footer from "./Footer";

function App() {
  //variables de estado
  const [dataCharacter, setDataCharacter] = useState([]);
  const [inputFilterName, setInputFilterName] = useState("");
  const [inputFiterHouse, setInputFilterHouse] = useState("gryffindor");
  const [warning, setWarning] = useState("");

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
  const searchResult = () => {
    if (inputFilterName !== "" && filteredCharacters.length === 0) {
      console.log("no miseila no hay nadie con ese nombre");
      return (
        <p className="warning">No mi siela{inputFilterName} debe ser muggle</p>
      );
    }
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

  const resetForm = () => {
    setInputFilterName("");
    setInputFilterHouse("gryffindor");
  };
  const { pathname } = useLocation();
  const dataPath = matchPath("/character/:id", pathname);
  const characterId = dataPath !== null ? dataPath.params.id : null;
  const foundCharacters = dataCharacter.find((item) => item.id === characterId);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                inputFilterName={inputFilterName}
                handleFilterName={handleFilterName}
                inputFiterHouse={inputFiterHouse}
                handleFilterHouse={handleFilterHouse}
                reset={resetForm}
              />

              <CharacterList character={filteredCharacters} />
              {searchResult()}
            </>
          }
        />

        <Route
          path="/character/:id"
          element={<CharacterDetails character={foundCharacters} />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
