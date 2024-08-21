import { useState, useEffect} from "react";
import CharacterList from "./characters/CharacterList";
import FilterCharacterAndHouse from "./Filters/FilterCharacterAndHouse";
import { getCharacters } from "../services/characterApi";
import CharacterDetail from "./characters/CharacterDetail";


import "../styles/App.scss";

import { HashRouter as Router, Routes, Route } from "react-router-dom";



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

  // Encuentra el personaje por ID

  const findCharacter = (id) => {
    
    const characterShare = characters.find((character) => character.id === id);
    
    return characterShare;
};

  // Determina el mensaje a mostrar si no hay personajes

  const characterNotFound = search && filteredCharacters.length === 0 ? `No hay ningún personaje que coincida con el nombre "${search}"` : '';

  return (
    <div className="page">
      <header>
        <h1 className="title">Harry Potter </h1>
      </header>

      <main className="main">

      <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FilterCharacterAndHouse
                    search={search}
                    houseFilter={houseFilter}
                    handleInputSearch={handleInputSearch}
                    handleChangeHouseFilter={handleChangeHouseFilter}
                  />
                  <section className="list">
                    <CharacterList characters={filteredCharacters} 
                      characterNotFound={characterNotFound}
                    />
                  </section>
                </>
              }
            />
            <Route path="/detail/:id" element={<CharacterDetail findCharacter={findCharacter} />} />
          </Routes>
        </Router>

        
      </main>
    </div>
  );
}

export default App;
