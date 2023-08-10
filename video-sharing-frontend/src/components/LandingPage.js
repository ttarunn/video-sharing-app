import React from 'react'
import Cards from './Cards'
// import '../App.css'
const LandingPage = () => {
  return <>
  <div className='banner'>
    <img src='https://wallpapercave.com/wp/wp10159564.jpg' className='banner-img'/>
    <div className='banner-details'>
      <div className='banner-title'>Fast & Furious</div>
      <div className='video-details'>
        <div>10 Mar 2019</div>
        <div>12 Mins</div>
        <div>200 views</div>
      </div>
      <img src='https://d3ml3b6vywsj0z.cloudfront.net/company_images/605db35410fce904a7a8dcd5_images.png' className='pub-img'/> 
      <h5 className='pub-name'>Publisher Name</h5>
    </div>    
  </div>
  <div className='action'>
    <div className='recent'>Recent</div>
    <div className='view-more'>View More</div>
  </div>
  <div className='card-div'>
    {new Array(4).fill(0).map((item, idx) => {
      return <Cards/>
    })}
  </div>
  </>
}

export default LandingPage