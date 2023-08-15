import React from "react";

const Banner = ({ postData }) => {
  const { title, date, duration, views, thumbnail, username, userImg } = postData
  return (
    <div className="banner">
      <img
        src={thumbnail}
        className="banner-img"
        alt="banner"
      />
      <div className="banner-details">
        <div className="banner-title">{title}</div>
        <div className="video-details">
          <div>{date}</div>
          <div>{duration} min</div>
          <div>{views} views</div>
        </div>
        <img
          src={userImg}
          className="pub-img"
          alt="pub-img"
        />
        <h5 className="pub-name">{username}</h5>
      </div>
    </div>
  );
};

export default Banner;
