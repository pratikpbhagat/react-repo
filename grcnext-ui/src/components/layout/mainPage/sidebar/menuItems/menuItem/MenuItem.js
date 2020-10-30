import React from 'react';
import { Link } from 'react-router-dom';
import MenuLogo from '../../../../../../images/menuitems/BCM.svg'
import './MenuItem.css';

const MenuItem = (props) => {

    return (
        <div className="menu-item-link">
            <ul>
                <li>
                    <img src={MenuLogo} alt={props.label} />
                </li>
                <li>{props.label}</li>
            </ul>
        </div>
    );
}

export default MenuItem;