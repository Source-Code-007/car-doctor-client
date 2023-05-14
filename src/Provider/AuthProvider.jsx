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
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currUser=>{
            setUser(currUser)
            setLoading(false)
            if(currUser){
                const option = {
                    method : 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify({email: currUser.email})

                }
                // console.log(currUser);
                fetch('http://localhost:8000/jwt', option)
                .then(res=> res.json())
                .then(data=> {
                    console.log(data.token);
                    localStorage.setItem('car-doctor-jwt', data.token)
                })
                .catch(e => console.log(e.message))
            } else{
                localStorage.removeItem('car-doctor-jwt')
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
        setLoading,
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