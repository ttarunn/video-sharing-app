import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchResultVideos, addTextLength } from "./utils/PostsSlice";


const Search = () => {


  const [searchText, setSearchText] = useState("");

  const userPosts = useSelector((store) => store.posts.videos);


  const dispatch = useDispatch();

  function onSearchTest() {
    dispatch(addTextLength(searchText.length));
  }
  const resultData = userPosts[0] || JSON.parse(localStorage.getItem("videos"));

  useEffect(() => {
    onSearchTest();
    const sT = setTimeout(() => {
      const filteredPosts = resultData.filter((video) =>
        video.title.toLowerCase().includes(searchText.toLowerCase())
      );
      dispatch(addSearchResultVideos(filteredPosts));
    }, 100);

    return () => {
      clearTimeout(sT);
    };
  }, [searchText]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        type="text"
        placeholder="search"
        className="search"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        value={searchText}
      />
    </div>
  );
};

export default Search;
