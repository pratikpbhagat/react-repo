import React from 'react';
import './MenuItem.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../store/actions/actions';

const menuItem = (props) => (
    <li className="MenuItem">
        <a href={props.link} onMouseEnter={props.onMenuOver}>{props.label}</a>
    </li>
);

const mapDispatchToProps = dispatch => {
    return {
        onMenuOver: () => dispatch({ type: actionTypes.MAIN_MENU_MOUSE_OVER })
    }
}

export default connect(null, mapDispatchToProps)(menuItem);