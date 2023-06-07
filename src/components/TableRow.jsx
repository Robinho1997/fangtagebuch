import React from "react";
import { Link } from "react-router-dom";

function TableRow(props) {
    return ( 
        <tr>
            <td><Link to={`${props.name}`}>{props.name}</Link></td>
            <td>{props.gattung}</td>
            <td>{props.familie}</td>
        </tr>
     );
}

export default TableRow;