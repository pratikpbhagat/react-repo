import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {

    return (
        <>
            <div className="sidebar">
                <ul>
                    <li><Link to='/form'>Form</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;