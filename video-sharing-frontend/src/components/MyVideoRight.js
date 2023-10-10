import React, { useEffect, useState } from "react";
import { deletePost } from "./utils/helper";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";


const MyVideoRight = () => {

  const [card, setCard] = useState({}) 
  const [statusUp, setStatusUp] = useState(0);
  const [token] = useState(localStorage.getItem("token"));

  const myVideos = useSelector(store => store.posts.myVideos);

  let [updatedData, setUpdatedData] = useState({
    categories: card.categories,
    visibility: "Public",
    description: card.description,
  });
  const { id } = useParams();

  async function getSinglePost(id) {
    console.log(id)
    const data = await fetch(`${process.env.REACT_APP_API_SERVER}/api/video/myvideo/${id}`, {
      headers:{
        "Authorization": token
      }
    })

    const json = await data.json();
    console.log(data.status)
    setCard(json?.videos[0])
    setUpdatedData({
      ...updatedData,
      categories: json?.videos[0].categories,
      visibility: "Public",
      description: json?.videos[0].description,
    })

  };

  useEffect(() => {
    if (id) {
      const postID = id.split(":")[1];
      getSinglePost(postID)
    }else{
      setCard(myVideos[0])
      setUpdatedData({
        ...updatedData,
        categories: myVideos[0].categories,
        visibility: "Public",
        description: myVideos[0].description,
      })
    }
  }, [id, statusUp]);
    
  
  
  const navigate = useNavigate();  

  const updatePost = async (data, id) => {
    if (data.categories !== "") {
      await fetch(
        `${process.env.REACT_APP_API_SERVER}/api/video/updatePost/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": token,
          },
          body: JSON.stringify(data),
        }
      )
        .then(res => {if (res.status === 201) alert("Post Updated Success"); setStatusUp(201)})
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
 
 
  return (
    <>{card.description === undefined? <p style={{textAlign:"center", color:"white"}}>Select One Video</p>:<>
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
          onChange={(e) =>{
            setUpdatedData({
              ...updatedData,
              description: e.target.value,
            });
            
          }
          }
          value={updatedData.description}
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
            <option value={"Action"} className="option">
              Action
            </option>
            <option value={"Drama"}>Drama</option>
            <option value={"Romance"}>Romance</option>
            <option value={"Comedy"}>Comedy</option>
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
            <option value={"Public"}>Public</option>
            <option value={"Private"}>Private</option>
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
          onClick={() => updatePost(updatedData, card._id)}
        >
          Save
        </button>
      </div>
    </>
}</>
  );
}

;

export default MyVideoRight;
