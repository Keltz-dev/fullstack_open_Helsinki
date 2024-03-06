const Persons = ({
  handleSubmit,
  newName,
  newNumber,
  handleChangeWithSetNewName,
  handleChangeWithSetNewNumber,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:
        <input value={newName} onChange={handleChangeWithSetNewName} />
      </div>
      <div>
        number:
        <input value={newNumber} onChange={handleChangeWithSetNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Persons;
