import React from 'react';
import './Header.css';
import Logo from './logo/Logo';
import TopNavBar from './top-navbar/TopNavBar';

const Header = () => {

    return (
        <>
            <div className="header">
                <Logo />
                <TopNavBar/>
            </div>
        </>
    );
}

export default Header;