import React, { useContext, useEffect, useState } from "react";
import { searchContext } from "./LandingPage";

import { useDispatch, useSelector } from "react-redux";

import { changeState } from "./utils/SearchSlice";
import { addSearchResultVideos, addTextLength } from "./utils/PostsSlice";
import Cards from "./Cards";

const Search = () => {
  const ssss = useContext(searchContext)

  const [searchText, setSearchText] = useState("");
  const [searchPostData, setSearchPostData] = useState([]);
  const [view, setView] = useState(false);

  const userPosts = useSelector((store) => store.posts.videos);
  const searchResultVideo = useSelector(store => store.posts.searchResultVideo);
  const tL = useSelector(store => store.posts.textLength);
  console.log(tL)
  const dispatch = useDispatch()

  function onSearchTest(){
    dispatch(addTextLength(searchText.length))
  }
  
  useEffect(()=>{
    onSearchTest()
    const sT = setTimeout(()=> {
      const filteredPosts = userPosts[0]?.filter(video => video.title.toLowerCase().includes(searchText.toLowerCase()));
      dispatch(addSearchResultVideos(filteredPosts));
      console.log(searchPostData)
    },100);

    return ()=> {
      clearTimeout(sT)
    }
  },[searchText])
 
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        type="text"
        placeholder="search"
        className="search"
        onFocus={() => setView(true)}
        onBlur={() => setView(false)}
        onChange={(e) => {
          setSearchText(e.target.value);
          
        }}
        value={searchText}
      />
      
    </div>
  );
};

export default Search;
