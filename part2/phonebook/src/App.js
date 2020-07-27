import React, { useState, useEffect } from "react";
import Person from "./components/person";
import PersonForm from "./components/personForm";
import Filter from "./components/filter";
import axios from "axios";
import Notification from "./components/notification";


let BASE_URL = "http://localhost:3001/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);
  

  const handlePhonebookChange = (e) => {
    //console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    //console.log(e.target.value);
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    //console.log(e.target.value);
    setFilter(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((response) => {
        setPersons(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const addContact = (e) => {
    e.preventDefault();
    const newContact = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    let exist = persons.map((p) => p.name);
    if (exist.includes(newContact.name)) {
      const updateContact = {
        name: newName,
        number: newNumber,
      };
      if (
        window.confirm(
          `${newContact.name} is already added to phonebook. Update the number?`
        )
      ) {
        let id = persons.filter((p) => {
          return p.name === newContact.name;
        });
        axios
          .put(`${BASE_URL}/${id[0].id}`, updateContact)
          .then((res) => {
            setMessage({
              text: `Contact '${newContact.name}' updated`,
              type: "success",
            });
            setTimeout(() => {
              setMessage(null);
            }, 3000);
          })
          .catch((e) => console.log(e));
        let pIndex = persons.findIndex((p) => p.id === id[0].id);
        persons[pIndex].number = newContact.number;
      }
    } else {
      axios
        .post(`${BASE_URL}`, newContact)
        .then((res) => {
          setMessage({
            text: `Contact '${newContact.name}' added`,
            type: "success",
          });
          setTimeout(() => {
            setMessage(null);
          }, 3000);
        })
        .catch((e) => {
          console.log(e);
        });
      setPersons(persons.concat(newContact));
    }
    setNewName("");
    setNewNumber("");
  };

  const deleteContact = (id, name) => {
    if (window.confirm(`Do you want to delete ${name}`)) {
      console.log(id, name);
      axios
        .delete(`${BASE_URL}/${id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          setMessage({
            text: `Contact '${name}' was already removed from server`,
            type: "fail",
          });
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        });
      let newPersons = persons.filter((p) => p.id !== id);
      setPersons(newPersons);
    }
  };
  const personsToShow = filter
    ? persons.filter(
        (p) => p.name.toLowerCase().search(filter.toLowerCase()) !== -1
      )
    : persons;

  return (
    <div>
      <Notification message={message} />
      <h1>Phonebook Filter</h1>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h1>Add a new</h1>
      <PersonForm
        addContact={addContact}
        newName={newName}
        newNumber={newNumber}
        handlePhonebookChange={handlePhonebookChange}
        handleNumberChange={handleNumberChange}
      />
      <h1>Numbers</h1>
      <div>
        <Person personsToShow={personsToShow} deleteContact={deleteContact} />
      </div>
    </div>
  );
};

export default App;
