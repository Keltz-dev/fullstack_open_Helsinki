import Person from "./Person";

const Persons = ({ persons, search }) => {
  const personsStartingWith = (query) =>
    persons.filter(({ name }) => name.startsWith(query));


  return (
    <ul>
      {personsStartingWith(search).map(({ name, number, id }) => (
        <Person key={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default Persons;
