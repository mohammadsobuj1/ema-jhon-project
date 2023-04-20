import React, { useContext } from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='header'>
            <img src={logo} alt="" />
        <div className='nav-bar'>
            <Link to="/"> Home</Link>
            <Link to="oders">Oders</Link>
         <Link to="inventory"> Inventory</Link>
         <Link to="login">Log In</Link>
         <Link to="/singup">Sing Up</Link>
        
     </div>
        </div>
    );
};

export default Header;


