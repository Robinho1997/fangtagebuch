import React from "react";
import { useParams } from "react-router-dom";
import KategorieLeiste from "../KategorieLeiste";

function Bedeutung() {
  const { name } = useParams();
  return (
    <div className="lexikon-eintrag-container">
      <KategorieLeiste />
      <div className="kategorie-container">
      <h1 className="header-kategorie">Bedeutung</h1>
      <p>{name}</p>
      </div>
    </div>
  );
}

export default Bedeutung;