import "../styles/components/Filters.scss";
import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import FilterByAncestry from "./FilterByAncestry";
import FilterByAlphabetic from "./FilterByAlphabetic";
import FilterByActor from "./FilterByActor";

const Filters = (props) => {
  const reset = (ev) => {
    ev.preventDefault();
    props.resetForm();
  };
  return (
    <form className="filter">
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
      <FilterByActor
        inputFilterActor={props.inputFilterActor}
        handleFilterActor={props.handleFilterActor}
      />
      <FilterByAlphabetic
        inputOrder={props.inputOrder}
        handleFilterOrder={props.handleFilterOrder}
      />

      <button className="button" type="button" onClick={reset}>
        reset
      </button>
    </form>
  );
};
export default Filters;
