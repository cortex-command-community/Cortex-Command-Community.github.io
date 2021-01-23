import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Downloads from '../Static/Downloads/Downloads';
import NotFound from '../Static/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GetInvolved } from '../Static/GetInvolved/GetInvolved';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/downloads">
          <Downloads />
        </Route>
        <Route path="/get-involved">
          <GetInvolved />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
