const FilterByAlphabetic = (props) => {
  const handleFilterOrder = (ev) => {
    props.handleFilterOrder(ev.target.checked);
  };

  return (
    <div>
      {" "}
      <input
        type="checkbox"
        name="order"
        id="sort"
        value="sort"
        checked={props.inputOrder}
        onChange={handleFilterOrder}
      ></input>
      <label className="filter__label" htmlFor="">
        Ordenar alfabeticamente
      </label>
    </div>
  );
};
export default FilterByAlphabetic;
