import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

//initialize to start firebase
initializeFirebase();

const useFirebase = () => {
  // user can come and go , means user can be changed so,,
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  // auth
  const auth = getAuth();

  // Google SignIn
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        const destination = location?.state?.from || "/dashboard";
        history.push(destination);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setUser({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // regsiter
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = { email: email, displayName: name };
        setUser(newUser);

        // save user to database
        saveUser(email, name, "POST");

        // you have to update data to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        history.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setUser({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // observe the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // login
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/dashboard";
        history.push(destination);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setUser({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // save the user to database
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch(`https://drone-sales-2021.herokuapp.com/users`, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // load data for admin
  useEffect(() => {
    fetch(`https://drone-sales-2021.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    user,
    admin,
    isLoading,
    registerUser,
    loginUser,
    logOut,
    googleSignIn,
    error,
  };
};
export default useFirebase;
