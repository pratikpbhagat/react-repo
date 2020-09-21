import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../ui/Backdrop/Backdrop';

const sideDrawer = (props) => (
    <div>
        <Backdrop />
        <nav>
            <NavigationItems />
        </nav>
    </div>
);

export default sideDrawer;