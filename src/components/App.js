import "../styles/App.scss";
import callToApi from "../services/api";
import ls from "../services/localStorage";
import { useEffect, useState } from "react";
//route
import { matchPath, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
//components
import Loader from "./Loader";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";
import Footer from "./Footer";

function App() {
  const lsInputHouse = ls.get("inputHouse", "gryffindor");
  //variables de estado
  const [dataCharacter, setDataCharacter] = useState([]);
  const [inputFilterName, setInputFilterName] = useState(
    ls.get("inputName", "")
  );
  const [inputFiterHouse, setInputFilterHouse] = useState(lsInputHouse);
  const [inputFilterAncestry, setInputAncestry] = useState([]);
  const [inputOrder, setInputOrder] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    callToApi().then((response) => {
      setDataCharacter(response);
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    ls.set("imputName", inputFilterName);
    ls.set("imputHouse", setInputFilterHouse);
  }, [inputFilterName, setInputFilterHouse]);

  const handleFilterName = (inputValue) => {
    setInputFilterName(inputValue);
  };
  const handleFilterHouse = (inputValue) => {
    setInputFilterHouse(inputValue);
  };
  const handleFilterAncestry = (value) => {
    if (inputFilterAncestry.includes(value)) {
      const position = inputFilterAncestry.indexOf(value);
      filteredCharacters.splice(position, 1);
      setInputAncestry(inputFilterAncestry);
    } else {
      setInputAncestry([...inputFilterAncestry, value]);
    }
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
      if (inputFiterHouse === "all") {
        return true;
      }
      return item.house.toLowerCase() === inputFiterHouse;
    })
    .filter((item) => {
      if (inputFilterAncestry.length === 0) {
        return true;
      } else {
        return inputFilterAncestry.includes(item.ancestry);
      }
    });
  const getAncestry = () => {
    const ancestry = dataCharacter.map((item) => item.ancestry);
    //set para quedarme solo con valores unicos
    const ancestrySet = new Set(ancestry);
    const singleAncestry = [...ancestrySet];
    return singleAncestry;
  };

  //set

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
                  inputFilterAncestry={inputFilterAncestry}
                  handleFilterAncestry={handleFilterAncestry}
                  ancestry={getAncestry()}
                  inputOrder={inputOrder}
                  handleFilterOrder={handleFilterOrder}
                  resetForm={resetForm}
                />
                <CharacterList
                  character={filteredCharacters}
                  inputOrder={inputOrder}
                />
                {isLoading ? <Loader /> : null}
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
