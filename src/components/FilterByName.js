import PropTypes from "prop-types";
const FilterByName = (props) => {
  const handleFilterName = (ev) => {
    props.handleFilterName(ev.target.value);
  };
  const pressEnter = (ev) => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      return false;
    }
  };

  return (
    <>
      <label className="filter__label" htmlFor="filter">
        Filtrar por personaje
      </label>
      <input
        className="filter__input"
        type="text"
        name="searchName"
        placeholder="Harry Potter..."
        value={props.inputFilterName}
        onChange={handleFilterName}
        onKeyDown={pressEnter}
      ></input>
    </>
  );
};
/* FilterByName.defaultProps = {
  inputType: "search",
};

FilterByName.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
}; */

export default FilterByName;
