import React from "react";
import "../styles/lexikon.css";
import TableRow from "./TableRow";

function Lexikon() {
  return (
    <main className="lexikon-page">
      <h1 className="header">Fisch-Lexikon</h1>
        <p className="description">Süßwasserfische in Deutschland: insgesamt 32</p>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Deutscher Name</th>
            <th>Gattung + Art</th>
            <th>Familie</th>
          </tr>
        </thead>
        <tbody>
        <TableRow name={"Aland"} gattung={"Leuciscus idus"} familie={"Leuciscidae (Weißfische)"} />
        <TableRow name={"Äsche"} gattung={"Thymallus thymallus"} familie={"Salmonidae (Lachsfische)"} />
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
        <TableRow name={""} gattung={""} familie={""}/>
       
        </tbody>
      </table>
    </main>
  );
}

export default Lexikon;
