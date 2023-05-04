import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //google
    const provider = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();

    const googleLog = () =>{
         return signInWithPopup(auth,provider);
    } 
    const githubLog = () =>{
         return signInWithPopup(auth,provider2);
    } 

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () =>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        signIn,
        loading,
        googleLog,
        githubLog,
        logout
    };

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });
        //stop observeing while unmounting
        return () =>{
            return unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;