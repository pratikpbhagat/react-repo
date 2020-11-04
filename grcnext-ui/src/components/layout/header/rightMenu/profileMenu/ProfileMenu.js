import React from 'react';

const ProfileMenu = (props) => {

    return (
        <div className={props.className}>
            <ul>
                <li>Lorem Ipsum</li>
                <li>Account Setting</li>
                <li>Take a tour</li>
                <li>Logout</li>
            </ul>
        </div>
    );
}

export default ProfileMenu;