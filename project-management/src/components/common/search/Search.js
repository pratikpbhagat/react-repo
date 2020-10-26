import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styles from './Search.module.css';
const Search = () => {

    return(
        <div className={styles.Search}>
            <SearchIcon/>
            <input placeholder="Search" />
        </div>
    );
}

export default Search;