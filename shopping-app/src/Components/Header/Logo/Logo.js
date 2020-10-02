import React from 'react';
import LogoIcon from '../../../assets/images/logo/logo.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logo">
        <img src={LogoIcon} alt="Myntra.com" style={{ width: 80 }} />
    </div>
);

export default logo;