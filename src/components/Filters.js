import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
const Filters = (props) => {
  return (
    <main>
      <form>
        <FilterByName
          inputFilterName={props.inputFilterName}
          handleFilterName={props.handleFilterName}
        />
        <FilterByHouse
          inputFilterHouse={props.inputFilterHouse}
          handleFilterHouse={props.handleFilterHouse}
        />
      </form>
    </main>
  );
};
export default Filters;
