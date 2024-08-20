import PropTypes from 'prop-types'

import CharacterItem from "./CharacterItem";

function CharacterList({characters}) {

    

  return (
    <ul className="cards">
      {characters.map((character) => (
        <li key={character.id} className="">
        <CharacterItem character={character}/>
        </li>
      ))}
    </ul>
  );
}

CharacterList.propTypes = {
    characters: PropTypes.array.isRequired
};


export default CharacterList;
