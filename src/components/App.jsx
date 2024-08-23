import { useState, useEffect } from "react";
import CharacterList from "./characters/CharacterList";
import FilterCharacterAndHouse from "./Filters/FilterCharacterAndHouse";
import { getCharacters } from "../services/characterApi";
import CharacterDetail from "./characters/CharacterDetail";
import FilterGender from "./Filters/FilterGender.jsx"; 


import "../styles/App.scss";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Almacena la lista de personajes
  const [characters, setCharacters] = useState([]);
  // Almacena el filtro de casa seleccionada, inicialmente Gryffindor
  const [houseFilter, setHouseFilter] = useState('gryffindor');
  // Almacena la búsqueda del usuario
  const [search, setSearch] = useState('');
  const [genderFilter, setGenderFilter] = useState('todos'); 

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

  // Función para manejar el cambio en el filtro de género
  const handleChangeGenderFilter = (ev) => {
    setGenderFilter(ev.currentTarget.value); // Actualiza el estado con el nuevo filtro de género
  };

  // Función para restablecer los filtros a sus valores predeterminados
  const handleReset = () => {
    setHouseFilter(''); // Restableces a todas las casas
    setSearch(''); // Borrar el campo de búsqueda
    setGenderFilter('todos'); // Restablece el filtro de género
  };

  // Filtra los personajes según el texto ingresado
  const charactersFilteredByName = characters.filter(character =>
    character.name.toLowerCase().includes(search)
  );

  // Filtra los personajes según el género seleccionado
  const filteredCharacters = charactersFilteredByName.filter(character =>
    genderFilter === 'todos' || character.gender === genderFilter
  );

  // Función para encontrar un personaje por su id
  const findCharacter = (id) => {
    return characters.find(character => character.id === id);
  };

  return (
    
    <>
     
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
                  {/* Componente de filtro para género */}
                  <FilterGender
                    genderFilter={genderFilter}
                    handleChangeGenderFilter={handleChangeGenderFilter}
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
      🧙‍♀️  Alejandrita&apos;ss Things  🏰 
      </footer>
      
    </>
    
  );
}

export default App;
