import React from 'react';
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <li className={classes.Toggle}>
        <span className={classes.Bars} onClick={props.toggle}></span>
    </li>
);

export default toolbar;
