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
  const [inputOrder, setInputOrder] = useState(false);

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
  const handleFilterOrder = (value) => {
    setInputOrder(value);
  };

  const searchResult = () => {
    if (inputFilterName !== "" && filteredCharacters.length === 0) {
      return (
        <div className="warning">
          <p className="warning__msg">
            Oh vaya! No hay encantamiento que encuentre a
            <span className="warning__msg--strong"> {inputFilterName}</span>
          </p>
        </div>
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

  //oderna si checkbox esta pulsado OJOCUIDAO no lo entiendo
  if (inputOrder === true) {
    filteredCharacters.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }
  const resetForm = () => {
    setInputFilterName("");
    setInputFilterHouse("gryffindor");
    setInputOrder(false);
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
              <main className="main">
                <Filters
                  inputFilterName={inputFilterName}
                  handleFilterName={handleFilterName}
                  inputFiterHouse={inputFiterHouse}
                  handleFilterHouse={handleFilterHouse}
                  inputOrder={inputOrder}
                  handleFilterOrder={handleFilterOrder}
                  resetForm={resetForm}
                />
                <CharacterList
                  character={filteredCharacters}
                  inputOrder={inputOrder}
                />
                {searchResult()}
              </main>
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
