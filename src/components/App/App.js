import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Downloads from '../Static/Downloads/Downloads';
import Get_Involved from '../Static/Get_Involved/Get_Involved';
import NotFound from '../Static/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Get_Involved />
        </Route>
          <Get_Involved />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
