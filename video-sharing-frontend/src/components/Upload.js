import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { VscCloudUpload } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import axios from "axios";

const Upload = () => {
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState("");
  const [progress, setProgress] = useState(false);
  const [formData, setFormData] = useState({
    videoURL: "",
    name: "",
    description: "",
    category: "",
    visibility: "",
    other: "other",

  });
  
  const { REACT_APP_CLOUDINARY_POST_API, REACT_APP_CLOUD_NAME, REACT_APP_API_SERVER } = process.env;

  const cdnApi = async (files) => {
    setVideoUrl("");
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "video-sharing");
    data.append("cloud_name", REACT_APP_CLOUD_NAME);

    axios
      .post(REACT_APP_CLOUDINARY_POST_API, data, {
        onUploadProgress: (event) => {
          setProgress(Math.round(100 * event.loaded) / event.total);
        },
      })
      .then((result) => {
        setVideoUrl(result)
      });
  };

  const handleSubmit = async () => {
    await fetch(`${REACT_APP_API_SERVER}/createPost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="upload-container">
      <form className="upload" onSubmit={(e)=> {
        e.preventDefault();
        handleSubmit()
        console.log(formData)
      }}>
        <MdCancel onClick={() => navigate("/myvideos")} className="cancel" />
        <h4>Upload New Video</h4>
        <label htmlFor="video">
          <div className="browse-file">
            <input
              type="file"
              id="video"
              onChange={(e) => {
                cdnApi(e.target.files[0]);
              }}
            />
            <VscCloudUpload className="upload-icon" />
            <p>Drag and drop to upload</p>
            <p>or browse to choose a file</p>
            {progress && <ProgressBar progress={progress} />}
          </div>
        </label>
        <input type="text" placeholder="Name" className="upload-name" onChange={(e)=> {
          setFormData({
            ...formData,
            name:e.target.value
          })
        }}/>
        <textarea placeholder="Description" onChange={(e)=> {
          setFormData({
            ...formData,
            description:e.target.value
          })
        }}/>

        <div className="upload-select">
          <div>
            <label htmlFor="category" className="label" >
              Category
            </label>
            <select id="category" onChange={(e)=> {
              setFormData({
                ...formData,
                category:e.target.value
              })
            }}>
              <option value={""}>Category</option>
              <option value={"Action"} className="option">
                Action
              </option>
              <option value={"Drama"}>Drama</option>
              <option value={"Romance"}>Romance</option>
              <option value={"Comedy"}>Comedy</option>
              <option value={"Coding"}>Coding</option>
            </select>
          </div>
          <div>
            <label htmlFor="visibility" className="label" >
              Visibility
            </label>
            <select id="visibility" onChange={(e)=> {
              setFormData({
                ...formData,
                visibility:e.target.value
              })
            }}>
              <option value={""}>Visibility</option>
              <option value={"public"}>Public</option>
              <option value={"private"}>Private</option>
            </select>
          </div>
          <div>
            <label htmlFor="other" className="label">
              Other
            </label>
            <select id="other" onChange={(e)=> {
              setFormData({
                ...formData,
                other:e.target.value
              })
            }}>
              <option value={""}>Other</option>
            </select>
          </div>
        </div>
        <button className="my-video-btn btn-purple" type="submit" onClick={()=> {
          setFormData({
            ...formData,
            videoURL:videoUrl.data.secure_url
          })
        }}>Save</button>
      </form>
    </div>
  );
};

export default Upload;
