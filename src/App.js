import React from "react";
import Home from "./componets/Home";
import Mywishlist from "./componets/Mywishlist";
import Trending from "./componets/Trending";
import Header from "./componets/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Switch>
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/mywishlist">
            <Mywishlist />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
