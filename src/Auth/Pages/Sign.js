/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames/bind";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect, useState } from "react";

import styles from "./SignIn.module.scss";

const cx = classNames.bind(styles);

// Configure Firebase.
const config = {
    apiKey: 'AIzaSyAf75pA3N3xglLFb_ovURbTtPhLkMJ4LJY',
    authDomain: 'tiktok-clone-a1eae.firebaseapp.com',
};
firebase.initializeApp(config);

function SignIn() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    // Configure FirebaseUI.
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        signInSuccessUrl: '/signin'
        // callbacks: {
        //     // Avoid redirects after sign-in.
        //     signInSuccessWithAuthResult: () => false,
        // },
    };
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                //user logs out
                console.log("use not log in");
                return;
            }
            setIsSignedIn(!!user);
            console.log("Log in user: ", user.displayName);
            console.log("Log in user: ", user.getIdToken());
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);
    if (!isSignedIn) {
        <>
            <p>Login</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </>
    }
    return (
        <div>
            <h1>My App</h1>

            <a onClick={() => {
                firebase.auth().signOut()
                console.log("log out");
            }}>Sign-out</a>
        </div>
    );
}


export default SignIn;