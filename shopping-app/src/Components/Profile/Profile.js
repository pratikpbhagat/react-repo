import { Avatar } from '@material-ui/core';
import React from 'react';
import './Profile.css';
import { connect } from 'react-redux';

const profile = (props) => {
    return (
        <div>
            <div className="Profile" onMouseEnter={props.onProfileOver} onMouseLeave={props.onProfileOut}>
                <ul>
                    <li><Avatar>PB</Avatar></li>
                    <li>Profile</li>
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { profileShow: state.profileShow };
};

const mapDispatchToProps = dispatch => {
    return {
        onProfileOver: () => dispatch({ type: 'MOUSE_ENTER' }),
        onProfileOut: () => dispatch({ type: 'MOUSE_OUT' })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(profile);