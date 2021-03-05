import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Contact from './components/Contact';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="selected">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
