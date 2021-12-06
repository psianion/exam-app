import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";

// Configure FirebaseUI.
const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
};

function SignInScreen() {
  return (
    <div>
      <h1>Login</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignInScreen;
