import React, { useState } from "react";
import { authentication } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegisterUser(props) {
  const [inputOfEmail, setInputOfEmail] = useState("");
  const [inputOfPassword, setInputOfPassword] = useState("");
  const [registeredMessage, setRegisteredMessage] = useState(
    "Registrierung erfolgreich"
  );

  function handleCreateUser(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(
      authentication,
      inputOfEmail,
      inputOfPassword
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setRegisteredMessage(errorMessage);
      });
  }

  return (
    <div style={{zIndex:1000}}>
      {props.displayRegisterForm && (
        <div className="authentification-form">
          <button
            onClick={() => props.setDisplayRegisterForm(false)}
            className="close-btn"
          >
            <span className="material-symbols-outlined">cancel</span>
          </button>
          {props.hasRegistered ? (
            <p>{registeredMessage}</p>
          ) : (
            <div>
              <h2>
                Registrieren{" "}
                <span className="material-symbols-outlined">person_add</span>
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
              <button className="form-btn" onClick={handleCreateUser}>
                Erstellen
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RegisterUser;
