import React from "react";
import Header from "./Header";


const NoVideoFound = () => {
  return (
    <>
      <Header />
      <div style={{ fontSize: "2rem", color: "White", textAlign: "center" }}>
        <h2>You havent Upload anything</h2>
      </div>
    </>
  );
};

export default NoVideoFound;
