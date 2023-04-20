import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext(null)
const auth = getAuth(app)

const Authprovider = ({ children }) => {

    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
     
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const AuthInfo = {
        user,
        createUser,
        singInUser,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;