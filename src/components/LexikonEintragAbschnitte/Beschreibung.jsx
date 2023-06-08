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
              <td>Besonderheit:</td>
              <td>{systematikData && systematikData.besonderheit}</td>
            </tr>
            <tr className="systematik-tr">
              <td>Wissenschaftlich:</td>
              <td>{systematikData && systematikData.wissenschaftlich}</td>
            </tr>
            <tr>
              <td style={{ padding: "10px 20px" }}>Familie:</td>
              <td style={{ padding: "10px 20px" }}>
                {systematikData && systematikData.familie}
              </td>
            </tr>
          </tbody>
        </table>
        <img
          className="fisch-img"
          src="https://www.anglermap.de/images/fischlexikon/fischgrafik/aal1-500c.png?ezimgfmt=rs:500x250/rscb1/ngcb1/notWebP"
        />
        {beschreibungData &&
          beschreibungData.map((p) => <p key={nanoid()}>{p}</p>)}
      </div>
    </div>
  );
}

export default Beschreibung;
