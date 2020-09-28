import React from 'react';
import Aux from 'react-aux';
import MenuItem from './MenuItem/MenuItem';

const menuItems = (props) => {
    let menuItems = [
        { link: '/car-rentals', label: 'Car Rentals' },
        { link: '/deals', label: 'Deals' },
        { link: '/bookings', label: 'Bookings' },
        { link: '/contact-cs', label: 'Contact Customer Service' },
        { link: '/book-airport-taxi', label: 'Book Airport Taxi' },
        { link: '/wishlist', label: 'Wishlist' },
        { link: '/travel-communities', label: 'Travel Communities' },
        { link: '/travel-articles', label: 'Travel Articles' },
        { link: '/your-contributions', label: 'Your Contributions' }
    ];
    return (
        <Aux>
            {
                menuItems.map(item => (
                    <MenuItem key={item.link}
                        link={item.link}
                        open={props.open}
                        toggle={props.toggle}>
                        {item.label}
                    </MenuItem>
                ))
            }
        </Aux>
    );
};

export default menuItems;