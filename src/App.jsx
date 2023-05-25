import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Form from './components/Form';
import Fänge from './components/Fänge';
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';
import { authentication } from './Firebase';

function App() {
  const [displayRegisterForm, setDisplayRegisterForm] = useState(false);
  const [displayLoginForm, setDisplayLoginForm] = useState(false);

  const [user, setUser] = useState(null);
  // Check if user ist eingeloggt
  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        console.log(user)
      } else {
        setUser(null);
        console.log(user)
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>

      <Navbar setDisplayRegisterForm={setDisplayRegisterForm} setDisplayLoginForm={setDisplayLoginForm} />

      {user ? (
        <div>
          <h1 style={{ textAlign: "center", marginTop: "30px" }}>Fangtagebuch</h1>
          <Form user={user} />
        </div>
      ) : (
        <main className='start-page-content'>
          <div className='welcome-div'>
            <div className='shadow'>
              <h1 style={{ textAlign: "center", marginTop: "0" }}>Fangtagebuch</h1>
              <p>Erstelle dein kostenloses Fang-Tagebuch und halte deine Angelerfolge fest.</p>
              <button onClick={() => { setDisplayRegisterForm(prev => !prev) }}>Jetzt kostenlos registrieren!</button>
            </div>
          </div>

          <section className="features-section">
            <h2>Warum Angler's Catch Diary nutzen?</h2>

            <div className="feature">

              <h3>Fangprotokolle erstellen</h3>
              <p>Halte deine Fänge in detaillierten Protokollen fest und behalte den Überblick über deine Angelerfolge.</p>
            </div>
            <div className="feature">

              <h3>Fotogalerie</h3>
              <p>Lade Fotos deiner Fänge hoch und vergesse damit nie die dazugehörigen Informationen zu deinen Lieblingsfängen.</p>
            </div>

          </section>

          <section className="signup-section">
            <h2>Jetzt kostenlos registrieren</h2>
            <p>Erstelle noch heute dein Angler's Catch Diary und verpasse keine Details mehr von deinen Angelerlebnissen.</p>
            <button onClick={() => { setDisplayRegisterForm(prev => !prev) }}>Kostenlosen Account erstellen</button>
          </section>
        </main>
      )}

      <Fänge />
      <RegisterUser displayRegisterForm={displayRegisterForm} setDisplayRegisterForm={setDisplayRegisterForm} hasRegistered={user} />
      <LoginUser displayLoginForm={displayLoginForm} setDisplayLoginForm={setDisplayLoginForm} isLoggedIn={user} />
      {/* 
      <footer>
        <p>&copy; 2023 Fangtagebuch. Alle Rechte vorbehalten.</p>
      </footer>
      */ }
    </div>

  )
}

export default App

