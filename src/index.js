import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  </Router>, document.getElementById('root'));