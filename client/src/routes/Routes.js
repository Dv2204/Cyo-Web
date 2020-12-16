import React from "react";
// import { Switch } from "react-router-dom";
// import { Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gyms from '../Pages/Gyms';
import Products from '../Pages/Products';
import Compare from '../Pages/Compare';
import Guide from '../Pages/Guide';
import About from '../Pages/About';
import LandingPage from '../Pages/LandingPage';


const Routes = () => {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/gyms" component={Gyms} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/compare" component={Compare} />
        <Route exact path="/guide" component={Guide} />
        <Route exact path="/about" component={About} />
      </Switch>
      </Router>
    </div>
  );
};
export default Routes;