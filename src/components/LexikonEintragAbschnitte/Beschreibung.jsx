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
        setImg("/fische/aal.webp");
        break;
      case "Äsche":
        setImg("/fische/äsche.webp");
        break;
      case "Aland":
        setImg("/fische/aland.webp");
        break;
      case "Bachforelle":
        setImg("/fische/bachforelle.webp");
        break;
      case "Barbe":
        setImg("/fische/barbe.webp");
        break;
      case "Barsch":
        setImg("/fische/barsch.webp");
        break;
      case "Brasse":
        setImg("/fische/brassen.png");
        break;
      case "Döbel":
        setImg("/fische/doebel.webp");
        break;
      case "Giebel":
        setImg("/fische/giebel.png");
        break;
      case "Gründling":
        setImg("/fische/gruendling.webp");
        break;
      case "Güster":
        setImg("/fische/guester.png");
        break;
      case "Hasel":
        setImg("/fische/hasel.webp");
        break;
      case "Hecht":
        setImg("/fische/hecht.webp");
        break;
      case "Karausche":
        setImg("/fische/karausche.png");
        break;
      case "Karpfen":
        setImg("/fische/karpfen.webp");
        break;
      case "Nase":
        setImg("/fische/nase.webp");
        break;
      case "Rapfen":
        setImg("/fische/rapfen.webp");
        break;
      case "Regenbogenforelle":
        setImg("/fische/regenbogenforelle.webp");
        break;
      case "Rotauge":
        setImg("/fische/rotauge.webp");
        break;
      case "Rotfeder":
        setImg("/fische/rotfeder.png");
        break;
      case "Schleie":
        setImg("/fische/schleie.webp");
        break;
      case "Ukelei":
        setImg("/fische/ukelei.webp");
        break;
      case "Wels":
        setImg("/fische/wels.webp");
        break;
      case "Zährte":
        setImg("/fische/zaehrte.webp");
        break;
      case "Zander":
        setImg("/fische/zander.webp");
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
