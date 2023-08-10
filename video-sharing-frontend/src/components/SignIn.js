import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../App";

const SignIn = () => {
  const { setLogin } = useContext(authContext);
  const navigate = useNavigate()
  return (
    <>
      
      <div className="sign-in-page">
        <div className="left">
          <img
            src="https://wallpapers.com/images/featured/guardians-of-the-galaxy-5paov6a8eku13ugb.jpg"
            alt="sign-in"
            className="left-img"
          />
          <h1 className="sign-title">FlickFlow</h1>
          <p className="sign-description">Enjoy Multiple Videos at one Place</p>
          <Link to={"/register"} className="signin-link">
            Register
          </Link>
        </div>
        <div className="right">
          <form className="center" onSubmit={(e)=> {
            e.preventDefault()
            navigate('/')
          }}>
            <h1>Sign In</h1>
            <p>Sign in to access the videos</p>
            <input type="email" placeholder="Email" className="sign-email" />
            <input
              type="password"
              placeholder="password"
              className="sign-password"
            />
            <button className="sign-btn" onClick={() => setLogin(true)}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
