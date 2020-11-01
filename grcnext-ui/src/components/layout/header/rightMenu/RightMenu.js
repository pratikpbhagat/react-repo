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
                        <FontAwesomeIcon icon={faSearch} title="Search" />
                    </span>
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon icon={faHome} title="Home" />
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
                    <div className="user-menu">
                        <ul>
                            <li>Lorem Ipsum</li>
                            <li>Account Setting</li>
                            <li>Take a tour</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default RightMenu;