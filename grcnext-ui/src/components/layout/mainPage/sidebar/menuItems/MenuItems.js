import React from 'react';
import MenuItem from "./menuItem/MenuItem";

const MenuItems = (props) => {

    let menuItems = [
        { link: '/create', imgSrc: '', label: 'Risk and Control Self Assessment' },
        { link: '/risk-key', imgSrc: '', label: 'Risk Key Indicators' },
        { link: '/loss-data', imgSrc: '', label: 'Loss Data Management' },
        { link: '/todo', imgSrc: '', label: 'Operational Capital Charge' },
        { link: '/', imgSrc: '', label: 'DashBoard' }
    ];

    return (
        <div>
            <ul>
                {menuItems.map(menu => (
                    <MenuItem
                        key={menu.link}
                        link={menu.link}
                        label={menu.label}
                        menuClicked={props.menuClicked} />
                ))}
            </ul>
        </div>
    );
}

export default MenuItems;