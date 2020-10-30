import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

    function menuClick() {
        alert('Menu Clicked');
    }

    function backClicked() {
        alert('Back Clicked');
    }

    return (
        <div className="sidebar">
            <div>
                <ul>
                    <li>
                        <FontAwesomeIcon
                            id="backIcon"
                            icon={faArrowLeft}
                            title="Back"
                            onClick={backClicked}
                        />
                    </li>
                    <li>
                        <FontAwesomeIcon
                            id="menuIcon"
                            icon={faBars}
                            title="Menu"
                            onClick={menuClick}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;