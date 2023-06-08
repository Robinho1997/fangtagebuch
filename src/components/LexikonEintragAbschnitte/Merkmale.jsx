import React from "react";
import { useParams } from "react-router-dom";
import KategorieLeiste from "../KategorieLeiste";

function Merkmale() {
  const { name } = useParams();
  return (
    <div className="lexikon-eintrag-container">
      <KategorieLeiste />
      <div className="kategorie-container">
      <h1 className="header-kategorie">Merkmale</h1>
      <p>{name}</p>
      </div>
    </div>
  );
}

export default Merkmale;