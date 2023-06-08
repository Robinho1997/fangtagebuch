import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { child, getDatabase, ref, get } from "firebase/database";
import { nanoid } from "nanoid";
import KategorieLeiste from "../KategorieLeiste";

function Lebensweise() {
  const { name } = useParams();
  const databaseReference = ref(getDatabase());
  const [lebensweiseData, setKebensweiseData] = useState(null);


  useEffect(() => {
    get(
      child(databaseReference, `lexikon/${name.toLowerCase()}/lebensweise`)
    ).then((snapshot) => {
      if (snapshot.exists()) {
        setKebensweiseData(snapshot.val());
      } else {
        console.log("No data available");
      }
    });
  }, []);

  return (
    <div className="lexikon-eintrag-container">
      <KategorieLeiste />
      <div className="kategorie-container">
        <h1 className="header-kategorie">Lebensweise</h1>
        {lebensweiseData && lebensweiseData.map((p) => <p key={nanoid()}>{p}</p>)}
      </div>
    </div>
  );
}

export default Lebensweise;
