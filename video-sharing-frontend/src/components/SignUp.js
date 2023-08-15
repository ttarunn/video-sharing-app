import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";
import Offline from "./Offline";
import useOnline from "./utils/useOnline";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    confirmpassword: "",
    image: "",
  });
  const online = useOnline();
  const [imgURL, setImgURL] = useState("");
  const [status, setStatus] = useState(0);

  const navigate = useNavigate();

  const {
    REACT_APP_CLOUD_NAME,
    REACT_APP_API_SERVER,
    REACT_APP_CLOUDINARY_IMAGE_POST_API,
  } = process.env;

  const handleSubmit = async (formData) => {
    await fetch(`${REACT_APP_API_SERVER}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => setStatus(res.status))
      .catch((err) => setStatus(err.status));
  };

  const cdnImgUpload = async (files) => {
    setImgURL("");
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "video-sharing");
    data.append("cloud_name", REACT_APP_CLOUD_NAME);

    axios.post(REACT_APP_CLOUDINARY_IMAGE_POST_API, data).then((result) => {
      setImgURL(result.data.secure_url);
      console.log(imgURL, "img");
    });
  };

  function navigatePage(status) {
    if (status === 201) {
      navigate("/signin");
    } else {
      alert("Something Wrong Try Again");
    }
  }

  if (!online) {
    return <Offline />;
  }

  return (
    <div className="sign-in-page">
      <div className="left">
        <img
          src="https://wallpapers.com/images/featured/guardians-of-the-galaxy-5paov6a8eku13ugb.jpg"
          alt="sign-in"
          className="left-img"
        />
        <h1 className="sign-title">FlickFlow</h1>
        <p className="sign-description">Enjoy Multiple Videos at one Place</p>
        <Link to={"/signin"} className="signin-link">
          Sign In
        </Link>
      </div>
      <div className="right">
        <form
          className="center-signup"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formData);
            handleSubmit(formData);
          }}
        >
          {status === 0 ? "" : navigatePage(status)}
          <h1>Register</h1>
          <p>Register to continue access pages</p>

          <label htmlFor="files" className="signup-img">
            {imgURL === "" ? (
              <AiOutlinePlusCircle color="gray" />
            ) : (
              <img src={imgURL} alt="img" className="signup-img" />
            )}
          </label>
          <input
            id="files"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => cdnImgUpload(e.target.files[0])}
            required
          />
          <input
            type="text"
            placeholder="Name"
            className="signup-name"
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="signup-email"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            className="signup-email"
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
            maxLength={10}
            required
          />
          <input
            type="text"
            placeholder="Profession"
            className="signup-email"
            onChange={(e) =>
              setFormData({
                ...formData,
                profession: e.target.value,
                image: imgURL,
              })
            }
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-email"
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="signup-email"
            onChange={(e) =>
              setFormData({
                ...formData,
                confirmpassword: e.target.value,
              })
            }
            required
          />
          <button className="signup-btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
