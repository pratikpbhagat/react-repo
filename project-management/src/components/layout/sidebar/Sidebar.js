import React from 'react';
import styles from './Sidebar.module.css';
import SidebarMenuItems from './sidebarMenuItems/SidebarMenuItems';
// import MenuIcon from '@material-ui/icons/Menu';

const Sidebar = () => {

    return (
        <div className={styles.Sidebar}>
            {/* <div className={styles.SidebarMenuIcon}>
                <MenuIcon />
            </div> */}
            <div>
                <SidebarMenuItems />
            </div>
        </div>
    );
}

export default Sidebar;