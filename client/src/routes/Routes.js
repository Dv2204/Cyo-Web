import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gyms from "../Pages/Gyms";
import Products from "../Pages/Products";
import Compare from "../Pages/Compare";
import GymDetails from "../Pages/GymDetails";
import About from "../Pages/About";
import LandingPage from "../Pages/LandingPage";
import MainCompare from "../Pages/MainCompare";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import ApiPolicy from "../Pages/ApiPolicy";
import AboutGyms from "../Pages/AboutGyms";
import Contact from "../components/contactUs/Contact";
import PageNotFound from "../Pages/PageNotFound";
import LicenseRegistrations from "../Pages/LicenseRegistrations";
import CsrPolicy from "../Pages/CsrPolicy";
import Support from "../Pages/Support";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/gyms" component={Gyms} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/compare" component={Compare} />
          <Route exact path="/gymdetails/:id" component={GymDetails} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/maincompare/:idone/:idtwo"
            component={MainCompare}
          />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/privacypolicy" component={PrivacyPolicy} />
          <Route exact path="/apipolicy" component={ApiPolicy} />
          <Route exact path="/csrpolicy" component={CsrPolicy} />
          <Route exact path="/support" component={Support} />
          <Route
            exact
            path="/licensesregistration"
            component={LicenseRegistrations}
          />
          <Route exact path="/aboutgyms" component={AboutGyms} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;
