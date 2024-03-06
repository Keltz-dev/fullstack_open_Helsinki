import { useState } from "react";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newId, setNewId] = useState(persons.length + 1);
  const [search, setSearch] = useState("");

  const handleChangeWith = (fn) => (e) => fn(e.target.value);

  const resetFormAndIncrementId = () => {
    setNewName("");
    setNewNumber("");
    setNewId(newId + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numberNotInPhonebook = !persons.find(
      ({ number }) => number === newNumber
    );
    if (numberNotInPhonebook) {
      setPersons(
        persons.concat({
          name: newName,
          number: newNumber,
          id: newId,
        })
      );
      resetFormAndIncrementId();
    } else {
      alert("Hammwa");
    }
  };

  const personsStartingWith = (query) =>
    persons.filter(({ name }) => name.startsWith(query));

  return (
    <div>
      <h2>Phonebook</h2>
      <Persons
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handleChangeWithSetNewName={handleChangeWith(setNewName)}
        handleChangeWithSetNewNumber={handleChangeWith(setNewNumber)}
      />
      <h2>Filter</h2>
      <input value={search} onChange={handleChangeWith(setSearch)} />

      <h2>Numbers</h2>
      <ul>
        {personsStartingWith(search).map(({ name, number, id }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
