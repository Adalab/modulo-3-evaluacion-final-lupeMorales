import "../styles/App.scss";
import callToApi from "../services/api";
import ls from "../services/localStorage";
import { useEffect, useState } from "react";
//route
import { matchPath, useLocation, useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
//components
import Loader from "./Loader";
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";
import Footer from "./Footer";

function App() {
  //variables de estado
  const [dataCharacter, setDataCharacter] = useState([]);
  const [inputFilterName, setInputFilterName] = useState(
    ls.get("inputName", "")
  );
  const [inputFilterHouse, setInputFilterHouse] = useState(
    ls.get("inputHouse", "gryffindor")
  );
  const [inputFilterAncestry, setInputAncestry] = useState(
    ls.get("inputAncestry", [])
  );
  const [inputOrder, setInputOrder] = useState(ls.get("isOrder", false));
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
    ls.set("imputHouse", inputFilterHouse);
    ls.set("isOrder", inputOrder);
    ls.set("inputAncestry", inputFilterAncestry);
  }, [inputFilterName, inputFilterHouse, inputOrder, inputFilterAncestry]);

  //recojo por liftinf el value que actualiza la variable de estado
  const handleFilterName = (inputValue) => {
    setInputFilterName(inputValue);
  };
  const handleFilterHouse = (inputValue) => {
    setInputFilterHouse(inputValue);
  };

  const handleFilterAncestry = (value) => {
    const set = new Set(inputFilterAncestry);
    set.has(value)
      ? setInputAncestry(inputFilterAncestry)
      : setInputAncestry([...inputFilterAncestry, value]);
  };
  const handleFilterOrder = (value) => {
    setInputOrder(value);
  };

  const getRandomMsg = () => {
    const mesages = [
      "No hay encantamiento que encuentre a ",
      "Ni el mejor buscador de Quiddith daría con ",
      "Mira en la Sala de los Menesteres porque aqui no está ",
      "Te vas a quedar petrificus totalus cuando sepas que no encontramos a ",
      "No lo encontramos, parece que le gusta mucho tomar pocion multijugos a ",
      "Vaya, no aparece. El Ministerio de Magia también anda buscando a ",
      "Estaba dentro de un Armario Evanescente la última vez que vieron a ",
    ];
    const msg = mesages[Math.floor(Math.random() * mesages.length)];
    return msg;
  };
  console.log(getRandomMsg());

  const searchResult = () => {
    if (inputFilterName !== "" && filteredCharacters.length === 0) {
      return (
        <div className="warning">
          <p className="warning__msg">
            {getRandomMsg()}
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
      if (inputFilterHouse === "all") {
        return true;
      }
      return item.house.toLowerCase() === inputFilterHouse;
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

  //oderna los datos si checkbox esta pulsado
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
    setInputAncestry([]);
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
                  inputFilterHouse={inputFilterHouse}
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
