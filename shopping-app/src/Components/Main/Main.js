import React, { Component } from 'react';
import './Main.css';
import ProfileMenu from '../Profile/ProfileMenu/ProfileMenu';

class Main extends Component {
    render() {
        return (
                <div className="Main">
                    <div className="Main__menu">
                        Other menu items come over here
                </div>
                <div className="Profile__menu">
                    <ProfileMenu />
                </div>
                <div className="Main__content">
                    The main content of the page lies over here and you can visit any of the pages from here
                </div>
            </div>
        );
    }
}

export default Main;