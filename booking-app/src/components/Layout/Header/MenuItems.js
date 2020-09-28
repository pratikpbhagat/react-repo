import React from 'react';
import classes from './MenuItems.module.css';
import Aux from 'react-aux';
import { Link } from 'react-router-dom';

const menuItems = (props) => {
    let attachedClasses = [classes.NavItem, classes.NavItemClosed];
    if (props.open) {
        attachedClasses = [classes.NavItem, classes.NavItemOpen];
    }

    return (
        <Aux>
            <li className={attachedClasses.join(' ')}>
                <Link to="/bookings">Bookings</Link>
            </li>
            <li className={attachedClasses.join(' ')}>
                <Link to="/contact-cs">Contact Customer Service</Link>
            </li>
            <li className={attachedClasses.join(' ')}>
                <Link to="/car-rentals">Car Rentals</Link>
            </li>
            <li className={attachedClasses.join(' ')}>
                <Link to="/deals">Deals</Link>
            </li>
            <li className={attachedClasses.join(' ')}>
                <Link to="/book-airport-taxi">Book Airport Taxi</Link>
            </li>
            <li className={attachedClasses.join(' ')}>
                <Link to="/wishlist">Wishlist</Link>
            </li>
            <li className={attachedClasses.join(' ')}>
                <Link to="/travel-communities">Travel Communities</Link>
            </li>
            <li className={attachedClasses.join(' ')}>
                <Link to="/travel-articles">Travel Articles</Link>
            </li>
        </Aux>
    );
};

export default menuItems;