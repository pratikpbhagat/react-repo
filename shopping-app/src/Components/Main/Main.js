import React from 'react';
import classes from './Main.module.css';
import ProfileMenu from '../Profile/ProfileMenu/ProfileMenu';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';

const main = (props) => {
    let profileMenuClasses = [classes.Profile__menu, classes.Profile__menuClosed];
    if (props.profileShow) {
        profileMenuClasses = [classes.Profile__menu];
    }

    let mainMenuClasses = [classes.Main__menu, classes.Main__menuClosed];
    if (props.showMenu) {
        mainMenuClasses = [classes.Main__menu];
    }

    return (
        <div className={classes.Main}>
            <div className={mainMenuClasses.join(' ')} onMouseLeave={props.onMenuOut}>
                Other menu items come over here
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
        showMenu: state.menu.showMenu
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onMenuOut: () => dispatch({ type: actionTypes.MAIN_MENU_MOUSE_OUT })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(main);