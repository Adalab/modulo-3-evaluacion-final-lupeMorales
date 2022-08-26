import "../styles/App.css";
import callToApi from "../services/api";
import { useEffect, useState } from "react";
//components
import CharacterList from "./CharacterList";
function App() {
  const [dataCharacter, setDataCharacter] = useState([]);

  useEffect(() => {
    callToApi().then((response) => {
      setDataCharacter(response);
    });
  }, []);
  return (
    <div className="App">
      {/* <Header /> */}
      <main>
        <CharacterList character={dataCharacter} />
      </main>
    </div>
  );
}

export default App;
