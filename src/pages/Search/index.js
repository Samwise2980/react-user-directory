import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import Card from "../../components/Card";

function Search() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.searchTerms()
      .then((res) => {
        console.log(res);
        setUser(res.data.results);
      })
      .catch((err) => console.log(err.message));
  }, []);



  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <SearchForm />
        {user.map((user) => (
          <Card
            key={user.id.value === "null" ? user.id.name : user.id.value}
            picture={user.picture.large}
            first={user.name.first}
            last={user.name.last}
            username={user.login.username}
            email={user.email}
          />
        ))}
      </Container>
    </div>
  );
}

export default Search;
