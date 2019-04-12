import React from "react";
import { connect } from "react-redux";

const OldFormSuccess = props => {
  if (!props.newUser.id) {
    return <p />;
  } else if (props.newUser.errors) {
    return (
      <div>
        <p>
          There was a problem. The error message is: "
          {props.newUser.errors[0].message}" {"   "}
          Make sure you have submitted a name!
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Your details are:</p>
        <img src={props.newUser.imageUrl} />
        <p>name: {props.newUser.name}</p>
        <p>address: {props.newUser.address}</p>
      </div>
    );
  }
};

const mapState = state => ({
  UserAdd: state.userReducer.UserAdd,
  newUser: state.userReducer.newUser
});

const FormSuccess = connect(mapState)(OldFormSuccess);

export default FormSuccess;
