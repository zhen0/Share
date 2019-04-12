import React from "react";
import User from "./userHome";
import NotFound from "./notFound";
import SignUp from "./signUp";
import NewUserSuccess from "./newUserSuccess";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Router>
        <div>
          <ul id="navBar">
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/home" component={User} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/user" component={NewUserSuccess} />
          <Route exact path="/" component={User} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default Root;
