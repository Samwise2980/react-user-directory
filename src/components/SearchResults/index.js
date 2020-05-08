import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
<table class="table">
  <thead>
    <tr className="text-center">
      <th scope="col">Image</th>
      <th scope="col"><button>Name</button></th>
      <th scope="col"><button>Phone</button></th>
      <th scope="col"><button>Email</button></th>
      <th scope="col"><button>DOB</button></th>
    </tr>
  </thead>
  <tbody>
    {props.children}
  </tbody>
</table>  );
}

export default SearchResults;
