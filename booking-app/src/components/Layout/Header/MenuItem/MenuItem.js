import React from 'react';
import classes from './MenuItem.module.css';
import { Link } from 'react-router-dom';

const menuItem = (props) => {
    let attachedClasses = [classes.NavItem, classes.NavItemClosed];
    if (props.open) {
        attachedClasses = [classes.NavItem, classes.NavItemOpen];
    }
    return (
        <li className={attachedClasses.join(' ')}>
            <Link to={props.link} onClick={props.toggle}>{props.children}</Link>
        </li>
    );
};

export default menuItem;