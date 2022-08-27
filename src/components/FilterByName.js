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
        className="filter__text"
        type="search"
        name="searchName"
        placeholder="Harry Potter..."
        value={props.inputFilterName}
        onChange={handleFilterName}
        onKeyDown={pressEnter}
      ></input>
    </>
  );
};
export default FilterByName;
