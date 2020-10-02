import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './Menu.css';

const menu = (props) => {

    let menuItems =
        [
            { link: '/men', label: 'MEN' },
            { link: '/women', label: 'WOMEN' },
            { link: '/kids', label: 'KIDS' },
            { link: '/home-living', label: 'HOME & LIVING' },
            { link: '/offers', label: 'OFFERS' }
        ];

    return (
        <div>
            <ul className="Menu">
                {menuItems.map(menuitem => (
                    <MenuItem key={menuitem.link} link={menuitem.link} label={menuitem.label} />
                ))}
            </ul>
        </div>
    );
};

export default menu;