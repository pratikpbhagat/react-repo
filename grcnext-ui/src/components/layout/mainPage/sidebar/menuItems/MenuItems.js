import React from 'react';
import MenuItem from "./menuItem/MenuItem";

const MenuItems = () => {

    let menuItems = [
        { link: '/create', imgSrc: '', label: 'Risk and Control Self Assessment' },
        { link: '/risk-key', imgSrc: '', label: 'Risk Key Indicators' },
        { link: '/create', imgSrc: '', label: 'Loss Data Management' },
        { link: '/todo', imgSrc: '', label: 'Operational Capital Charge' },
        { link: '/', imgSrc: '', label: 'DashBoard' }
    ];

    return (
        <div>
            <ul>
                {menuItems.map(menu => (
                    <MenuItem
                        link={menu.link}
                        label={menu.label} />
                ))}
            </ul>
        </div>
    );
}

export default MenuItems;