import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import { StyleRoot } from 'radium';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.toggle ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
`;

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
      <div>
        {
          personState.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => deletePersonHandler(index)}
              changed={(event) => nameChangeHandler(event, index)} />
          })
        }
      </div>
    );
    // style.backgroundColor = 'red';
  }

  const classes = [];
  if (personState.persons.length <= 3) {
    classes.push('red');
  }
  if (personState.persons.length <= 1) {
    classes.push('bold');
  }

  return (
    <StyleRoot>
      <div className="App">
        <h1>Hi, I'am a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <StyledButton onClick={togglePersonHandler} toggle={personState.showPersons}>Toggle Persons</StyledButton>
        {persons}
      </div>
    </StyleRoot>
  );
}
