const FilterByAncestry = (props) => {
  const handleFilterAncestry = (ev) => {
    props.handleFilterAncestry(ev.target.value);
  };
  const renderAncestry = () => {
    return props.ancestry.map((item, index) => {
      return (
        <li key={index}>
          <input
            type="checkbox"
            name="ancestry"
            value={item}
            onChange={handleFilterAncestry}
          />
          <label htmlFor="ancestry">
            {" "}
            {item === "" ? "desconocido" : item}
          </label>
        </li>
      );
    });
  };

  return (
    <>
      <label htmlFor="ancestry">Por ancestros:</label>
      <ul>{renderAncestry()}</ul>
    </>
  );
};
export default FilterByAncestry;
