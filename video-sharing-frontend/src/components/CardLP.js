import React from "react";


const CardsLP = ({ card }) => {

  const { title, userImg, thumbnail, views, date, duration } = card;

  return (
    <div className="card">
      <img src={thumbnail} className="card-img" alt="card-img" />
      <div className="play-div"></div>

      <div className="play-button">
          &#9654;
      </div>

      <div className="card-title">{title}</div>
      <div className="card-date">{date}</div>
      <div className="card-duration">{duration} min</div>
      <div className="card-views">{views} views</div>
      <img src={userImg} className="card-pub-img" alt="pub-img" />
    </div>
  );
};

export default CardsLP;
