import React from 'react';
import Header from './header/Header';
import MainPage from './mainPage/MainPage';

const Layout = () => {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <MainPage />
            </div>
        </div>
    );
}

export default Layout;