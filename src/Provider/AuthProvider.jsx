import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase.config";

export const authContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create User With Email Pass
    const createUserWithEmailPassFunc = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin User With Email Pass
    const signingUserWithEmailPassFunc = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const sharedObj = {
        user,
        loading,
        createUserWithEmailPassFunc,
        signingUserWithEmailPassFunc
    }
    return (
        <authContext.Provider value={sharedObj}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;