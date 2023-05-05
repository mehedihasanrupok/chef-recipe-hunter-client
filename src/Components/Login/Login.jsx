import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
// import { AuthContext } from '../providers/AuthProvider';
import { Button } from 'react-bootstrap';
import { BsGoogle,BsGithub } from "react-icons/bs";
import { AuthContext } from '../providers/AuthProvider';



const Login = () => {

    const [show, setShow] = useState(false);
    const { signIn, googleLog, githubLog } = useContext(AuthContext); 
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogle =()=>{
        
        googleLog()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error);
        })
    }
    const handleGithub =()=>{
        githubLog()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error);
        })
    }


    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? 'text' : 'password'} name="password" id="" required />
                    <p onClick={() => setShow(!show)}><small>
                        {
                            show ? <span className='little'>Hide Password </span> : <span className='little'>Show Password</span>
                        }
                    </small></p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='little'><small>Don't have an account? <Link to='/signup' className='little'>Create New Account</Link> </small></p>
            <hr />
            <button onClick={handleGoogle} className='media'><BsGoogle className='image1'/> Log in With Google</button>
            <button onClick={handleGithub} className='media'><BsGithub className='image1'></BsGithub>Log in With Github</button>
        </div>
    );
};

export default Login;