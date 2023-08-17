import React from "react";
import CardLP from "./CardLP"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { viewUpdate } from "./utils/helper";

const SearchPage = () => {
  const searchResultVideo = useSelector(
    (store) => store.posts.searchResultVideo
  );
  return (
    <>
      <div className="search-page-container">
        {searchResultVideo[0].map((item) => (
          <Link to={`/video/:${item._id}`} onClick={()=> viewUpdate(item._id)} key={item._id}><CardLP card={item} /></Link>
        ))}
      </div>
    </>
  );
};

export default SearchPage;
