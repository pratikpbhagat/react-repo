import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Search.css';

const search = (props) => (
    <div className="Search">
        <SearchIcon/>
        <input placeholder="Search for products, brands and more" />
    </div>
);

export default search;