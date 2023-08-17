import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import { BsList } from 'react-icons/bs'

const Header = () => {
  const [view, setView] = useState(false)
  const navigate = useNavigate()
  function handleRealod(){
      navigate('/')
      window.location.reload()
  }

  function setViewOption(){
    if(view){
      setView(false)
    }else{
      setView(true)
    }
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
      <div className="log-reg">
        <BsList onClick={()=> setViewOption()}/>
        {view && <div className="dashboard-container">
          <Dashboard/>
        </div>}
      </div>
    </div>
  );
};

export default Header;
