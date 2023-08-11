import React from "react";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import Search from "./Search";
const Header = () => {
  return (
    <div className="header">
      <div className="title"><Link to={'/'} className="Link">FlickFlow</Link></div>
      <div>
        <Search/>
      </div>
      <div className="login-signup">
        <Dashboard/>
      </div>
    </div>
  );
};

export default Header;
