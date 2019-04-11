import React from "react";
import { connect } from "react-redux";
import { sendUser } from "../reducers/user";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import FormSuccess from "./FormSuccess";

class XSignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: ""
      //   description: "",
      //   imageUrl: ""
    };
  }

  render() {
    return (
      <div>
        <main>
          <h1>Sign Up</h1>
          <div>
            <h3>Name:</h3>
            <input
              type="text"
              required="required"
              value={this.state.name}
              onChange={evt => this.setState({ name: evt.target.value })}
            />
            <h3>Address:</h3>
            <input
              type="text"
              value={this.state.address}
              onChange={evt => this.setState({ address: evt.target.value })}
            />
            {/* <h3>Description:</h3>
            <input
              type="text"
              value={this.state.description}
              onChange={evt => this.setState({ description: evt.target.value })}
              // onKeyDown={this.handleKey}
            /> */}
            {/* <h3>Image:</h3>
            <input
              type="text"
              value={this.state.image}
              onChange={evt => this.setState({ imageUrl: evt.target.value })}
              // onKeyDown={this.handleKey}
            /> */}
          </div>
          <p>To submit, click the "Add Me" button.</p>
          {/* <div>Your inputCampus to submit:</h1>
          <p>{this.state.name}</p>
          <p>{this.state.address}</p>
          <p>{this.state.description}</p>
          <p>{this.state.image}</p>
        </div> */}
          <button
            onClick={() => {
              this.props.sendUser(this.state);
              this.setState({
                name: "",
                address: ""
              });
            }}
          >
            Add Me!
          </button>

          {/* <FormSuccess /> */}
        </main>
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
