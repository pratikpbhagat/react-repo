import React from 'react';
import CommonComponent from './commonComponent/CommonComponent';
import Sidebar from './sidebar/Sidebar';
import './MainPage.css';

const MainPage = () => {

    return (
        <div className="main-page">
            <div>
                <Sidebar />
            </div>
            <div>
                <CommonComponent />
            </div>
        </div>
    );
}

export default MainPage;