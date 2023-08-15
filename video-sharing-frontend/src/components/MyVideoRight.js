import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { deletePost } from "./utils/helper";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
const MyVideoRight = ({ card }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [updatedData, setUpdatedData] = useState({
    categories: card.categories,
    visibility: "Public",
    description: card.description,
  });

  const navigate = useNavigate();
  const userPosts = useSelector((store) => store.posts.videos);
  const { id } = useParams();

  const uservideos = userPosts[0] || JSON.parse(localStorage.getItem("videos"));

  const updatePost = async (data) => {
    if (data.categories !== "") {
      await fetch(
        `${process.env.REACT_APP_API_SERVER}/api/video/updatePost/${card._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: token,
          },
          body: JSON.stringify(data),
        }
      )
        .then((result) => {
          if (result.status === 201) window.location.reload();
        })
        .catch((err) => console.log(err));
    } else {
      alert("please select categories");
    }
  };

  async function deleteMyPost(id, token) {
    const res = await deletePost(id, token);
    if (res === 201) {
      navigate("/myvideos");
      window.location.reload();
    }
  }
  useEffect(() => {
    if (id) {
      const postID = id.split(":")[1];
      const data = uservideos.filter((video) => video._id === postID);
      console.log(data[0]);
    }
  }, [id]);
  if (card.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <img src={card.thumbnail} alt="banner" className="my-video-banner" />
      <div className="my-videos-details">
        <h2 className="my-videos-title">{card.title}</h2>
        <div className="my-video-additional">
          <div>{card.date}</div>
          <div>{card.duration} min</div>
          <div>{card.views} views</div>
        </div>
      </div>
      <div className="description">
        <p style={{ color: "white" }}>Description</p>
        <textarea
          style={{ color: "white" }}
          value={updatedData.description}
          onChange={(e) =>
            setUpdatedData({
              ...updatedData,
              description: e.target.value,
            })
          }
        ></textarea>
      </div>
      <div className="options">
        <div>
          <label htmlFor="category" className="label">
            Category
          </label>
          <select
            id="category"
            onChange={(e) =>
              setUpdatedData({
                ...updatedData,
                categories: e.target.value,
              })
            }
          >
            <option value={""}>Category</option>
            <option value={"action"} className="option">
              Action
            </option>
            <option value={"drama"}>Drama</option>
            <option value={"romance"}>Romance</option>
            <option value={"comedy"}>Comedy</option>
          </select>
        </div>
        <div>
          <label htmlFor="visibility" className="label">
            Visibility
          </label>
          <select
            id="visibility"
            onChange={(e) =>
              setUpdatedData({
                ...updatedData,
                visibility: e.target.value,
              })
            }
          >
            <option value={""}>Visibility</option>
            <option value={"public"}>Public</option>
            <option value={"private"}>Private</option>
          </select>
        </div>
        <div>
          <label htmlFor="other" className="label">
            Other
          </label>
          <select id="other">
            <option value={""}>Other</option>
          </select>
        </div>
      </div>
      <div className="btn-container">
        <button
          className="my-video-btn"
          onClick={() => deleteMyPost(card._id, token)}
        >
          Delete
        </button>
        <button
          className="my-video-btn btn-purple"
          onClick={() => updatePost(updatedData)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default MyVideoRight;
