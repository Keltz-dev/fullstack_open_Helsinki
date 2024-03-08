import { useState, useEffect } from "react";
import Form from "./components/Form";
import Persons from "./components/Persons";
import InputField from "./components/InputField";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    personsService
      .getAll()
      .then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleChangeWith = (fn) => (e) => fn(e.target.value);

  const nameInPhonebook = () => persons.find(({ name }) => name === newName);

  const resetForm = () => {
    setNewName("");
    setNewNumber("");
  };

  const createPerson = () => {
    personsService
      .create({
        name: newName,
        number: newNumber,
      })
      .then((newPerson) => {
        setPersons(persons.concat(newPerson));
        resetForm();
      })
      .catch((error) => alert(error));
  };

  const updatePerson = (previousContact) => {
    personsService
      .update(previousContact.id, {
        name: newName,
        number: newNumber,
      })
      .then((updatedPerson) => {
        setPersons(
          persons.map((p) => (p.id === previousContact.id ? updatedPerson : p))
        );
        resetForm();
      })
      .catch((error) => alert(error));
  };

  const updatePersonConfirmed = (previousContact) => {
    return window.confirm(
      `${newName} is already in your phonebook \
with the number ${previousContact.number}, \
do you want to change the number to ${newNumber}?`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const previousContact = nameInPhonebook();
    if (!previousContact) {
      createPerson();
    } else if (updatePersonConfirmed(previousContact)) {
      updatePerson(previousContact);
    }
  };

  const personsStartingWith = (query) =>
    persons.filter(({ name }) => name.startsWith(query));

  return (
    <div>
      <h2>Phonebook</h2>
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        onNameChange={handleChangeWith(setNewName)}
        onNumberChange={handleChangeWith(setNewNumber)}
      />
      <h2>Filter</h2>
      <InputField
        text="search"
        value={search}
        onChange={handleChangeWith(setSearch)}
      />

      <h2>Numbers</h2>
      <Persons search={search} personsStartingWith={personsStartingWith} />
    </div>
  );
};

export default App;
