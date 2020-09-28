import React from 'react';
import Aux from 'react-aux';
import MenuItem from './MenuItem/MenuItem';

const menuItems = (props) => {
    return (
        <Aux>
            <MenuItem link="/car-rentals" open={props.open} toggle={props.toggle}>Car Rentals</MenuItem>
            <MenuItem link="/deals" open={props.open} toggle={props.toggle}>Deals</MenuItem>
            <MenuItem link="/bookings" open={props.open} toggle={props.toggle}>Bookings</MenuItem>
            <MenuItem link="/contact-cs" open={props.open} toggle={props.toggle}>Contact Customer Service</MenuItem>
            <MenuItem link="/book-airport-taxi" open={props.open} toggle={props.toggle}>Book Airport Taxi</MenuItem>
            <MenuItem link="/wishlist" open={props.open} toggle={props.toggle}>Wishlist</MenuItem>
            <MenuItem link="/travel-communities" open={props.open} toggle={props.toggle}>Travel Communities</MenuItem>
            <MenuItem link="/travel-articles" open={props.open} toggle={props.toggle}>Travel Articles</MenuItem>
        </Aux>
    );
};

export default menuItems;