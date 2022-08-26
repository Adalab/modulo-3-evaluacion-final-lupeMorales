import FilterByName from "./FilterByName";
const Filters = (props) => {
  return (
    <FilterByName
      inputFilterName={props.inputFilterName}
      handleFilterName={props.handleFilterName}
    />
  );
};
export default Filters;
