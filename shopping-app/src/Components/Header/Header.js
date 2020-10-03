import React from 'react';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Search from './Search/Search';
import Right from './Right/Right';
import './Header.css';

const header = (props) => (
    <div className="Header">
        <Logo />
        <header className="Header__menu">
            <div className="Header__left">
                <Menu />
            </div>
            <div className="Header__middle">
                <Search />
            </div>
            {/* <div className="Header__right"> */}
            <Right />
            {/* </div> */}
        </header>
    </div>
);

export default header;