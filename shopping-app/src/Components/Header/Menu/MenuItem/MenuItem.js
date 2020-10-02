import React from 'react';
import './MenuItem.css';

const menuItem = (props) => (
    <li className="MenuItem">
        <a href={props.link}>{props.label}</a>
    </li>
);

export default menuItem;