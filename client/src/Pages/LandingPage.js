import React, { useState } from 'react';
import NavBar from '../components/Nav/NavBarMain';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Gym from './Gyms';
import Products from './Products';
import Guide from './Guide';
import Compare from './Compare';
import About from './About';
import Sidebar from '../components/Sidebar/Sidebar';

const LandingPage = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle =() => {
        setIsOpen(!isOpen)
    }
        return (
            <div>
                <Router>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <NavBar toggle={toggle}/>
                <Switch>
                <Route exact path="/pages/gyms" component={Gym} />
                <Route exact path="/pages/products" component={Products}/>
                <Route exact path="/pages/compare" component={Compare} />
                <Route exact path="/pages/guide" component={Guide} />
                <Route exact path="/pages/about" component={About} />
                </Switch> 
                </Router> 
            </div>
        )
}

export default LandingPage;