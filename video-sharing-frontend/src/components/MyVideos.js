import React, { useEffect, useState } from "react";
import Header from "./Header";
import Cards from "./Cards";
import { Link, useLocation, useParams } from "react-router-dom";
import MyVideoRight from "./MyVideoRight";
import Upload from "./Upload";
import Shimmer from "./Shimmer";
import NoVideoFound from "./NoVideoFound";
import Offline from "./Offline";
import useOnline from "./utils/useOnline";
import { useDispatch, useSelector } from "react-redux";
import SearchPage from "./SearchPage";
import NotLoggedIn from "./NotLoggedIn";
import { addMyVideos } from "./utils/PostsSlice";

const MyVideos = () => {
  const tL = useSelector((store) => store.posts.textLength);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [data, setData] = useState([]);
  const [postID, setPostID] = useState("");
  const [card, setCard] = useState([]);
  const online = useOnline();
  const { id } = useParams();
  const headers = { "Authorization": token };
  const dispatch = useDispatch();

  async function getAllMyVideos() {
    const data = await fetch(
      `${process.env.REACT_APP_API_SERVER}/api/video/myvideos`,
      { headers }
    );
    const json = await data.json();

    const apiData2 = json.videos.reverse();
    setData(apiData2);
    
   
    dispatch(addMyVideos(apiData2))
    
    setCard(apiData2[0]);
  }

  function singlePost(id) {
    const cardData = data.filter((video) => video._id === id);

    setPostID(cardData);
  }

  useEffect(() => {
    setToken(localStorage.getItem("token"));

    if (token !== "") {
      getAllMyVideos();
      
    }
    if (id) {
      singlePost(id.split(":")[1]);
    }
  }, [id]);

  const { pathname } = useLocation();
  if (!online) {
    return <Offline />;
  }
  if (data.length === 0 && token !=='') {
    return (
      <>
        <NoVideoFound />
        {pathname === "/upload" ? (
        <div>
          <Upload />
        </div>
      ) : (
        ""
      )}
      </>
    );
  }
  if(token===''){
    return <NotLoggedIn/>
  }
  // const data2 = data || JSON.parse(localStorage.getItem('myvideos'))
  return (
    <>
      <Header />
      {tL ? (
        <SearchPage />
      ) : (
        <>
          {data.length === 0 && card.length === 0 ? (
            <Shimmer />
          ) : (
            <div className="my-videos-container">
              <div className="my-videos-left">
                <div className="left-info">
                  <p style={{ marginLeft: "1rem" }}>Recent</p>
                  <p style={{ marginRight: "3rem" }}>My Videos</p>
                </div>
                {data.map((card) => {
                  return (
                    <Link to={`/myvideos/:${card._id}`}>
                      <Cards card={card} />
                    </Link>
                  );
                })}
              </div>
              <div className="my-videos-right">\
              <MyVideoRight />
              </div>
            </div>
          )}
        </>
      )}
      {pathname === "/upload" ? (
        <div>
          <Upload />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MyVideos;
