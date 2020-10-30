import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import './RightMenu.css';

const RightMenu = () => {

    return (
        <div className="right-menu">
            <ul>
                <li>
                    <span>
                        <FontAwesomeIcon icon={faSearch} title="Settings" />
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon icon={faHome } title="Home" />
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon icon={faBell} title="Notifications" />
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon icon={faUser} title="User" />
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default RightMenu;