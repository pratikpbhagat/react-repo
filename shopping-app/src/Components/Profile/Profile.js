import { Avatar } from '@material-ui/core';
import React from 'react';
import './Profile.css';
import ProfileMenu from './ProfileMenu/ProfileMenu';

const profile = (props) => (
    <div>
        <div className="Profile">
            <ul>
                <li><Avatar className="Profile__orange">PB</Avatar></li>
                <li>Profile</li>
                <ProfileMenu/>
            </ul>
        </div>
    </div>
);

export default profile;