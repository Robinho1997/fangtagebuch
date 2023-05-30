import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AddFangForm from "./components/AddFangForm";
import DisplayLoggedInUserData from "./components/DisplayLoggedInUserData";
import RegisterUser from "./components/RegisterUser";
import LoginUser from "./components/LoginUser";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { authentication } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";
function App() {
  const [displayRegisterForm, setDisplayRegisterForm] = useState(false);
  const [displayLoginForm, setDisplayLoginForm] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user ist eingeloggt
  useEffect(() => {
    onAuthStateChanged(authentication, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="app">
      <div className="content">
        <Navbar
          setDisplayRegisterForm={setDisplayRegisterForm}
          setDisplayLoginForm={setDisplayLoginForm}
          user={user}
        />
        {user ? (
          <AddFangForm user={user} />
        ) : (
          <Homepage
            displayRegisterForm={displayRegisterForm}
            setDisplayRegisterForm={setDisplayRegisterForm}
          />
        )}
        {user && <DisplayLoggedInUserData user={user} />}

        <RegisterUser
          displayRegisterForm={displayRegisterForm}
          setDisplayRegisterForm={setDisplayRegisterForm}
          hasRegistered={user}
        />
        <LoginUser
          displayLoginForm={displayLoginForm}
          setDisplayLoginForm={setDisplayLoginForm}
          isLoggedIn={user}
        />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
