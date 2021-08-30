import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../../assets/images/car-service-logo.jpg';
import './Logo.css';

const Logo = () => {

    return (
        <>
            <div className="logo">
                <Link to='/'>
                    <img className="logo-image" src={LogoImg} alt="Car Service App" />
                </Link>
            </div>
        </>
    );
}

export default Logo;