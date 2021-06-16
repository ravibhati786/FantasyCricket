import React, { Component } from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Components/Home/Home";
import CreateTeam from './Components/CreateTeam/CreateTeam';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route to="/create-team">
            <CreateTeam/>
          </Route>
          <Route to="/view-team">
            View Team
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
