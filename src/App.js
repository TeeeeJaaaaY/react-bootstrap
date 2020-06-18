import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { BGF } from './pages/BGF/BGF';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bgf">
          <BGF />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
