import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // console.log(user)
    const [loading, setLoading] = useState(true)


    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Log in
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log in with Google
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Update User
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    // Log out user
    const logOut = () => {
        return signOut(auth)
    }

    // To hold the logged in user on the website
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const AuthData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        googleSignIn,
        loading,
        setLoading,
        updateUser
    }

    return <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
};

export default AuthProvider;