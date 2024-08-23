import PropTypes from 'prop-types';
import { handleKeyDown } from '../../utils/eventHandlers';



// Componente de formulario para filtrar personajes por nombre y casa
function FilterCharacterAndHouse({ search, houseFilter, handleInputSearch, handleChangeHouseFilter }) {



  return (
    <form className=''>
      <div className="formInputs">
        <label htmlFor="character" className='labels'>Busca por personaje:</label>
        <input
          onChange={handleInputSearch}
          onKeyDown={handleKeyDown}
          type="text"
          name="character"
          id="character"
          value={search}
          placeholder="Busca tu personaje favorito"
          className='input'
        />

        <label className='labels'>Selecciona la casa:</label>
        <select
          onChange={handleChangeHouseFilter}
          name="house"
          id="house"
          value={houseFilter}
          className='input'
        >
          <option value="">Todas las casas</option>
          <option value="gryffindor">Gryffindor</option>
          <option value="slytherin">Slytherin</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="hufflepuff">Hufflepuff</option>
        </select>
      </div>
    </form>
  );
}

FilterCharacterAndHouse.propTypes = {
  search: PropTypes.string.isRequired,
  houseFilter: PropTypes.string.isRequired,
  handleInputSearch: PropTypes.func.isRequired,
  handleChangeHouseFilter: PropTypes.func.isRequired,
};

export default FilterCharacterAndHouse;