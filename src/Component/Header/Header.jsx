import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
        <div className='nav-bar'>
            <a href="">Oder</a>
            <a href="">OderReview</a>
            <a href="">Manage Inventory</a>
            <a href="">Log In</a>
        </div>
        </div>
    );
};

export default Header;


