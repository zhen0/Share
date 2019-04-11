import React from "react";
import User from "./userHome";
import NotFound from "./notFound";
import SignUp from "./signUp";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Router>
        <div>
          <ul id="navBar">
            <li>
              <Link to="/userHome">Home</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/userHome" component={User} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/" component={User} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default Root;
