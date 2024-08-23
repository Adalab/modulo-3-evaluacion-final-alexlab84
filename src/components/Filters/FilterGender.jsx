import PropTypes from 'prop-types';

function FilterGender({ genderFilter, handleChangeGenderFilter }) {
  return (
    <div className="formInputs">
      <label htmlFor="gender" className='labels'>Género:</label>
      <select className='input' id="gender" value={genderFilter} onChange={handleChangeGenderFilter}>
        <option value="todos">Todos</option>
        <option value="male">Masculino</option>
        <option value="female">Femenino</option>
      </select>
    </div>
  );
}

FilterGender.propTypes = {
  genderFilter: PropTypes.string.isRequired,
  handleChangeGenderFilter: PropTypes.func.isRequired,
};

export default FilterGender;
