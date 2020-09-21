import React, { Component } from 'react';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Aux from 'react-aux';

class Toolbar extends Component {

    drawerToggleClicked() {
        console.log('Drawer Toggle Clicked');
    }

    render() {
        return (
            <Aux>
                <DrawerToggle clicked={this.drawerToggleClicked} />
            </Aux>
        );
    }
}

export default Toolbar;
