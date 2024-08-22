import PropTypes from 'prop-types'

import CharacterItem from "./CharacterItem";

function CharacterList({ characters, characterNotFound }) {



  return (
    <div>
      {characterNotFound ? (
        <p>{characterNotFound}</p>  // Muestra el mensaje si no se encuentran personajes
      ) : (
        <ul className="cardList">
          {characters.length === 0 ? (
            <p>No hay personajes disponibles.</p>  // Mensaje alternativo si no hay personajes
          ) : (
            characters.map((character) => (
              <li key={character.id} className="">
                <CharacterItem character={character} />
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  characterNotFound: PropTypes.string
};


export default CharacterList;
