import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";

function Search() {
  const [user, setUser] = useState();

  // useEffect(() => {
  //   API.searchTerms()
  //     .then((res) => {
  //       setUser(res)
  //     })
  //     .catch((err) => console.log(err.message));
  // }, []);

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <SearchForm />
        <SearchResults {...user} />
      </Container>
    </div>
  );
}

export default Search;
