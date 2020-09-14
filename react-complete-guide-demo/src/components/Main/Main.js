import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: ${props => props.changed ? 'yellow' : 'blue'};
`;

const main = (props) => {
    return (
        <div>
            <StyledDiv changed={props.color}><h1>This is the main area</h1></StyledDiv>
        </div>
    );
}

export default main;