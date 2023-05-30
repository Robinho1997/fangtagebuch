import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../Firebase";

function LoginUser(props) {
  const [inputOfEmail, setInputOfEmail] = useState("");
  const [inputOfPassword, setInputOfPassword] = useState("");

  const [loginMessage, setLoginMessage] = useState("Login erfolgreich!");

  function handleSignIn(e) {
    e.preventDefault();

    signInWithEmailAndPassword(authentication, inputOfEmail, inputOfPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log("Logged in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode:" + errorCode + "errorMessage:" + errorMessage);
        setLoginMessage(errorMessage);
      });
  }

  return (
    <div>
      {props.displayLoginForm && (
        <div className="authentification-form">
          <button
            onClick={() => props.setDisplayLoginForm(false)}
            className="close-btn"
          >
            <span className="material-symbols-outlined">cancel</span>
          </button>
          {props.isLoggedIn ? (
            <p>{loginMessage}</p>
          ) : (
            <div>
              <h2 className="authentification-h2">
                Login <span className="material-symbols-outlined">login</span>
              </h2>
              <input
                value={inputOfEmail}
                onChange={(e) => setInputOfEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <input
                value={inputOfPassword}
                onChange={(e) => setInputOfPassword(e.target.value)}
                type="password"
                placeholder="Passwort"
              />
              <button className="form-btn" onClick={handleSignIn}>
                Login
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LoginUser;
