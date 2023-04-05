import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
        <div className='nav-bar'>
            <Link to="/"> Home</Link>
            <Link to="oders">Oder</Link>
         <Link to="inventory"> Inventory</Link>
         <Link to="login">Log In</Link>
     </div>
        </div>
    );
};

export default Header;


