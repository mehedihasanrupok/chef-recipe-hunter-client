import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import image from '../../assets/pic/111.png'
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

    const {user, logout, updateUser} = useContext(AuthContext);

    const handleLogOut = () =>{
        logout()
        .then(result =>{})
        .catch(error => console.error(error))
     }

    return (
        <nav className='navbar-container'>
            <div>
                <img className='image' src={image} alt="" />
                <h2 className='title-bar'>Food Hunter</h2>
            </div>
            <div className='link'>
                <Link className='general'  to="/">Home</Link>
                <Link className='general' to="/blog">Blog</Link>
                {!user && <Link className='general' to="/login">Login</Link>}
                {!user && <Link className='general' to="/signup">SignUp</Link>}
                {user && <span className='text-white'>{user.email}<button onClick={handleLogOut}>Log Out</button></span>}
                {/* {user && <button className='photo'>{user.photoUrl}</button>} */}
                {user && <img className='photo' src={user.photoURL} alt="" />}
            </div>
        </nav>
    );
};

export default Header;