import React from 'react';
import Logo from './logo/Logo';
import './Header.css';
import RightMenu from './rightMenu/RightMenu';

const Header = () => {

    return (
        <div className="header">
            <div className="logo">
                <Logo />
            </div>
            <div>
                <RightMenu />
            </div>
        </div>
    );
}

export default Header;