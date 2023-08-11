import React from 'react'

const MyVideoRight = ({card}) => {
    const { title, img, date, view, description, duration } = card
  return (
    <div >
          <img src='https://wallpapercave.com/wp/wp10159564.jpg' alt='banner' className='my-video-banner'/>
          <div className='my-videos-details'>
            <h2 className='my-videos-title'>{ title }</h2>
            <div className='my-video-additional'>
              <div>{ date }</div>
              <div>{ duration }</div>
              <div>{ view }</div>
            </div>
          </div>
          <div className='description'>
            <p style={{color:"white"}}>Description</p>
            <p style={{color:"white"}}>{ description }</p>
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
  )
}

export default MyVideoRight