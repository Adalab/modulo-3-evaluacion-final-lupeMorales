const FilterByAncestry = (props) => {
  const handleFilterAncestry = (ev) => {
    props.handleFilterAncestry(ev.target.value);
  };
  const renderAncestry = () => {
    const ancestrySort = props.ancestry.sort();
    return ancestrySort.map((item, index) => {
      return (
        <li className="filter__list" key={index}>
          <input
            type="checkbox"
            name="ancestry"
            value={item}
            onChange={handleFilterAncestry}
          />
          <label className="filter__text" htmlFor="ancestry">
            {" "}
            {item === "" ? "desconocido" : item}
          </label>
        </li>
      );
    });
  };

  return (
    <>
      <label className="filter__label  " htmlFor="ancestry">
        Por ancestros:
      </label>
      <ul className="list__container">{renderAncestry()}</ul>
    </>
  );
};
FilterByAncestry.defaultProps = {
  inputType: "checkbox",
};

export default FilterByAncestry;
