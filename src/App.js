import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import About from "./pages/About/About";
import DashBoard from "./pages/DashBoard/DashBoard/DashBoard";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard />
            </PrivateRoute>
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder />
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
