import React from 'react';
// import styled from 'styled-components';
import Main from '../Main/Main';
import cockpitClasses from './Cockpit.css';

// const StyledButton = styled.button`
//   background-color: ${props => props.toggle ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
// `;


const cockpit = (props) => {

    let btnClass = '';

    if (props.showPersons) {
        btnClass = cockpitClasses.Red;
    }

    const assignedClasses = [];
    if (props.persons.length <= 3) {
        assignedClasses.push('red');
    }
    if (props.persons.length <= 1) {
        assignedClasses.push('bold');
    }

    return (
        <div className={cockpitClasses.Cockpit}>
            <h1>Hi, I'am a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            {/* <StyledButton onClick={props.toggle} toggle={props.showPersons} >Toggle Persons</StyledButton> */}
            <button className={btnClass} onClick={props.toggle} toggle={props.showPersons} >Toggle Persons</button>
            <Main color={props.showPersons} />
        </div>
    );
}

export default cockpit;