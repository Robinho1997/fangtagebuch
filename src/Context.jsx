import React, { createContext, useEffect, useState } from "react";
import { authentication } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";

const Context = createContext();

function ContextProvider(props) {
  const [user, setUser] = useState(null);
  const [displayRegisterForm, setDisplayRegisterForm] = useState(false);
  const [displayLoginForm, setDisplayLoginForm] = useState(false);
  // Check if user ist eingeloggt
  useEffect(() => {
    onAuthStateChanged(authentication, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <Context.Provider
      value={{
        user,
        displayRegisterForm,
        setDisplayRegisterForm,
        displayLoginForm,
        setDisplayLoginForm,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
