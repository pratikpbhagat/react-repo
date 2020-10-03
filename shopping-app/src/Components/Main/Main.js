import React from 'react';
import classes from './Main.module.css';
import ProfileMenu from '../Profile/ProfileMenu/ProfileMenu';
import { connect } from 'react-redux';

const main = (props) => {
    let assignedClasses = [classes.Profile__menu, classes.Profile__menuclosed];
    if (props.profileShow) {
        assignedClasses = [classes.Profile__menu];
    }
    return (
        <div className={classes.Main}>
            <div className={classes.Main__menu}>
                Other menu items come over here
                </div>
            <div className={assignedClasses.join(' ')}>
                <ProfileMenu />
            </div>
            <div className={classes.Main__content}>
                The main content of the page lies over here and you can visit any of the pages from here
                </div>
        </div>
    );
}

const mapStateToProps = state => {
    return { profileShow: state.profileShow };
};

export default connect(mapStateToProps, null)(main);