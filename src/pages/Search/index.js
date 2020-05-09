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
      .then((res) => {setUser(res.data.results.map(user => ({        
        id: user.id.value,
        picture: user.picture.large,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
        date: user.dob.date.substring(0, 10)
      })))})
      .catch((err) => console.log(err.message));
  }, []);

  function filteredUsers() {
    const searched = search.toLowerCase();
    return user.filter((user) => {
      return (
        user.name.toLowerCase().includes(searched) || user.email.toLowerCase().includes(searched) || user.phone.includes(searched) || user.date.includes(searched)
      );
    });
  }

  const sortCharacters = (order, field) => {
    const sortedUsers = user.slice(0).sort((a, b) => {
      console.log(a[field])
      console.log(b[field])

      if (order === "ascending") {
        return a[field].localeCompare(b[field]);
      }
      return b[field].localeCompare(a[field]);
    });
    setUser(sortedUsers);
  };

  // Handles input Change
  const handleInputChange = (event) => setSearch(event.target.value);

  return (
    <div>
      <Container>
        <SearchForm handleInputChange={handleInputChange} results={search} />
        <SearchResults sortCharacters={sortCharacters}>
          {filteredUsers().map((user) => (
            <Card
              key={user.id}
              picture={user.picture}
              name={user.name} 
              email={user.email}
              phone={user.phone}
              date={user.date}
            />
          ))}
        </SearchResults>
      </Container>
    </div>
  );
}

export default Search;
