import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.toggle ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
`;


const cockpit = (props) => {

    const assignedClasses = [];
    if (props.persons.length <= 3) {
        assignedClasses.push('red');
    }
    if (props.persons.length <= 1) {
        assignedClasses.push('bold');
    }

    return (
        <div>
            <h1>Hi, I'am a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <StyledButton onClick={props.toggle}>Toggle Persons</StyledButton>
        </div>
    );
}

export default cockpit;