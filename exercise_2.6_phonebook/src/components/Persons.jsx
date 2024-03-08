import Person from "./Person";

const Persons = ({ personsStartingWith, search }) => {
  return (
    <ul>
      {personsStartingWith(search).map(({ name, number, id }) => (
        <Person key={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default Persons;
