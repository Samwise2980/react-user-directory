import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import Home from "./pages/Home";
import Search from "./pages/Search";


const App = () => {
  document.title = "User Directory";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
