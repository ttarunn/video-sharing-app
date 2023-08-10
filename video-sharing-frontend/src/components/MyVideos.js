import React from 'react'
import Header from './Header'
import Cards from './Cards'
import { Link } from 'react-router-dom'

const MyVideos = () => {
  
  return (
    <>
      <Header/>
      <div className='my-videos-container'>
        <div className='my-videos-left'>
          <div className='left-info'>
            <p>Recent</p>
            <p style={{marginRight:"3rem"}}>My Videos</p>
          </div>
        {new Array(10).fill(0).map((item,idx) => {
                return <Link to={`/myvideos/${idx}`}><Cards/></Link>
              })}
        </div>
        <div className='my-videos-right'>
          <img src='https://wallpapercave.com/wp/wp10159564.jpg' alt='banner' className='my-video-banner'/>
          <div className='my-videos-details'>
            <h2 className='my-videos-title'>Fast & Furious</h2>
            <div className='my-video-additional'>
              <div>10 Mar 2019</div>
              <div>12 Mins</div>
              <div>200 views</div>
            </div>
          </div>
          <div className='description'>
            <p style={{color:"white"}}>Description</p>
            <p style={{color:"white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          </div>
          <div className='options'>
            <div>
              <lable htmlFor="category" className='label'>Category</lable>
              <select id='category'>
              <option value={""}>Category</option>
                <option value={"action"} className='option'>Action</option>
                <option value={"drama"}>Drama</option>
                <option value={"romance"}>Romance</option>
                <option value={"comedy"}>Comedy</option>
              </select>
            </div>
            <div>
              <lable htmlFor="visibility" className='label'>Visibility</lable>
              <select id='visibility'>
              <option value={""}>Visibility</option>
                <option value={"public"}>Public</option>
                <option value={"private"}>Private</option>
              </select>
            </div>
            <div>
              <lable htmlFor="other" className='label'>Other</lable>
              <select id='other'>
              <option value={""}>Other</option>
                
              </select>
            </div>
          </div>
          <div className='btn-container'>
            <button className='my-video-btn'>Delete</button>
            <button className='my-video-btn btn-purple'>Save</button>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default MyVideos