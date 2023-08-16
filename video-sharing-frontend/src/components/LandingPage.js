import React, { createContext, useEffect, useState } from "react";
import Cards from "./Cards";
import Banner from "./Banner";
import StickyBanner from "./StickyBanner";
import Header from "./Header";
import SearchPage from "./SearchPage";
import { getAllPosts } from "./utils/helper";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addVideo } from "./utils/PostsSlice";
import useOnline from "./utils/useOnline";
import Offline from "./Offline";
export const searchContext = createContext({
  search: true,
  setSearch: () => {},
});

function LandingPage() {
  const [viewMore, setViewMore] = useState(false);
  const [postData, setPostData] = useState([]);
  const [search, setSearch] = useState(true);

  const tL = useSelector((store) => store.posts.textLength);
  const dispatch = useDispatch();
  const online = useOnline();

  async function getAllVideoPosts() {
    const data = await getAllPosts();
    const rev = data?.videos?.reverse();
    setPostData(rev);
    dispatch(addVideo(rev));
    localStorage.setItem("videos", JSON.stringify(rev));
  }
  useEffect(() => {
    getAllVideoPosts();
  }, []);

  if (!online) {
    return <Offline />;
  }
  if (postData.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <searchContext.Provider value={{ search, setSearch }}>
        <Header />
      </searchContext.Provider>
      {tL ? (
        <SearchPage />
      ) : (
        <>
          {!viewMore ? (
            <Banner postData={postData[0]} />
          ) : (
            <StickyBanner postData={postData[0]} />
          )}

          <div className="action">
            <div className="recent">Recent</div>
            <div
              className="view-more"
              onClick={() => setViewMore(viewMore ? false : true)}
            >
              {!viewMore ? "View All" : "View Less"}
            </div>
          </div>
          <div className="card-div">
            {!viewMore
              ? new Array(4).fill(0).map((item, idx) => {
                  return (
                    <Link
                      to={`/video/:${postData[idx]._id}`}
                      key={postData[idx]._id}
                    >
                      <Cards card={postData[idx]} />
                    </Link>
                  );
                })
              : postData.map((card) => {
                  return (
                    <Link to={`/video/:${card._id}`}>
                      <Cards card={card} />
                    </Link>
                  );
                })}
          </div>
        </>
      )}
    </>
  );
}

export default LandingPage;
