import React from 'react';
import classes from './Main.module.css';
import ProfileMenu from '../Profile/ProfileMenu/ProfileMenu';
import { connect } from 'react-redux';
import { mainMenuMouseOut } from '../../store/actions/MainMenuActions';

const main = (props) => {
    let profileMenuClasses = [classes.Profile__menu, classes.Profile__menuClosed];
    if (props.profileShow) {
        profileMenuClasses = [classes.Profile__menu];
    }

    let mainMenuClasses = [classes.Main__menu, classes.Main__menuClosed];
    if (props.showMenu) {
        mainMenuClasses = [classes.Main__menu];
    }

    let menuItem = null;

    if (props.menuItem === '/men') {
        menuItem = <p>Mens items will be displayed here</p>;
    }
    if (props.menuItem === '/wommen') {
        menuItem = <p>Womens items will be displayed here</p>;
    }
    if (props.menuItem === '/kids') {
        menuItem = <p>Kids items will be displayed here</p>;
    }
    if (props.menuItem === '/home-living') {
        menuItem = <p>Home Living items will be displayed here</p>;
    }
    if (props.menuItem === '/offers') {
        menuItem = <p>Offers will be displayed here</p>;
    }

    return (
        <div className={classes.Main}>
            <div className={mainMenuClasses.join(' ')} onMouseLeave={props.onMenuOut}>
                {menuItem}
            </div>
            <div className={profileMenuClasses.join(' ')}>
                <ProfileMenu />
            </div>
            <div className={classes.Main__content}>
                The main content of the page lies over here and you can visit any of the pages from here
                </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        profileShow: state.profile.profileShow,
        showMenu: state.menu.showMenu,
        menuItem: state.menu.menuItem
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onMenuOut: () => dispatch(mainMenuMouseOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(main);