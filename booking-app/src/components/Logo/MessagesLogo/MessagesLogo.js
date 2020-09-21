import React from 'react';
// import messagesIcon from '../../../assets/images/message-icon.png';
import classes from './MessagesLogo.module.css';

const messagesLogo = (props) => (
    <div className={classes.MessagesLogo} style={{ height: props.height }}>
        {/* Messages<img src={messagesIcon} alt='Messages Logo' /> */}
        Messages
    </div>
);

export default messagesLogo;