import PropTypes from 'prop-types';
import { translateSpecies } from '../../utils/translation';
import { Link } from 'react-router-dom';

function CharacterItem({character}) {

    

    

  return (
    <Link to={`/detail/${character.id}`} className='details'>
      <img
        src={character.image ? character.image : 'https://via.placeholder.com/210x295/ffffff/666666/?text=HP'}
        alt={`Foto de ${character.name}`}
        className="card__img"
      />

      <h2 className="card__title">{character.name}</h2>
      <p className="card__description">{translateSpecies(character.species)}</p>
    </Link>
  );
}


CharacterItem.propTypes = {
    character: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired
}

export default CharacterItem;
