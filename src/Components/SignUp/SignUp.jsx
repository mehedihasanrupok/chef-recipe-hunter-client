import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState('');
    const [ok, setOk] = useState('');
    const {user,createUser,updateUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const image = form.image.value;
        console.log(email, password, confirm,image);

        setError('');
        setOk('');
        if( password !== confirm){
            setError('Your password did not match.');
            return
        }
        else if( password.length < 6){
            setError('Password must be 6 characters or longer.');
            return
        }

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            loggedUser.photoURL = image;
            console.log(loggedUser);
            setOk('User Account Successfully Open');
            form.reset('');
            updateUser(loggedUser, {
                photoURL: "image",
              })
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        } )

        updateUser(user,{
            photoURL : image ,         
        })
        .then(result =>{      
            console.log(result)
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className='form-container2'>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Image Url</label>
                        <input type="text" name="image" id="" required />
                    </div>
                    <input className='btn-submit' type="submit" value="Register" />
                </form>
                <p><small className='little'>Already have an account? OR want login with google,github? <Link to='/login' className='little'>Login</Link> </small></p>
                <p className='text-error'>{error}</p>
                <p className='text-error'>{ok}</p>
            </div>
        </div>
    );
};

export default SignUp;