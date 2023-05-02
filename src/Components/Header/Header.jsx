import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import image from '../../assets/pic/111.png'

const Header = () => {
    return (
        <nav className='navbar-container'>
            <div>
                <img className='image' src={image} alt="" />
                <h2 className='title-bar'>Food Hunter</h2>
            </div>
            <div className='link'>
                <Link className='general'  to="/">Home</Link>
                <Link className='general' to="/blog">Blog</Link>
                <Link className='general' to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;