import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AddFangForm from "./components/AddFangForm";
import DisplayLoggedInUserData from "./components/DisplayLoggedInUserData";
import RegisterUser from "./components/RegisterUser";
import LoginUser from "./components/LoginUser";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Lexikon from "./components/Lexikon";
import LexikonEintrag from "./components/LexikonEintrag";
import { Context } from "./Context";
import { Routes, Route } from "react-router-dom";

function App() {
  const {
    user,
    displayRegisterForm,
    setDisplayRegisterForm,
    displayLoginForm,
    setDisplayLoginForm,
  } = useContext(Context);

  return (
    <div className="app">
      <Navbar
        setDisplayRegisterForm={setDisplayRegisterForm}
        setDisplayLoginForm={setDisplayLoginForm}
        user={user}
      />
      {user && ( // wenn eingeloggt fangform zeigen
        <AddFangForm user={user} />
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

      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              displayRegisterForm={displayRegisterForm}
              setDisplayRegisterForm={setDisplayRegisterForm}
            />
          }
        />
        <Route path="/lexikon" element={<Lexikon />} />
        <Route path="lexikon/:name" element={<LexikonEintrag />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
