import { Avatar } from '@material-ui/core';
import React from 'react';
import './Profile.css';
import { connect } from 'react-redux';
// import * as actionTypes from '../../store/actions/actions';
import { profileMouseOver, profileMouseOut } from '../../store/actions/ProfileActions';

const profile = (props) => {
    return (
        <div className="Profile"
            onMouseEnter={props.onProfileOver}>
            <ul>
                <li><Avatar>PB</Avatar></li>
                <li>Profile</li>
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return { profileShow: state.profile.profileShow };
};

const mapDispatchToProps = dispatch => {
    return {
        onProfileOver: () => dispatch(profileMouseOver()),
        onProfileOut: () => dispatch(profileMouseOut())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(profile);