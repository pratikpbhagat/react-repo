import React, { Component } from 'react';
import Aux from 'react-aux';
import classes from './Header.module.css';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';
import Toolbar from '../../Navigation/Toolbar/Toolbar';

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
                                <Link to="/" onClick={this.state.showSideDrawer ? this.sideDrawerToggleHandler : null}>Booking.com</Link>
                            </li>
                            <MenuItems open={this.state.showSideDrawer} toggle={this.sideDrawerToggleHandler} />
                            <li className={classes.Button}>
                                <Link to="/login">Login</Link>
                            </li>
                            <li className={classes.Button}>
                                <Link to="/sign-up">Sign Up</Link>
                            </li>
                            <Toolbar toggle={this.sideDrawerToggleHandler}/>
                        </ul>
                    </nav>
                </div>
            </Aux>
        );
    }
};

export default Header;