import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { child, getDatabase, ref, get } from "firebase/database";
import { nanoid } from "nanoid";
import KategorieLeiste from "../KategorieLeiste";


function Fortpflanzung() {
  const { name } = useParams();
  const [fortpflanzungData, setFortpflanzungData] = useState(null);
  const databaseReference = ref(getDatabase());

  useEffect(() => {
    get(
      child(databaseReference, `lexikon/${name.toLowerCase()}/fortpflanzung`)
    ).then((snapshot) => {
      if (snapshot.exists()) {
        setFortpflanzungData(snapshot.val());
      } else {
        console.log("No data available");
      }
    });
  }, []);

  return (
    <div className="lexikon-eintrag-container">
      <KategorieLeiste />
      <div className="kategorie-container">
        <h1 className="header-kategorie">Fortpflanzung</h1>
        {fortpflanzungData && fortpflanzungData.map((p) => <p key={nanoid()}>{p}</p>)}
      </div>
    </div>
  );
}

export default Fortpflanzung;
