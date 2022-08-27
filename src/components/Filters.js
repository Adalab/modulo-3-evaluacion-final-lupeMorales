import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import FilterByAlphabetic from "./FilterByAlphabetic";
const Filters = (props) => {
  const reset = (ev) => {
    ev.preventDefault();
    props.resetForm();
  };
  return (
    <form>
      <FilterByName
        inputFilterName={props.inputFilterName}
        handleFilterName={props.handleFilterName}
      />
      <FilterByHouse
        inputFilterHouse={props.inputFilterHouse}
        handleFilterHouse={props.handleFilterHouse}
      />
      <FilterByAlphabetic
        inputOrder={props.inputOrder}
        handleFilterOrder={props.handleFilterOrder}
      />

      <button type="button" onClick={reset}>
        <i className="fa-regular fa-trash-can"></i>
        reset
      </button>
    </form>
  );
};
export default Filters;
