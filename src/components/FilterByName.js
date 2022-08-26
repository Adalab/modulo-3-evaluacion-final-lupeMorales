const FilterByName = (props) => {
  const handleFilterName = (ev) => {
    props.handleFilterName(ev.target.value);
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
      ></input>
    </>
  );
};
export default FilterByName;
