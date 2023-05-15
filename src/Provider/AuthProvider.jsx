import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.config";

export const authContext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create User With Email Pass
    const createUserWithEmailPassFunc = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user update
    const updateProfileFunc = (currUser, name, photo) => {
        return updateProfile(currUser, {
            displayName: name, photoURL: photo
        })
    }

    // signin User With Email Pass
    const signingUserWithEmailPassFunc = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signin user with google
    const signinWithGoogleFunc = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //signin user with github
    const signinWithGithubFunc = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // logout func
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currUser => {
            if (currUser) {
                const option = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email: currUser.email })
                }
                fetch('https://car-doctor-server-iota-woad.vercel.app/jwt', option)
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('car-doctor-jwt', data.token)
                        setUser(currUser)
                        setLoading(false)
                    })
                    .catch(e => console.log(e.message))
            } else {
                localStorage.removeItem('car-doctor-jwt')
                setUser(currUser)
                setLoading(false)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const sharedObj = {
        user,
        setUser,
        loading,
        setLoading,
        createUserWithEmailPassFunc,
        updateProfileFunc,
        signingUserWithEmailPassFunc,
        signinWithGoogleFunc,
        signinWithGithubFunc,
        logout
    }
    return (
        <authContext.Provider value={sharedObj}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;