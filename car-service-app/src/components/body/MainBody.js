import React from 'react';
import CommonComponent from './common/CommonComponent';
import './MainBody.css';
import Sidebar from './sidebar/Sidebar';

const MainBody = () => {

    return (
        <>
            <div className="main-body">
                <Sidebar />
                <CommonComponent />
            </div>
        </>
    );
}

export default MainBody;