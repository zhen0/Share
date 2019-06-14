import React from "react";
import { connect } from "react-redux";
import { sendKit } from "../reducers/kit";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import FormSuccess from "./FormSuccess";

class XAddKit extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      quantity: 0,
      imageUrl: "",
      points: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.sendKit(this.state);
    this.setState({
      name: "",
      description: "",
      quantity: 0,
      imageUrl: "",
      points: 0
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
          <h1>Add Kit</h1>
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
          <label htmlFor="description">Description:</label>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label htmlFor="imageUrl">imageUrl:</label>
          <input
            name="imageUrl"
            type="text"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
          <label htmlFor="quantity">quantity:</label>
          <input
            name="quantity"
            type="text"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
          <label htmlFor="points">Points:</label>
          <input
            name="points"
            type="text"
            value={this.state.points}
            onChange={this.handleChange}
          />

          <button type="submit">Add Kit!</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = { sendKit };

const AddKit = connect(
  null,
  mapDispatch
)(XAddKit);

export default AddKit;
