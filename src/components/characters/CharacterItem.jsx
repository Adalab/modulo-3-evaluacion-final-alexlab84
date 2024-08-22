import PropTypes from 'prop-types';
import { translateSpecies } from '../../utils/translation';
import { Link } from 'react-router-dom';
import harryRelleno from '../../../public/harryRelleno.png'

// Componente CharacterItem que representa un personaje individual en la lista

function CharacterItem({ character }) {


  return (
    // Link de Router que redirige a la página de detalles del personaje seleccionado
    <Link to={`/detail/${character.id}`} className=''>

      {/* Muestra la imagen del personaje. Si no hay imagen disponible, muestra una de relleno */}
    <div className='cardItem'>
      <img
        src={character.image ? character.image : harryRelleno}
        alt={`Foto de ${character.name}`}
        className="cardImg"
      />

      <h2 className="cardTitle">{character.name}</h2>

      {/* Muestra la especie del personaje, usando la función translateSpecies */}
      <p className="speciesCard">{translateSpecies(character.species)}</p>
      </div>
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
