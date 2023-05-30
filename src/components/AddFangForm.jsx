import React, { useState } from "react";
import { getDatabase, set, push, ref } from "firebase/database";
import { storage, database } from "../Firebase";

function AddFangForm(props) {
  const userId = props.user.uid;

  const [fischart, setFischart] = useState(null);
  const [größe, setGröße] = useState(null);
  const [köder, setKöder] = useState(null);
  const [gewässer, setGewässer] = useState(null);
  const [uhrzeit, setUhrzeit] = useState(null);
  const [datum, setDatum] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [isFormDisplayed, setIsFormDisplayed] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");

  const [imageFile, setImageFile] = useState(null);

  function handleImageUpload() {
    console.log("img");
  }

  function toggleForm() {
    setIsFormDisplayed((prev) => !prev);
  }

  function addObjectToDatabase(e) {
    e.preventDefault();
    setIsFormDisplayed(false);

    if (
      fischart !== null &&
      größe !== null &&
      köder !== null &&
      gewässer !== null &&
      uhrzeit !== null &&
      datum !== null
    ) {
      let inputData = {
        fischart: fischart,
        größe: größe,
        köder: köder,
        gewässer: gewässer,
        uhrzeit: uhrzeit,
        datum: datum,
      };

      const userRef = ref(database, `user/${userId}/data`);
      const newChildRef = push(userRef);

      set(newChildRef, inputData);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      if (fischart === null) {
        document.getElementById("fischart").style.borderColor = "red";
      }
      if (größe === null) {
        document.getElementById("größe").style.borderColor = "red";
      }
      if (köder === null) {
        document.getElementById("köder").style.borderColor = "red";
      }
      if (gewässer === null) {
        document.getElementById("ort").style.borderColor = "red";
      }
      if (uhrzeit === null) {
        document.getElementById("uhrzeit").style.borderColor = "red";
      }
      if (datum === null) {
        document.getElementById("datum").style.borderColor = "red";
      }
      if (imageUrl === null) {
        document.querySelector(".custom-file-upload").style.borderColor = "red";
      }
    }
  }

  return (
    <div>
      {isFormDisplayed ? (
        <div style={{ paddingTop: "120px" }}>
          <h1 style={{ textAlign: "center", color:"orange"  }}>Fangtagebuch</h1>
          <button className="toggleFormBtn" onClick={toggleForm}>
            Formular schließen
            <span className="material-symbols-outlined">do_not_disturb_on</span>
          </button>
          <form>
            <label htmlFor="fischart">
              Fischart
              <img src="/fish (1).png" style={{ width: "20px" }} />
            </label>
            <input
              id="fischart"
              name="fischart"
              type="text"
              onChange={(e) => setFischart(e.target.value)}
            />

            <label htmlFor="größe">
              {" "}
              Größe in cm
              <span className="material-symbols-outlined">width</span>
            </label>
            <input
              id="größe"
              name="größe"
              type="text"
              onChange={(e) => setGröße(e.target.value)}
            />

            <label htmlFor="köder">
              Köder
              <span className="material-symbols-outlined">phishing</span>
            </label>
            <input
              id="köder"
              name="köder"
              type="text"
              onChange={(e) => setKöder(e.target.value)}
            />

            <label htmlFor="ort">
              Gewässer
              <span className="material-symbols-outlined">location_on</span>
            </label>
            <input
              id="ort"
              name="ort"
              type="text"
              onChange={(e) => setGewässer(e.target.value)}
            />

            <label htmlFor="uhrzeit">
              Uhrzeit
              <span className="material-symbols-outlined">schedule</span>
            </label>
            <input
              id="uhrzeit"
              name="uhrzeit"
              type="text"
              onChange={(e) => setUhrzeit(e.target.value)}
            />

            <label htmlFor="datum">
              Datum
              <span className="material-symbols-outlined">calendar_month</span>
            </label>
            <input
              id="datum"
              name="datum"
              type="text"
              onChange={(e) => setDatum(e.target.value)}
            />

            <button onClick={addObjectToDatabase} className="upload-btn">
              <span className="material-symbols-outlined">cloud_upload</span>
            </button>
          </form>
        </div>
      ) : (
        <div style={{ paddingTop: "120px"}}>
          <h1 style={{ textAlign: "center"}}>Fangtagebuch</h1>
          <button className="toggleFormBtn" onClick={toggleForm}>
            Neuen Fang hinzugügen
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default AddFangForm;
