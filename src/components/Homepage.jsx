import React from "react";
import "../styles/homepage.css";
import phoneImg from "/public/phone-img.png";

function Homepage(props) {
  return (
    <main className="homepage">
      <div className="background-img-holder">
        <div className="hero-section">
          <h1>Angler's Catch Diary</h1>
          <p>
            Starte dein digitales Fangbuch <br></br> und halte deine
            Angelerfolge fest.
          </p>
          <button
            className="homepage-register-btn"
            onClick={() => {
              props.setDisplayRegisterForm((prev) => !prev);
            }}
          >
            JETZT KOSTENLOS REGISTRIEREN!
          </button>
        </div>
      </div>

      <div className="features-and-phone-img-section">
        <section className="features-section">
          <div className="feature">
            <h3 className="align-icon-with-text">
              <span className="material-symbols-outlined">description</span>
              Erstelle Fangprotokolle
            </h3>
            <p>
              Erfasse deine Angelerfolge in detaillierten Protokollen und
              behalte den Überblick über deine Fangaktivitäten.
            </p>
          </div>
          <div className="feature">
            <h3 className="align-icon-with-text">
              <span className="material-symbols-outlined">add_a_photo</span>
              Erstelle eine Fotogalerie
            </h3>
            <p>
              Lade Fotos deiner Fänge hoch und halte damit alle wichtigen
              Informationen zu deinen besten Fängen fest, damit du sie nie
              vergisst.
            </p>
          </div>
          <div className="feature">
            <h3 className="align-icon-with-text">
              <span className="material-symbols-outlined">settings</span>
              Sei flexibel!
            </h3>
            <p>
              Egal ob du spontan am Wasser bist oder ein lang geplantes
              Angelwochenende genießt - unsere web app ermöglicht es dir, dein
              digitales Fangbuch immer griffbereit zu haben.
            </p>
          </div>
        </section>
        <img className="phone-img" src={phoneImg} />
      </div>

      <section className="signup-section">
        <h2>Jetzt kostenlos registrieren!</h2>
        <p>
          Erstelle noch heute dein Angler's Catch Diary und halte alle wichtigen
          Details deiner Angelerlebnisse fest, damit du nichts mehr verpasst.
        </p>
        <button
          className="homepage-register-btn"
          onClick={() => {
            props.setDisplayRegisterForm((prev) => !prev);
          }}
        >
          KOSTENLOSEN ACCOUNT ERSTELLEN!
        </button>
      </section>
    </main>
  );
}

export default Homepage;
