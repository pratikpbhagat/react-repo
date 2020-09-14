import React, { useState } from 'react';
import './App.css';
// import { StyleRoot } from 'radium';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit';

export default function App() {

  const [personState, setPersonState] = useState({
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 },
      { id: 4, name: 'Pratik', age: 33 },
    ],
    showPersons: false
  });

  function togglePersonHandler() {
    const doesShow = personState.showPersons;
    setPersonState({
      persons: personState.persons,
      showPersons: !doesShow
    })
  }

  function deletePersonHandler(personIndex) {
    const persons = personState.persons.slice();
    persons.splice(personIndex, 1);
    setPersonState({ persons: personState.persons });
  }

  function nameChangeHandler(event, id) {
    const personIndex = personState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...personState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personState.persons];
    persons[personIndex] = person;

    setPersonState({ persons: personState.persons });
  }

  // const style = {
  //   backgroundColor: 'green',
  //   color: 'white',
  //   font: 'inherit',
  //   border: '1px solid blue',
  //   padding: '8px',
  //   cursor: 'pointer'
  // }

  let persons = null;
  if (personState.showPersons) {
    persons = (
      <Persons persons={personState.persons}
        clicked={deletePersonHandler}
        changed={nameChangeHandler} />
    );
    // style.backgroundColor = 'red';
  }

  return (
    <div className="App">
      <Cockpit showPersons={personState.showPersons}
        persons={personState.persons}
        toggle={togglePersonHandler} />
      {persons}
    </div>
  );
}
