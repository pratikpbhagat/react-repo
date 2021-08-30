import React from 'react';
import './TopNavBar.css';

const TopNavBar = () => {

    return (
        <>
            <div className="top-navbar">
                <ul>
                    <li>Home</li>
                    <li>Settings</li>
                    <li>About</li>
                    <li>Logout</li>
                </ul>
            </div>
        </>
    );
}

export default TopNavBar;