const FilterByActor = (props) => {
  const handleFilterActor = (ev) => {
    props.handleFilterActor(ev.target.value);
  };

  return (
    <>
      <label className="filter__label">Filtrar por actor:</label>
      <input
        type="text"
        value={props.inputFilterActor}
        onChange={handleFilterActor}
        className="filter__input"
        name="searchActor"
        placeholder="actor..."
      ></input>
    </>
  );
};

export default FilterByActor;
