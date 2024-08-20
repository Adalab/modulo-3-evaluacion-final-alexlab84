import { useState, useEffect} from "react";
import CharacterList from "./characters/CharacterList";
import FilterCharacterAndHouse from "./Filters/FilterCharacterAndHouse";
import { getCharacters } from "../services/characterApi";

import "../styles/App.scss";



function App() {

  const [characters, setCharacters] = useState([]);
  const [ houseFilter, setHouseFilter ] = useState( 'gryffindor' );
  const [ search, setSearch ] = useState( '' );

  useEffect( () => {
    getCharacters()
    .then(responseData => {
      setCharacters(responseData)
    });
  }, [] );

  const handleInputSearch = (ev) => {
    const characterToSearch = ev.currentTarget.value.toLowerCase();
    setSearch( characterToSearch);
  
  };

  const handleChangeHouseFilter = (ev) => {
    const newValue = ev.currentTarget.value;
    setHouseFilter(newValue);
  };
  
  // Filtra los personajes según el texto ingresado y la casa seleccionada

  const filteredCharacters = characters.filter((character) => {
    return (
      character.name.toLowerCase().includes(search) &&
      character.house.toLowerCase() === houseFilter.toLowerCase()
    );
  });


  return (
    <div className="page">
      <header>
        <h1 className="title">Harry Potter </h1>
      </header>

      <main className="main">
        <FilterCharacterAndHouse 
          search={search}
          houseFilter={houseFilter}
          handleInputSearch={handleInputSearch}
          handleChangeHouseFilter={handleChangeHouseFilter}
        />
        <section className="list">
          <CharacterList characters={filteredCharacters} />
        </section>
      </main>
    </div>
  );
}

export default App;
