import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { VscCloudUpload } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import axios from "axios";

const Upload = () => {
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [progressVideo, setProgressVideo] = useState(false);
  const [progressThumb, setProgressThumb] = useState(false);
  const [token, setToken] = useState("");
  const [status, setStatus] = useState(0);
  const [formData, setFormData] = useState({
    videoURL: "",
    name: "",
    description: "",
    categories: "",
    visibility: "",
    other: "other",
    thumbnail: "",
    duration: 0,
  });

  const {
    REACT_APP_CLOUDINARY_VIDEO_POST_API,
    REACT_APP_CLOUD_NAME,
    REACT_APP_API_SERVER,
    REACT_APP_CLOUDINARY_IMAGE_POST_API,
  } = process.env;

  const cdnVideoUpload = async (files) => {
    setVideoUrl("");
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "video-sharing");
    data.append("cloud_name", REACT_APP_CLOUD_NAME);

    axios
      .post(REACT_APP_CLOUDINARY_VIDEO_POST_API, data, {
        onUploadProgress: (event) => {
          setProgressVideo(Math.round(100 * event.loaded) / event.total);
        },
      })
      .then((result) => {
        setVideoUrl(result);
      });
  };

  const cdnThumbnailUpload = async (files) => {
    setThumbnail("");
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "video-sharing");
    data.append("cloud_name", REACT_APP_CLOUD_NAME);

    axios
      .post(REACT_APP_CLOUDINARY_IMAGE_POST_API, data, {
        onUploadProgress: (event) => {
          setProgressThumb(Math.round(100 * event.loaded) / event.total);
        },
      })
      .then((result) => {
        setThumbnail(result);
      });
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleSubmit = async (data) => {
    await fetch(`${REACT_APP_API_SERVER}/api/video/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 201) {
          navigate("/myvideos");
        }
        window.location.reload();
      })
      .catch((err) => setStatus(err.status));
  };


  function secToMin(sec){
    let min = parseInt(sec/60)
    let second = sec%60
    return (min+"."+second)
  }


  return (
    <div id="upload-container">
      <form
        className="upload"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
      >
        <MdCancel onClick={() => navigate("/myvideos")} className="cancel" />
        <h4>Upload New Video</h4>
        <label htmlFor="video">
          <div className="browse-file">
            <input
              type="file"
              id="video"
              onChange={(e) => {
                cdnVideoUpload(e.target.files[0]);
              }}
              required
            />
            <VscCloudUpload className="upload-icon" />
            <p>Browse to choose a file</p>
            {progressVideo && <ProgressBar progress={progressVideo} />}
          </div>
        </label>
        <label htmlFor="thumbnail">
          <div className="thumbnail">
            <input
              type="file"
              id="thumbnail"
              onChange={(e) => {
                cdnThumbnailUpload(e.target.files[0]);
              }}
              required
            />
            {progressThumb ? (
              <ProgressBar progress={progressThumb} />
            ) : (
              "Upload Thumbnail"
            )}
          </div>
        </label>
        <input
          type="text"
          placeholder="Name"
          className="upload-name"
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value,
            });
          }}
          required
        />
        <textarea
          placeholder="Description"
          onChange={(e) => {
            setFormData({
              ...formData,
              description: e.target.value,
            });
          }}
          required
        />

        <div className="upload-select">
          <div>
            <label htmlFor="category" className="label">
              Category
            </label>
            <select
              id="category"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  categories: e.target.value,
                });
              }}
            >
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
            <label htmlFor="visibility" className="label">
              Visibility
            </label>
            <select
              id="visibility"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  visibility: e.target.value,
                });
              }}
            >
              <option value={""}>Visibility</option>
              <option value={"Public"}>Public</option>
              <option value={"Private"}>Private</option>
            </select>
          </div>
          <div>
            <label htmlFor="other" className="label">
              Other
            </label>
            <select
              id="other"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  other: e.target.value,
                });
              }}
            >
              <option value={""}>Other</option>
            </select>
          </div>
        </div>
        <button
          className="cntr my-video-btn btn-purple"
          onClick={() => {
            setFormData({
              ...formData,
              videoURL: videoUrl.data.secure_url,
              duration: secToMin(parseInt(videoUrl.data.duration)),
              thumbnail: thumbnail.data.secure_url,
            });
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Upload;
