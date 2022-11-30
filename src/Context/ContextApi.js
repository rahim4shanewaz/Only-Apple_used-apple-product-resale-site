import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from "../Firebase/Firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app)


const ContextApi = ({children}) =>{
    const [user, setUser] = useState({});
    const [userRole, setUserRole] = useState('');
    const [dbUser, setDbUser] = useState('');


    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    useEffect(()=>{
        fetch(`https://final-server-lovat.vercel.app/users/${user?.email}`)
        .then(res => res.json())
        .then(data =>setUserRole(data.role) );
       
    } ,[user?.email])

    useEffect(()=>{
        fetch(`https://final-server-lovat.vercel.app/users/${user?.email}`)
        .then(res => res.json())
        .then(data =>setDbUser(data));
       
    } ,[user?.email])



    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }


    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }


useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
         unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        dbUser,
        userRole,
        createUser,
        signInWithGoogle,
        signIn,
        updateUser,
        logOut,
        
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );





};

export default ContextApi;