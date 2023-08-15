import React from 'react'

const StickyBanner = ({ postData }) => {
  const {title, date, duration, views, thumbnail, username, userImg} = postData
  return (
    <div className='sticky-banner'>
        <img
        src={thumbnail}
        className="sticky-banner-img"
        alt="banner"
      />
      <div className="sticky-banner-details">
        <div className="sticky-banner-title">{title}</div>
        <div className="sticky-video-details">
          <div>{date}</div>
          <div>{duration} Mins</div>
          <div>{views} views</div>
        </div>
        <img
          src={userImg}
          className="sticky-pub-img"
          alt="pub-img"
        />
        <h5 className="sticky-pub-name">{username}</h5>
      </div>
    </div>
  )
}

export default StickyBanner