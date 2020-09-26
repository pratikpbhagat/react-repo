import React from 'react';
import Aux from 'react-aux';
import classes from './SearchProperty.module.css';

const searchProperty = (props) => (
    <Aux>
        <div className={classes.SearchProperty}>
            <h2>Hi, Pratik</h2>
            <p>Search destination/property name</p>
            <div>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button>Search</button>
            </div>
        </div>
        <div className={classes.SPFooter}>
            <label>I'm travelling for work</label>
            <input type="checkbox" value="test" />
        </div>
    </Aux>
);

export default searchProperty;