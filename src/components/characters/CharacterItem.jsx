import PropTypes from 'prop-types';
import { translateSpecies } from '../../utils/translation';
import { Link } from 'react-router-dom';
import { getHouseImage } from '../../utils/imageUtils';




// Componente CharacterItem que representa un personaje individual en la lista

function CharacterItem({ character }) {

  

// Selecciona la imagen del personaje o la de la casa si no hay imagen
const houseImage = getHouseImage(character.house);

  return (
    // Link de Router que redirige a la página de detalles del personaje seleccionado

    <Link to={`/detail/${character.id}`} className=''>

      {/* Muestra la imagen del personaje. Si no hay imagen disponible, 
      muestra una imagen segun a la casa que pertenezca u otra imagen si no
      pertenece a ninguna casa*/}

<div className='cardItem'>
        <img
          src={character.image ? character.image : houseImage}
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
    house: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
}

export default CharacterItem;
