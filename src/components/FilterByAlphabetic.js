const FilterByAlphabetic = (props) => {
  const handleFilterOrder = (ev) => {
    props.handleFilterOrder(ev.target.checked);
  };

  return (
    <>
      <input
        type="checkbox"
        name="order"
        id="sort"
        value="sort"
        checked={props.inputOrder}
        onChange={handleFilterOrder}
      ></input>
      <label htmlFor="">Ordenar alfabeticamente</label>
    </>
  );
};
export default FilterByAlphabetic;
