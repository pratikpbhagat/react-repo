import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import './RightMenu.css';

const RightMenu = () => {

    let userMenuClasses = ['user-menu', 'user-menu-hide'];

    const [userMenuClicked, isUserMenuClicked] = useState(false);

    const [showUserMenu, setShowUserMenu] = useState(userMenuClasses.join(' '));

    const userMenuOpen = () => {
        isUserMenuClicked(!userMenuClicked);
        if (userMenuClicked) {
            userMenuClasses = ['user-menu', 'user-menu-show'];
        } else {
            userMenuClasses = ['user-menu', 'user-menu-hide'];
        }
        setShowUserMenu(userMenuClasses.join(' '));
    }

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
                <li onMouseEnter={userMenuOpen} onMouseLeave={userMenuOpen}>
                    <span>
                        <FontAwesomeIcon icon={faUser} title="User" />
                    </span>
                    <div className={showUserMenu}>
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