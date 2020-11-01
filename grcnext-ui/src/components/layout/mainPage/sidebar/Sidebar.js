import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';
import MenuItems from './menuItems/MenuItems';

const Sidebar = () => {

    let showClasses = 'show-element';

    let hideClasses = 'hide-element';

    let sidebarClass = ['sidebar', 'fullSidebar'];

    const [showMenu, setShowMenu] = useState(true);

    const [showBack, setShowBack] = useState(false);

    const [sidebarClasses, setSidebarClasses] = useState(sidebarClass.join(' '));

    const menuClick = () => {
        setShowMenu(false);
        setShowBack(true);
        sidebarClass = ['sidebar', 'collapsed-sidebar'];
        setSidebarClasses(sidebarClass.join(' '));
    }

    function backClicked() {
        setShowMenu(true);
        setShowBack(false);
        sidebarClass = ['sidebar', 'fullSidebar'];
        setSidebarClasses(sidebarClass.join(' '));
    }

    return (
        <div className={sidebarClasses}>
            <div>
                <ul>
                    <li className={showBack ? showClasses : hideClasses}>
                        <FontAwesomeIcon
                            id="backIcon"
                            icon={faArrowRight}
                            title="Back"
                            onClick={backClicked}
                        />
                    </li>
                    <li className={showMenu ? showClasses : hideClasses}>
                        <FontAwesomeIcon
                            id="menuIcon"
                            icon={faBars}
                            title="Menu"
                            onClick={menuClick}
                        />
                    </li>
                </ul>
            </div>
            <div className="sidebar-menu-items">
                <MenuItems menuClicked={showMenu} />
            </div>
        </div>
    );
}

export default Sidebar;