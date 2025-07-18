import React from 'react';
import './MenuItem.css';
import { connect } from 'react-redux';
import { mainMenuMouseOver } from '../../../../store/actions/MainMenuActions';

const menuItem = (props) => (
    <li className="MenuItem">
        <a href={props.link} onMouseEnter={props.onMenuOver}>{props.label}</a>
    </li>
);

// https://react-redux.js.org/api/connect#mergeprops-stateprops-dispatchprops-ownprops-object
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onMenuOver: () => dispatch(mainMenuMouseOver(ownProps.link))
    }
}

export default connect(null, mapDispatchToProps)(menuItem);