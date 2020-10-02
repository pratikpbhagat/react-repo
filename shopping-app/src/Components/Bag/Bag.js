import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Bag.css';

const bag = (props) => (
    <div className="Bag">
        <ul>
            <li><ShoppingBasketIcon style={{ fontSize: 'xx-large'}}/></li>
            <li>Bag</li>
        </ul>
    </div>
);

export default bag;