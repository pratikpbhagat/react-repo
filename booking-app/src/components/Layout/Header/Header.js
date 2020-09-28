import React, { Component } from 'react';
import Aux from 'react-aux';
import classes from './Header.module.css';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';
// import Messages from './Messages/Messages';
// import Notifications from './Notifications/Notifications';
// import Toolbar from '../../Navigation/Toolbar/Toolbar';
// import AppLogo from '../../Logo/AppLogo/AppLogo';

class Header extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Aux>
                <div className={classes.Header}>
                    <nav>
                        <ul className={classes.Menu}>
                            <li className={classes.Logo}>
                                <Link to="/" onClick={this.sideDrawerToggleHandler}>Booking.com</Link>
                            </li>
                            <MenuItems open={this.state.showSideDrawer} toggle={this.sideDrawerToggleHandler}/>
                            <li className={classes.Button}>
                                <Link to="/login">Login</Link>
                            </li>
                            <li className={classes.Button}>
                                <Link to="/sign-up">Sign Up</Link>
                            </li>
                            <li className={classes.Toggle}>
                                <span className={classes.Bars} onClick={this.sideDrawerToggleHandler}></span>
                            </li>
                        </ul>
                    </nav>
                    {/* <Toolbar />
        <AppLogo />
        <Messages />
        <Notifications /> */}
                </div>
            </Aux>
        );
    }
};

export default Header;