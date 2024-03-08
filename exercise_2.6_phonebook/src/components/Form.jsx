import InputField from "./InputField";

const Form = ({
  handleSubmit,
  newName,
  newNumber,
  onNameChange,
  onNumberChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <InputField text="name" value={newName} onChange={onNameChange} />
      <InputField text="number" value={newNumber} onChange={onNumberChange} />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
