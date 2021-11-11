import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import DashBoard from "./pages/DashBoard/DashBoard/DashBoard";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/placeorder">
            <PlaceOrder />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
