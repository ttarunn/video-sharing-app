import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../App";
import Shimmer from "./Shimmer";

const SignIn = () => {
  const { REACT_APP_CLOUDINARY_VIDEO_POST_API, REACT_APP_CLOUD_NAME, REACT_APP_API_SERVER, REACT_APP_CLOUDINARY_IMAGE_POST_API } = process.env;

  const { setLogin } = useContext(authContext);
  const[response, setResponse] = useState({
    status:-1,
    token:""
  })
  const[formdata, setFormData] =useState({
    email:"",
    password:""
  })
  const navigate = useNavigate()



  const handleSubmit = async (formData)=> {
    const post = await fetch(`${REACT_APP_API_SERVER}/api/auth/login`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        body: JSON.stringify(formData),
    });
    const json = await post.json();
    setResponse({
      ...response,
      status:post.status,
      token:json.token
    })

};

  function navigatePage(response){
        if(response.status === 200){
            localStorage.setItem('token', response.token)
            return navigate('/')
        }else{
          alert('check')
        }
      }


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
            
            handleSubmit(formdata);           
          }}>
            {response.status == -1?'': navigatePage(response)}
            <h1>Sign In</h1>
            <p>Sign in to access the videos</p>
            <input type="email" placeholder="Email" className="sign-email" onChange={(e)=> setFormData({
              ...formdata,
              email:e.target.value
            })} required/>
            <input
              type="password"
              placeholder="password"
              className="sign-password"
              onChange={(e)=> setFormData({
                ...formdata,
                password:e.target.value
              })}
              required
            />
            <button className="sign-btn">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
