import { Avatar } from '@material-ui/core';
import React from 'react';
import './Profile.css';

const profile = (props) => (
    <div>
        <div className="Profile">
            <ul>
                <li><Avatar>PB</Avatar></li>
                <li>Profile</li>
            </ul>
        </div>
    </div>
);

export default profile;