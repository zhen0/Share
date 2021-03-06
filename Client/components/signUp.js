import React from "react";
import { connect } from "react-redux";
import { sendUser } from "../reducers/user";

import AddKit from "./addKit";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import FormSuccess from "./FormSuccess";

class XSignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.sendUser(this.state);
    this.props.history.push("/addKit");
    this.setState({
      name: "",
      address: "",
      password: ""
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Sign Up</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            required="required"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="address">Address:</label>
          <input
            name="address"
            type="text"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button type="submit">Add Me!</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = { sendUser };

const SignUp = connect(
  null,
  mapDispatch
)(XSignUp);

export default SignUp;
