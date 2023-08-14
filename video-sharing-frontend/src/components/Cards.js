import React from "react";
import { Link } from "react-router-dom";

const Cards = ({card}) => {
  const { _id, title, desc, videoURL, categories, username, views} = card

  const id = 0;
  return (
    <div className="card">
      <img
        src="https://wallpapercave.com/wp/wp10159564.jpg"
        className="card-img"
        alt="card-img"
      />
      <div className="play-div"></div>
      
        <div className="play-button"><Link to={`/video/:${_id}`} className="Link">&#9654;</Link></div>
      
      <div className="card-title">{title}</div>
      <div className="card-date">10 Mar 2019</div>
      <div className="card-duration">12 Mins</div>
      <div className="card-views">{views} views</div>
      <img
        src="https://d3ml3b6vywsj0z.cloudfront.net/company_images/605db35410fce904a7a8dcd5_images.png"
        className="card-pub-img"
        alt="pub-img"
      />
    </div>
  );
};

export default Cards;
