import React from "react";
import KategorieLeiste from "../KategorieLeiste";
import { useParams } from "react-router-dom";

function Bestimmung() {
  const { name } = useParams();
  return (
    <div className="lexikon-eintrag-container">
      <KategorieLeiste />
      <div className="kategorie-container">
        <h1 className="header-kategorie">Bestimmung</h1>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Bestimmung;