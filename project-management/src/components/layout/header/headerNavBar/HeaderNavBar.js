import React from 'react';
import styles from './HeaderNavBar.module.css';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Search from '../../../common/search/Search';

const HeaderNavBar = () => {

    return (
        <nav className={styles.HeaderNavBar}>
            <ul>
                <li>
                    <Search />
                </li>
                <li>
                    <SettingsIcon style={{ fontSize: 'xx-large'}}/>
                </li>
                <li>
                    <NotificationsIcon style={{ fontSize: 'xx-large'}}/>
                </li>
                <li>
                    <AccountCircleIcon style={{ fontSize: 'xx-large'}}/>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNavBar;