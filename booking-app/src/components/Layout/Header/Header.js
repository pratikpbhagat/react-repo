import React from 'react';
import classes from './Header.module.css';
import Messages from './Messages/Messages';
import Notifications from './Notifications/Notifications';
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import AppLogo from '../../Logo/AppLogo/AppLogo';

const header = (props) => (
    <div className={classes.Header}>
        <Toolbar />
        <AppLogo />
        <Messages />
        <Notifications />
    </div>
);

export default header;