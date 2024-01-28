// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Registration from './Form/FormPage';
import News from './News';
// import About from './About';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/registration" component={Registration} />
          <Route path="/news" component={News} />
          {/* <Route path="/about" component={About} /> */}
          <Route path="/" exact>
            <h2>Home Page</h2>
            <p>This is the home page content.</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
