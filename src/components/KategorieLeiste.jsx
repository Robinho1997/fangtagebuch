import React, { useState } from "react";
import Beschreibung from "./LexikonEintragAbschnitte/Beschreibung";
import Lebensweise from "./LexikonEintragAbschnitte/Lebensweise";
import Fortpflanzung from "./LexikonEintragAbschnitte/Fortpflanzung";
import Verbreitung from "./LexikonEintragAbschnitte/Verbreitung";
import Bestimmung from "./LexikonEintragAbschnitte/Fortpflanzung";
import Merkmale from "./LexikonEintragAbschnitte/Merkmale";
import Gefährdung from "./LexikonEintragAbschnitte/Gefährdung";
import Bedeutung from "./LexikonEintragAbschnitte/Bedeutung";
import Fangmethode from "./LexikonEintragAbschnitte/Fangmethode";
import { Link, useParams } from "react-router-dom";

function KategorieLeiste() {
  const { name } = useParams();

  return (
    <div className="lexikon-kategorie-btn-div">
      <Link to={`/lexikon/${name}/beschreibung`}>Beschreibung</Link>
      <Link to={`/lexikon/${name}/lebensweise`}>Lebensweise</Link>
      <Link to={`/lexikon/${name}/fortpflanzung`}>Fortpflanzung</Link>
      <Link to={`/lexikon/${name}/verbreitung`}>Verbreitung</Link>
      <Link to={`/lexikon/${name}/fangmethode`}>Fangmethode</Link>
    </div>
  );
}

export default KategorieLeiste;
