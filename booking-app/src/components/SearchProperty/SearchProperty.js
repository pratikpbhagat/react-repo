import React from 'react';
import Aux from 'react-aux';
import classes from './SearchProperty.module.css';

const searchProperty = (props) => (
    <Aux>
        <h3>Hi, Pratik</h3>
        <p>Search destination/property name</p>
        <div className={classes.SearchProperty}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Search</button>
        </div>
    </Aux>
);

export default searchProperty;