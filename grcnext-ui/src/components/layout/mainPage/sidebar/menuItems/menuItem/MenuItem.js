import React from 'react';
import { Link } from 'react-router-dom';
import MenuLogo from '../../../../../../images/menuitems/BCM.svg'
import './MenuItem.css';

const MenuItem = (props) => {

    let showClasses = 'show-item';

    let hideClasses = 'hide-item';

    let imgPath = '../../../../../../images/menuitems/' + props.imgSrc + '.svg';
    return (
        <Link to={props.link} className="menu-item-link">
            <ul>
                <li>
                    <img src={MenuLogo} alt={props.label} />
                </li>
                <li>
                    <span className={props.menuClicked ? showClasses : hideClasses}>{props.label}</span>
                </li>
            </ul>
        </Link>
    );
}

export default MenuItem;