import React, { useContext } from "react";
import { Context } from "./Context";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddFangForm from "./components/AddFangForm";
import DisplayLoggedInUserData from "./components/DisplayLoggedInUserData";
import RegisterUser from "./components/RegisterUser";
import LoginUser from "./components/LoginUser";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Lexikon from "./components/Lexikon";
import LexikonEintrag from "./components/KategorieLeiste";
import Beschreibung from "./components/LexikonEintragAbschnitte/Beschreibung";
import Lebensweise from "./components/LexikonEintragAbschnitte/Lebensweise";
import Fortpflanzung from "./components/LexikonEintragAbschnitte/Fortpflanzung";
import Verbreitung from "./components/LexikonEintragAbschnitte/Verbreitung";
import Bestimmung from "./components/LexikonEintragAbschnitte/Bestimmung";
import Merkmale from "./components/LexikonEintragAbschnitte/Merkmale";
import Gefährdung from "./components/LexikonEintragAbschnitte/Gefährdung";
import Bedeutung from "./components/LexikonEintragAbschnitte/Bedeutung";
import Fangmethode from "./components/LexikonEintragAbschnitte/Fangmethode";

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

        <Route path="lexikon/:name/beschreibung" element={<Beschreibung />} />
        <Route path="lexikon/:name/lebensweise" element={<Lebensweise />} />

        <Route path="lexikon/:name/fortpflanzung" element={<Fortpflanzung />} />
        <Route path="lexikon/:name/verbreitung" element={<Verbreitung />} />
        <Route path="lexikon/:name/bestimmung" element={<Bestimmung />} />
        <Route path="lexikon/:name/merkmale" element={<Merkmale />} />
        <Route path="lexikon/:name/gefährdung" element={<Gefährdung />} />
        <Route path="lexikon/:name/bedeutung" element={<Bedeutung />} />
        <Route path="lexikon/:name/fangmethode" element={<Fangmethode />} />
      
      </Routes>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
