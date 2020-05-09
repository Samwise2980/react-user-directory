import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table className="table">
      <thead>
        <tr className="text-center">
          <th scope="col">Image</th>
          <th scope="col">
            Name{" "}
            <button onClick={() => props.sortCharacters("ascending", "name")}>Up</button>
            <button onClick={() => props.sortCharacters("descending", "name")}>Down</button>
          </th>
          <th scope="col">
            Phone{" "}
            <button onClick={() => props.sortCharacters("ascending", "phone")}>Up</button>
            <button onClick={() => props.sortCharacters("descending", "phone")}>Down</button>
          </th>
          <th scope="col">
            Email{" "}
            <button onClick={() => props.sortCharacters("ascending", "email")}>Up</button>
            <button onClick={() => props.sortCharacters("descending", "email")}>Down</button>
          </th>
          <th scope="col">
            DOB{" "}
            <button onClick={() => props.sortCharacters("ascending", "date")}>Up</button>
            <button onClick={() => props.sortCharacters("descending", "date")}>Down</button>
          </th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default SearchResults;
