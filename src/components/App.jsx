import { useState, useEffect } from "react";
import CharacterList from "./characters/CharacterList";
import FilterCharacterAndHouse from "./Filters/FilterCharacterAndHouse";
import { getCharacters } from "../services/characterApi";
import CharacterDetail from "./characters/CharacterDetail";

import "../styles/App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [houseFilter, setHouseFilter] = useState(''); // Representa todas las casas
  const [search, setSearch] = useState('');

  // Función para buscar personajes en función de la casa desde la api
  // que viene en getCharacters

  const fetchCharacters = (house) => {
    getCharacters(house)
      .then(data => {
        // Ordena alfabeticamente 
        const sortedCharacters = data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setCharacters(sortedCharacters);
      })
      
  };

  useEffect(() => {
    fetchCharacters(houseFilter); // Búsqueda inicial de personajes con o sin filtro interno
  }, [houseFilter]); // Re-fetch de personajes cada vez que cambie el filtro de la casa

  const handleInputSearch = (ev) => {
    const characterToSearch = ev.currentTarget.value.toLowerCase();
    setSearch(characterToSearch);
  };

  const handleChangeHouseFilter = (ev) => {
    const newValue = ev.currentTarget.value;
    setHouseFilter(newValue);
  };

  const handleReset = () => {
    setHouseFilter(''); // Restableces a todas las casas
    setSearch(''); // Borrar el campo de búsqueda
  };

  // Filtra los personajes según el texto ingresado
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(search)
  );

  const findCharacter = (id) => {
    return characters.find(character => character.id === id);
  };

  return (
    <div className="page">
      <header>
        <h1 className="title">Harry Potter</h1>
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
                  <button onClick={handleReset} className="reset-button">
                    Reset
                  </button>
                  <section className="list">
                    <CharacterList characters={filteredCharacters} />
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
