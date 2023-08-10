import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="https://wallpapercave.com/wp/wp10159564.jpg"
        className="banner-img"
        alt="banner"
      />
      <div className="banner-details">
        <div className="banner-title">Fast & Furious</div>
        <div className="video-details">
          <div>10 Mar 2019</div>
          <div>12 Mins</div>
          <div>200 views</div>
        </div>
        <img
          src="https://d3ml3b6vywsj0z.cloudfront.net/company_images/605db35410fce904a7a8dcd5_images.png"
          className="pub-img"
          alt="pub-img"
        />
        <h5 className="pub-name">Publisher Name</h5>
      </div>
    </div>
  );
};

export default Banner;
