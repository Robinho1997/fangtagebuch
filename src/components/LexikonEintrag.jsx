import React from "react";
import { useParams } from "react-router-dom";
function LexikonEintrag() {
  const { name } = useParams();
  console.log(name)
  return <h1 style={{marginTop:"200px"}}>{name}</h1>;
}

export default LexikonEintrag;
