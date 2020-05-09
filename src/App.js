import React from "react";
import "./App.css";

import Wrapper from "./components/Wrapper";

import Search from "./pages/Search";


const App = () => {
  document.title = "User Directory";
  return (
    <Wrapper>
      <Search/>
    </Wrapper>
  );
};

export default App;
