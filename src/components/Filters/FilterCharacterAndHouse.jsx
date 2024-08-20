import PropTypes from 'prop-types';

function FilterCharacterAndHouse({ search, houseFilter, handleInputSearch, handleChangeHouseFilter }) {
    return (
      <form>
        <div className="form__section">
          <label htmlFor="character">Busca por personaje:</label>
          <input
            onInput={handleInputSearch}
            type="text"
            name="character"
            id="character"
            value={search}
          />
  
          <label>Selecciona la casa:</label>
          <select
            onChange={handleChangeHouseFilter}
            name="house"
            id="house"
            value={houseFilter}
          >
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