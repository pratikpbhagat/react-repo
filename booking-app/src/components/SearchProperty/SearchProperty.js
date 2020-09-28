import React from 'react';
import Aux from 'react-aux';
import classes from './SearchProperty.module.css';

const searchProperty = (props) => (
    <Aux>
        <div className={classes.SearchProperty}>
            <h2>Hi, Pratik</h2>
            <p>Search destination/property name</p>
            <div>
                <ul>
                    <li className={classes.WhereInput}><input type="text" /></li>
                    <li className={classes.DateInput}><input type="text" /></li>
                    <li className={classes.RoomInput}><input type="text" /></li>
                    <li><button>Search</button></li>
                </ul>
            </div>
        </div>
        <div className={classes.SPFooter}>
            <ul>
                <li>
                    <label>I'm travelling for work</label>
                </li>
                <li>
                    <input type="checkbox" value="test" />
                </li>
            </ul>
        </div>
    </Aux>
);

export default searchProperty;