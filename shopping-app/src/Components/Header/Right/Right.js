import React from 'react';
import Profile from '../../Profile/Profile';
import Wishlist from '../../Wishlist/Wishlist';
import Bag from '../../Bag/Bag';
import './Right.css';
import Aux from 'react-aux';

const right = (props) => (
    <Aux>
        {/* <div className="Right"> */}
        <ul className="Right__menu">
            <li><Profile /></li>
            <li><Wishlist /></li>
            <li><Bag /></li>
        </ul>
        {/* </div> */}
    </Aux>
);

export default right;