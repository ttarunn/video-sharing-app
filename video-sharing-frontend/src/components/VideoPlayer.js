import React, { useState, useEffect } from "react";
import Header from "./Header";
import Cards from "./Cards";
import { getAllPosts } from "./utils/helper";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useOnline from "./utils/useOnline";
import Offline from "./Offline";
import { useDispatch, useSelector } from "react-redux";
import SearchPage from "./SearchPage";
import Player from "./Player";
import { addMyVideos, addVideo } from "./utils/PostsSlice";

const VideoPlayer = () => {
  const tL = useSelector((store) => store.posts.textLength);

  const { id } = useParams();
  const postId = id.split(":")[1];
  const [data, setData] = useState([]);
  const [myData, setMyData] = useState([]);
  const online = useOnline();
  const dispatch = useDispatch();
  let video = data.filter((video) => video._id === postId);
  const token = localStorage.getItem("token");

  async function getAllVideoPosts() {
    const data = await getAllPosts();
    const rev = data?.videos?.reverse();
    setData(rev);
    dispatch(addVideo(rev));
  }

  const headers = { Authorization: token };

  async function getAllMyVideos() {
    const data = await fetch(
      `${process.env.REACT_APP_API_SERVER}/api/video/myvideos`,
      { headers }
    );
    const json = await data.json();

    const apiData2 = json.videos.reverse();
    setMyData(apiData2);
  }

  if (video.length === 0) {
    video = myData.filter((video) => video._id === postId);
  }

  useEffect(() => {
    getAllVideoPosts();
    if (token !== "" && video.length === 0) {
      getAllMyVideos();
    }
  }, [id]);

  if (!online) {
    return <Offline />;
  }

  return (
    <>
      <Header />
      {tL ? (
        <SearchPage />
      ) : (
        <>
          {data.length === 0 || video.length === 0 ? (
            <Shimmer />
          ) : (
            <div className="video-player">
              <div className="player">
                <Player videoURL={video[0].videoURL} />
                <div className="player-cont">
                  <div className="palyer-details">
                    <img
                      src={video[0].userImg}
                      className="player-pub-img"
                      alt="player-pub-img"
                    />
                    <p className="player-title">{video[0].title}</p>
                  </div>
                  <div className="player-add">
                    <div>{video[0].date}</div>
                    <div>{video[0].duration} min</div>
                    <div>{video[0].views} Views</div>
                  </div>
                </div>
              </div>
              <div className="suggestion">
                {data.map((card) => (
                  <Cards card={card} key={card.Id} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default VideoPlayer;
