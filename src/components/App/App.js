import React from 'react';
import './App.css';
import Home from '../Home/Home';
import Downloads from '../Static/Downloads/Downloads';
import NotFound from '../Static/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/downloads">
          <Downloads />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
