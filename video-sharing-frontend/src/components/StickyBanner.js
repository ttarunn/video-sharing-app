import React from 'react'

const StickyBanner = () => {
  return (
    <div className='sticky-banner'>
        <img
        src="https://wallpapercave.com/wp/wp10159564.jpg"
        className="sticky-banner-img"
        alt="banner"
      />
      <div className="sticky-banner-details">
        <div className="sticky-banner-title">Fast & Furious</div>
        <div className="sticky-video-details">
          <div>10 Mar 2019</div>
          <div>12 Mins</div>
          <div>200 views</div>
        </div>
        <img
          src="https://d3ml3b6vywsj0z.cloudfront.net/company_images/605db35410fce904a7a8dcd5_images.png"
          className="sticky-pub-img"
          alt="pub-img"
        />
        <h5 className="sticky-pub-name">Publisher Name</h5>
      </div>
    </div>
  )
}

export default StickyBanner