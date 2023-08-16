import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ card }) => {

  const { _id, title, userImg, thumbnail, views, date, duration } = card;
  const viewUpdate = async () => {
    await fetch(
      `${process.env.REACT_APP_API_SERVER}/api/video/updateViews/${_id}`,
      {
        method: "PUT",
      }
    ).then((res) => window.location.reload());
  };

  return (
    <div className="card">
      <img src={thumbnail} className="card-img" alt="card-img" />
      <div className="play-div"></div>

      <div className="play-button">
        <Link
          to={`/video/:${_id}`}
          className="Link"
          onClick={() => viewUpdate()}
        >
          &#9654;
        </Link>
      </div>

      <div className="card-title">{title}</div>
      <div className="card-date">{date}</div>
      <div className="card-duration">{duration} min</div>
      <div className="card-views">{views} views</div>
      <img src={userImg} className="card-pub-img" alt="pub-img" />
    </div>
  );
};

export default Cards;
