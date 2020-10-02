import React from 'react';
import './Main.css';
import ProfileMenu from '../Profile/ProfileMenu/ProfileMenu';

const main = (props) => (
    <div className="Main">
        <div className="Main__menu">
            Other menu items come over here
        </div>
        <div className="Profile__menu">
            <ProfileMenu />
        </div>
        <div className="Main__content">
            
        </div>
    </div>
);

export default main;