
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from './../firebase/firebase.config';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserWithEmail = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithEmailAndPasword = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut=()=>{
        setLoading(true)
        signOut(auth)   
     }
    
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser)
        console.log(currentUser)
        setLoading(false)

        })
            return () => {
            unsubscribe()
        }
    },[])    

    const authProps= {
        user,
        loading,
        createUserWithEmail,
        loginWithEmailAndPasword,
        loginWithGoogle,
        logOut,
    }

    
    return (
        <AuthContext.Provider value={authProps}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;