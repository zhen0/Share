import React from "react";
import { Link } from "react-router-dom";
import SignUp from "./signUp";

const User = () => {
  return (
    <div>
      <div>
        <h1>Welcome </h1>

        <p>
          The idea of this app is to set up a community that shares the
          strollers, scooters, bikes, toys and more that our kids want but our
          apartments can not hold!{" "}
        </p>

        <Link to="/sign-up">Sign Up! {"  "}</Link>
      </div>

      <div>
        <img src="https://freedesignfile.com/upload/2017/09/Happy-little-girl-playing-doll-house-filled-with-mini-furniture-toys-Stock-Photo-07.jpg" />
      </div>
    </div>
  );
};

export default User;
