import React, { useState } from "react";
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
