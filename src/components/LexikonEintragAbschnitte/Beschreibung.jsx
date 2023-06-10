import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { child, getDatabase, ref, get } from "firebase/database";
import { nanoid } from "nanoid";
import KategorieLeiste from "../KategorieLeiste";

function Beschreibung() {
  const { name } = useParams();
  const databaseReference = ref(getDatabase());
  const [systematikData, setSystematikData] = useState(null);
  const [beschreibungData, setBeschreibungData] = useState(null);
  const [img, setImg] = useState(null);

  useEffect(() => {
    switch (name) {
      case "Aal":
        setImg("/public/fische/aal.webp");
        break;
      case "Äsche":
        setImg("/public/fische/äsche.webp");
        break;
      case "Aland":
        setImg("/public/fische/aland.webp");
        break;
      case "Bachforelle":
        setImg("/public/fische/bachforelle.webp");
        break;
      case "Barbe":
        setImg("/public/fische/barbe.webp");
        break;
      case "Barsch":
        setImg("/public/fische/barsch.webp");
        break;
      case "Brasse":
        setImg("/public/fische/brassen.png");
        break;
      case "Döbel":
        setImg("/public/fische/doebel.webp");
        break;
      case "Giebel":
        setImg("/public/fische/giebel.png");
        break;
      case "Gründling":
        setImg("/public/fische/gruendling.webp");
        break;
      case "Güster":
        setImg("/public/fische/guester.png");
        break;
      case "Hasel":
        setImg("/public/fische/hasel.webp");
        break;
      case "Hecht":
        setImg("/public/fische/hecht.webp");
        break;
      case "Karausche":
        setImg("/public/fische/karausche.png");
        break;
      case "Karpfen":
        setImg("/public/fische/karpfen.webp");
        break;
      case "Nase":
        setImg("/public/fische/nase.webp");
        break;
      case "Rapfen":
        setImg("/public/fische/rapfen.webp");
        break;
      case "Regenbogenforelle":
        setImg("/public/fische/regenbogenforelle.webp");
        break;
      case "Rotauge":
        setImg("/public/fische/rotauge.webp");
        break;
      case "Rotfeder":
        setImg("/public/fische/rotfeder.png");
        break;
      case "Schleie":
        setImg("/public/fische/schleie.webp");
        break;
      case "Ukelei":
        setImg("/public/fische/ukelei.webp");
        break;
      case "Wels":
        setImg("/public/fische/wels.webp");
        break;
      case "Zährte":
        setImg("/public/fische/zaehrte.webp");
        break;
      case "Zander":
        setImg("/public/fische/zander.webp");
        break;
    }
  }, []);

  useEffect(() => {
    get(child(databaseReference, `lexikon/${name.toLowerCase()}/systematik`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setSystematikData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    get(child(databaseReference, `lexikon/${name.toLowerCase()}/beschreibung`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setBeschreibungData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="lexikon-eintrag-container">
      <KategorieLeiste />
      <div className="kategorie-container">
        <h1 className="header-kategorie">Beschreibung</h1>
        <table className="systematik-table">
          <tbody>
            <tr className="systematik-tr">
              <td colSpan="2">
                <b className="systematik-header">Systematik</b>
              </td>
            </tr>
            <tr className="systematik-tr">
              <td>Name:</td>
              <td>{name}</td>
            </tr>

            <tr className="systematik-tr">
              <td>Wissenschaftlich:</td>
              <td>{systematikData && systematikData.wissenschaftlich}</td>
            </tr>
            <tr className="systematik-tr">
              <td>Familie:</td>
              <td>{systematikData && systematikData.familie}</td>
            </tr>

            <tr>
              <td style={{ padding: "10px 20px" }}>Besonderheit:</td>
              <td style={{ padding: "10px 20px" }}>
                {systematikData && systematikData.besonderheit}
              </td>
            </tr>
          </tbody>
        </table>
        <img className="fisch-img" src={img} />
        {beschreibungData &&
          beschreibungData.map((p) => <p key={nanoid()}>{p}</p>)}
      </div>
    </div>
  );
}

export default Beschreibung;
