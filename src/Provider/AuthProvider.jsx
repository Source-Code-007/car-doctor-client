import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { app } from "../firebase.config";

export const authContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create User With Email Pass
    const createUserWithEmailPassFunc = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user update
    const updateProfileFunc = (currUser, name, photo)=>{
        return updateProfile(currUser,{
            displayName: name, photoURL: photo
        })
    }

    // signin User With Email Pass
    const signingUserWithEmailPassFunc = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout func
    const logout = ()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currUser=>{
            setLoading(false)
            if(currUser){
                setUser(currUser)
            }
        })
        return ()=>{
            unsubscribe()
        }
    },[])


    const sharedObj = {
        user,
        setUser,
        loading,
        createUserWithEmailPassFunc,
        updateProfileFunc,
        signingUserWithEmailPassFunc,
        logout
    }
    return (
        <authContext.Provider value={sharedObj}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;