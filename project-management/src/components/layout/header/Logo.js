import React from 'react';
import AppLogo from '../../../images/logo/logo.jpeg';
import styles from './Logo.module.css';

const Logo = () => {

    return (
        <div>
            <img src={AppLogo} alt="Project Managenent" className={styles.Logo}/>
        </div>
    );
}

export default Logo;