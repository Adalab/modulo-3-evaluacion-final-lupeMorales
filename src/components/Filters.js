import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import FilterByAncestry from "./FilterByAncestry";
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
      <FilterByAncestry
        inputFilterAncestry={props.inputFilterAncestry}
        handleFilterAncestry={props.handleFilterAncestry}
        ancestry={props.ancestry}
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
