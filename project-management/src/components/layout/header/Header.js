import React from 'react';
import Logo from './Logo';
import styles from './Header.module.css';
import HeaderNavBar from './headerNavBar/HeaderNavBar';

const Header = () => {

    return (
        <header className={styles.Header}>
            <div>
                <Logo />
            </div>
            <div>
                <HeaderNavBar />
            </div>
        </header>
    );
}

export default Header;