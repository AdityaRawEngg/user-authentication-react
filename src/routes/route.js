import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component } from "react";
import ParticlesBg from "particles-bg";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Navigation from "../components/Navigation";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <ParticlesBg num={60} type="cobweb" bg={true} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
