import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const NoVideoFound = () => {
  return (
    <>
      <Header />
      <div style={{ fontSize: "2rem", color: "White", textAlign: "center" }}>
        <h2>You are not Logged In!!</h2>
        <Link to={"/signin"} className="Link">
          <h4>Click to logIn</h4>
        </Link>
      </div>
    </>
  );
};

export default NoVideoFound;
