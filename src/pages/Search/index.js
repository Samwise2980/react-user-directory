import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
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

  function filteredUsers() {
    const searched = search.toLowerCase();
    return user.filter((user) => {
      return (
        user.name.first.toLowerCase().includes(searched) || user.name.last.toLowerCase().includes(searched) || user.email.toLowerCase().includes(searched) || user.phone.includes(searched) || user.dob.date.substring(0, 10).includes(searched)
      );
    });
  }

  const handleInputChange = (event) => setSearch(event.target.value);

  return (
    <div>
      <Container>
        <SearchForm handleInputChange={handleInputChange} results={search} />
        <SearchResults>
          {filteredUsers().map((user) => (
            <Card
              key={user.id.value === "null" ? user.id.name : user.id.value}
              picture={user.picture.large}
              first={user.name.first}
              last={user.name.last}
              email={user.email}
              phone={user.phone}
              dob={user.dob.date.substring(0, 10)}
            />
          ))}
        </SearchResults>
      </Container>
    </div>
  );
}

export default Search;
