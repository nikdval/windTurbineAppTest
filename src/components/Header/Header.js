import React from 'react';
import logo from '../../assets/images/header-logo-white.svg';
import './Header.scss';

const Header = (props) => {
    return (
        <header className="header">
            <img src={logo} className="header-logo" alt="logo" />
        </header>
    )
}

export default Header;