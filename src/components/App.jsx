import { useState, useEffect } from "react";
import CharacterList from "./characters/CharacterList";
import FilterCharacterAndHouse from "./Filters/FilterCharacterAndHouse";
import { getCharacters } from "../services/characterApi";
import CharacterDetail from "./characters/CharacterDetail";


import "../styles/App.scss";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Almacena la lista de personajes
  const [characters, setCharacters] = useState([]);
  // Almacena el filtro de casa seleccionada, inicialmente todas las casas
  const [houseFilter, setHouseFilter] = useState('');
  // Almacena la búsqueda del usuario
  const [search, setSearch] = useState('');

  // Función para obtener los personajes desde la API, 
  // filtrados por casa si es necesario

  const fetchCharacters = (house) => {
    getCharacters(house)
      .then(data => {
        // Ordena los personajes alfabéticamente por nombre
        const sortedCharacters = data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        // Actualiza el estado con la lista ordenada de personajes
        setCharacters(sortedCharacters);
      })

  };

  // useEffect para obtener los personajes al cargar la página 
  // o cuando cambie el filtro de casa
  useEffect(() => {
    fetchCharacters(houseFilter); // Llama a la función fetchCharacters cada vez que cambie houseFilter
  }, [houseFilter]); //  Se ejecutará cada vez que cambie

  // Función para manejar el cambio en el input de búsqueda
  const handleInputSearch = (ev) => {
    const characterToSearch = ev.currentTarget.value.toLowerCase();
    setSearch(characterToSearch);
  };

  // Función para manejar el cambio en el filtro de casa
  const handleChangeHouseFilter = (ev) => {
    const newValue = ev.currentTarget.value;
    setHouseFilter(newValue); // Actualiza el estado con el nuevo filtro de casa
  };

  // Función para restablecer los filtros a sus valores predeterminados
  const handleReset = () => {
    setHouseFilter(''); // Restableces a todas las casas
    setSearch(''); // Borrar el campo de búsqueda
  };

  // Filtra los personajes según el texto ingresado
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(search)
  );

  // Función para encontrar un personaje por su id
  const findCharacter = (id) => {
    return characters.find(character => character.id === id);
  };

  return (
    
    <div className="">
     
      <header className="header">
        <h1 className="titleHarry">Harry Potter</h1>
      </header>
      <main className="main">
        
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Componente de filtro para búsqueda por nombre y selección de casa */}
                  <FilterCharacterAndHouse
                    search={search}
                    houseFilter={houseFilter}
                    handleInputSearch={handleInputSearch}
                    handleChangeHouseFilter={handleChangeHouseFilter}
                  />
                  {/* Botón para restablecer los filtros */}
                  <div className="containerResetBtn">
                  <button onClick={handleReset} className="resetBtn">
                    Reset
                  </button>
                  </div>
                  <section className="">
                    {/* Componente que muestra la lista de personajes filtrados */}
                    <CharacterList characters={filteredCharacters} />
                  </section>
                </>
              }
            />
            {/* Ruta para mostrar los detalles de un personaje seleccionado */}
            <Route path="/detail/:id" element={<CharacterDetail findCharacter={findCharacter} />} />
          </Routes>
        </Router>
      </main>
      <footer className="footer">
      🧙‍♀️  Alejandrita's Things  🏰 
      </footer>
    </div>
    
  );
}

export default App;
