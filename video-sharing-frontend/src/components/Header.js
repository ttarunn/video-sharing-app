import React from "react";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="title"><Link to={'/'} className="Link">FlickFlow</Link></div>
      <div>
        <input type="text" className="search" placeholder="search" />
      </div>
      <div className="login-signup">
        <Dashboard/>
      </div>
    </div>
  );
};

export default Header;
