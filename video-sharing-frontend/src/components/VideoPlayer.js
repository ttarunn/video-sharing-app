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
import { addVideo } from "./utils/PostsSlice";

const VideoPlayer = () => {
  const tL = useSelector((store) => store.posts.textLength);
  const { id } = useParams();
  const postId = id.split(":")[1];
  const [data, setData] = useState([]);
  const online = useOnline();
  const dispatch = useDispatch();
  const video = data.filter((video) => video._id === postId);

  async function getAllVideoPosts() {
    const data = await getAllPosts();
    const rev = data?.videos?.reverse();
    setData(rev);
    dispatch(addVideo(rev));
  }

  function videoPlay() {
    return (
      <video width="900px" height="400" controls autoPlay preload="auto" loop>
        <source src={video[0].videoURL} type="video/mp4" />
        This browser doesn't support video tag.
      </video>
    );
  }
  useEffect(() => {
    getAllVideoPosts();
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
          {data.length === 0 ? (
            <Shimmer />
          ) : (
            <div className="video-player">
              <div className="player">
                {/* <img src='https://wallpapercave.com/wp/wp10159564.jpg' className='video-img'/> */}
                {videoPlay()}
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "18rem",
                      justifyContent: "space-between",
                    }}
                  >
                    <img src={video[0].userImg} className="player-pub-img" alt="player-pub-img"/>
                    <p style={{ fontSize: "1.5rem" }}>{video[0].title}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "15rem",
                      justifyContent: "space-between",
                      marginTop: "1.5rem",
                    }}
                  >
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
