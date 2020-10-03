import React from 'react';
import './ProfileMenu.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions/actions';

const profileMenu = (props) => (
    <div className="ProfileMenu"
        // onMouseEnter={props.onProfileOver}
        onMouseLeave={props.onProfileOut}>
        <ul>
            <li>Welcome</li>
            <li>Orders</li>
            <li>Wishlist</li>
            <li>Gift Cards</li>
            <li>Contact Us</li>
        </ul>
    </div>
);

const mapDispatchToProps = dispatch => {
    return {
        // onProfileOver: () => dispatch({ type: 'MOUSE_ENTER' }),
        onProfileOut: () => dispatch({ type: actionTypes.PROFILE_MOUSE_OUT })
    }
};

export default connect(null, mapDispatchToProps)(profileMenu);