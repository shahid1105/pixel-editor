import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import app from "../../firebase/firebase.config";
  import { createContext, useEffect, useState } from "react";
  
  const auth = getAuth(app);
  export const AuthContext = createContext(null);
  const googleProvider = new GoogleAuthProvider();
  
  const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    //new user creation
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    // user profile update
    const userProfile = (name, photo) => {
      setLoading(true);
      const User = auth.currentUser;
      return updateProfile(User, {
        displayName: name,
        photoURL: photo,
      });
    };
  
    const userProfileUpdate = (name, photo) => {
      setUser({ ...user, displayName: name, photoURL: photo });
    };
  
  
    //SignIn
  
    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
  
    //LogOut
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
  
    //Login With Google
    const googleSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
  
  
    //
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
  
  
    const authInfo = {
      user,
      loading,
      createUser,
      userProfile,
      userProfileUpdate,
      googleSignIn,
      signIn,
      logOut
    };
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  