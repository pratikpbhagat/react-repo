import React from 'react';
import styles from './HeaderNavBar.module.css';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Search from '../../../common/search/Search';
import { Link } from 'react-router-dom';

const HeaderNavBar = () => {

    return (
        <nav className={styles.HeaderNavBar}>
            <ul>
                <li>
                    <Search />
                </li>
                <li>
                    <Link to='/settings'>
                        <SettingsIcon style={{ fontSize: 'xx-large' }} />
                    </Link>
                </li>
                <li>
                    <Link to='/notifications'>
                        <NotificationsIcon style={{ fontSize: 'xx-large' }} />
                    </Link>
                </li>
                <li>
                    <Link to='/my-account'>
                        <AccountCircleIcon style={{ fontSize: 'xx-large' }} />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNavBar;