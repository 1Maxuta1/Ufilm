import { useState, useEffect } from "react";
import {
  EmailAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./lib/firebase";

export const AuthProvider = (type: any) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((isUser) => {
      if (isUser != null) {
        setUser(isUser);
        setLoading(false);
      } else {
        signInWithPopup(auth, new GoogleAuthProvider())
          .then((credentials) => {
            setUser(credentials.user);
            setLoading(false);
          })
          .catch((e) => console.error(e));
      }
    });
    return () => unsubscribe();
  }, [auth]);
  const handleSignIn = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((credentials) => {
        setUser(credentials.user);
      })
      .catch((e) => console.error(e));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((e) => console.error(e));
  };

  if (loading) {
    return (
      <>
        loading
        <button onClick={AuthProvider}>Увійти</button>
      </>
    );
  } else {
    return user != null ? (
      <>
        {user.displayName}
        <button
          onClick={handleSignOut}
          className="ml-8 bg-black text-black bg-opacity-20"
        >
          Вийти
        </button>
      </>
    ) : (
      <>
        not logged in
        <button onClick={handleSignIn}>Увійти</button>
      </>
    );
  }
};
