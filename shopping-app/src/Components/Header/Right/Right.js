import React from 'react';
import Profile from '../../Profile/Profile';
import Wishlist from '../../Wishlist/Wishlist';
import Bag from '../../Bag/Bag';
import './Right.css';

const right = (props) => (
    <div>
        <div className="Right">
            <ul className="Right__menu">
                <li className="Profile__button"><Profile /></li>
                <li><Wishlist /></li>
                <li><Bag /></li>
            </ul>
        </div>
    </div>
);

export default right;