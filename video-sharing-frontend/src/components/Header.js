import React from "react";
import Dashboard from "./Dashboard";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const navigate = useNavigate()
  function handleRealod(){
      navigate('/')
      window.location.reload()
  }
  return (
    <div className="header">
      <div className="title"><div className="Link" onClick={()=> handleRealod()}>FlickFlow</div></div>
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
