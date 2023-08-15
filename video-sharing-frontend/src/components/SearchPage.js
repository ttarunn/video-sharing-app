import React from "react";
import Cards from "./Cards";

import { useSelector } from "react-redux";

const SearchPage = () => {
  const searchResultVideo = useSelector(
    (store) => store.posts.searchResultVideo
  );
  return (
    <>
      <div className="search-page-container">
        {searchResultVideo[0].map((item) => (
          <Cards card={item} />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
