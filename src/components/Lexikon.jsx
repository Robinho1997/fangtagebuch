import React from "react";
import "../styles/lexikon.css";
import TableRow from "./TableRow";

function Lexikon() {
  return (
    <main className="lexikon-page">
  
      <table className="styled-table">
        <thead>
          <tr>
            <th>Deutscher Name</th>
            <th>Gattung + Art</th>
            <th>Familie</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            name={"Aal"}
            gattung={"Anguilla anguilla"}
            familie={"Flussaale (Anguillidae)"}
          />
          <TableRow
            name={"Äsche"}
            gattung={"Thymallus thymallus"}
            familie={"Lachsfische (Salmonidae)"}
          />
          <TableRow
            name={"Aland"}
            gattung={"Leuciscus idus"}
            familie={"Weißfische (Leuciscidae)"}
          />
          <TableRow
            name={"Bachforelle"}
            gattung={"Salmo trutta (fario)"}
            familie={"Salmoniden (Salmonidae)"}
          />
          <TableRow
            name={"Barbe"}
            gattung={"Barbus barbus"}
            familie={"Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Barsch"}
            gattung={"Perca fluviatilis"}
            familie={"Echte Barsche (Percidae)"}
          />
          <TableRow
            name={"Brasse"}
            gattung={"Abramis brama"}
            familie={"Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Döbel"}
            gattung={"Leuciscus cephalus"}
            familie={"Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Giebel"}
            gattung={"Carassius gibelio"}
            familie={"Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Gründling"}
            gattung={"Gobio gobio"}
            familie={"Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Güster"}
            gattung={"Blicca bjoerkna"}
            familie={"	Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Hasel"}
            gattung={"Leuciscus lauciscus"}
            familie={"	Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Hecht"}
            gattung={"Esox lucius"}
            familie={"Hechtartige (Esociformes)"}
          />
          <TableRow
            name={"Karausche"}
            gattung={"Carassius carassius"}
            familie={"	Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Karpfen"}
            gattung={"Cyprinus carpio"}
            familie={"	Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Nase"}
            gattung={"Chondrostoma nasus"}
            familie={"	Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Rapfen"}
            gattung={"Aspius aspius"}
            familie={"	Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Regenbogenforelle"}
            gattung={"Oncorhynchus mykiss"}
            familie={"Salmoniden (Salmonidae)"}
          />
          <TableRow
            name={"Rotauge"}
            gattung={"Rutilus rutilus"}
            familie={"	Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Rotfeder"}
            gattung={"Scardinius erythrophthalmus"}
            familie={"	Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Schleie"}
            gattung={"Tinca tinca"}
            familie={"	Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Ukelei"}
            gattung={"Alburnus alburnus"}
            familie={"	Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Wels"}
            gattung={"Silurus glanis"}
            familie={"Echte Welse (Siluridae)"}
          />
          <TableRow
            name={"Zährte"}
            gattung={"Vimba vimba"}
            familie={"	Karpfenfische (Cyprinidae)"}
          />
          <TableRow
            name={"Zander"}
            gattung={"Sander lucioperca"}
            familie={"Echte Barsche (Percidae)"}
          />
        </tbody>
      </table>
    </main>
  );
}

export default Lexikon;
