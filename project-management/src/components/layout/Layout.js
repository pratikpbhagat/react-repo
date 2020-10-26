import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import MainBody from './mainBody/MainBody';
import styles from './Layout.module.css';

const Layout = () => {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className={styles.LayoutBody}>
                <Sidebar />
                <MainBody />
            </div>
        </div>
    );
}

export default Layout;