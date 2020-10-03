import { Avatar } from '@material-ui/core';
import React from 'react';
import './Profile.css';

const profile = (props) => {

    const profileHovered = () => (
        console.log('Profile Hovered')
    );

    const profileHoveredOut = () => (
        console.log('Profile Out')
    );

    return (
        <div>
            <div className="Profile" onMouseEnter={profileHovered} onMouseLeave={profileHoveredOut}>
                <ul>
                    <li><Avatar>PB</Avatar></li>
                    <li>Profile</li>
                </ul>
            </div>
        </div>
    );
};

export default profile;