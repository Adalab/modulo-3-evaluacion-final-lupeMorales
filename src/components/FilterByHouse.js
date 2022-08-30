const FilterByHouse = (props) => {
  const handleFilterHouse = (ev) => {
    props.handleFilterHouse(ev.target.value);
  };
  return (
    <>
      <label className="filter__label" htmlFor="filterHouse">
        Filtrar por casa
      </label>
      <select
        className="filter__input"
        name="filterHouse"
        id="filterHouse"
        value={props.inputFilterHouse}
        onChange={handleFilterHouse}
      >
        <option value="gryffindor">Gryffindor</option>
        <option value="slytherin">Slytherin</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="all">Todas</option>
      </select>
    </>
  );
};
export default FilterByHouse;
