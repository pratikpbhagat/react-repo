import React from 'react';
import classes from './MenuItems.module.css';
import Aux from 'react-aux';

const menuItems = (props) => {
    let attachedClasses = [classes.NavItem, classes.NavItemClosed];
    if (props.open) {
        attachedClasses = [classes.NavItem, classes.NavItemOpen];
    }

    return (
        <Aux>
            <li className={attachedClasses.join(' ')}>
                <a href="#">Home</a>
            </li>
            <li className={attachedClasses.join(' ')}>
                <a href="#">About</a>
            </li>
            <li className={attachedClasses.join(' ')}>
                <a href="#">Services</a>
            </li>
        </Aux>
    );
};

export default menuItems;