import React from 'react';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import './Wishlist.css';

const wishlist = (props) => (
    <div className="Wishlist">
        <ul>
            <li><BeenhereIcon style={{ fontSize: 'xx-large'}} /></li>
            <li>Wishlist</li>
        </ul>
    </div>
);

export default wishlist;