import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import ScrollIntoView from "./Components/ScrollIntoView";

import Home from "./Pages/Home/Home";
import "./App.scss";
import NavBar from "./Components/Nav/NavBar";
import Houses from "./Pages/Houses/Houses";
import Sell from "./Pages/sell/Sell";
import HomeLoads from "./Pages/Home Loans/HomeLoads";
import AgentFinder from "./Pages/Agent finder/AgentFinder";
import Error from "./Components/Error/Error";
import SingleHouse from "./Pages/SingleHouse/SingleHouse";

export default class App extends Component {
  render() {
    return (
      <div>
        <ScrollIntoView>
          <NavBar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route exact path="/houses" component={Houses} />
            <Route exact path="/sell" component={Sell} />
            <Route exact path="/homeloans" component={HomeLoads} />
            <Route exact path="/agentfinder" component={AgentFinder} />
            <Route exact path="/houses/:slug" component={SingleHouse} />

            <Route exact component={Error} />
          </Switch>
        </ScrollIntoView>
      </div>
    );
  }
}
