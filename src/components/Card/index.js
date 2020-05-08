import React from "react";
import "./style.css";

function Card(props) {
  return (
    <tr className="text-center">
      <th scope="row"><img alt={props.first} src={props.picture}/></th>
      <td>{props.first} {props.last}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </tr>
  );
}

export default Card;
