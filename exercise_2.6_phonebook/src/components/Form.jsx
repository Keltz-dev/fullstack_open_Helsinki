const Form = ({ handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit}>
      {children}
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
