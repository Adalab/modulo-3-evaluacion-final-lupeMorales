import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
const Filters = (props) => {
  const reset = (ev) => {
    ev.preventDefault();
    props.reset();
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
      <button type="button" onClick={reset}>
        <i className="fa-regular fa-trash-can"></i>
        reset
      </button>
    </form>
  );
};
export default Filters;
