import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../Firebase";
import { redirect, useNavigate , Link } from "react-router-dom";

function LoginUser(props) {
  const [inputOfEmail, setInputOfEmail] = useState("");
  const [inputOfPassword, setInputOfPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("Login erfolgreich!");
  const navigate = useNavigate();

  function handleSignIn(e) {
    e.preventDefault();

    signInWithEmailAndPassword(authentication, inputOfEmail, inputOfPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/fangtagebuch")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode:" + errorCode + "errorMessage:" + errorMessage);
        setLoginMessage(errorMessage);
      });
 
  }

  return (
    <div style={{ zIndex: 1000 }}>
      {props.displayLoginForm && (
        <div className={`authentification-form `}>
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
              <input style={{marginBottom:"30px"}}
                value={inputOfPassword}
                onChange={(e) => setInputOfPassword(e.target.value)}
                type="password"
                placeholder="Passwort"
              />
              <Link className="login-link" to={"/fangtagebuch"} onClick={handleSignIn}>
                Login
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LoginUser;
