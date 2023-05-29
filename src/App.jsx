import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AddFangForm from "./components/AddFangForm";
import Fänge from "./components/Fänge";
import RegisterUser from "./components/RegisterUser";
import LoginUser from "./components/LoginUser";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { authentication } from "./Firebase";


function App() {
  const [displayRegisterForm, setDisplayRegisterForm] = useState(false);
  const [displayLoginForm, setDisplayLoginForm] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user ist eingeloggt
  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
        console.log(user);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Navbar
        setDisplayRegisterForm={setDisplayRegisterForm}
        setDisplayLoginForm={setDisplayLoginForm}
      />
      {user ? (
        <div>
          <h1 style={{ textAlign: "center", marginTop: "30px" }}>
            Fangtagebuch
          </h1>
          <AddFangForm user={user} />
        </div>
      ) : (
        <Homepage />
      )}
      <Fänge />
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
      <Footer />
    </div>
  );
}

export default App;
