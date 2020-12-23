import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gyms from '../Pages/Gyms';
import Products from '../Pages/Products';
import Compare from '../Pages/Compare';
import GymDetails from '../Pages/GymDetails';
import About from '../Pages/About';
import LandingPage from '../Pages/LandingPage';
import MainCompare from '../Pages/MainCompare';
import Contact from '../components/contactUs/Contact';


const Routes = () => {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/gyms" component={Gyms} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/compare" component={Compare} />
          <Route exact path="/gymdetails" component={GymDetails} />
          <Route exact path="/about" component={About} />
          <Route exact path="/maincompare" component={MainCompare} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;