
import React from 'react'
import Shimmer from './Shimmer'

const MyVideoRight = ({card}) => {
  
    const { title, date, view, description, duration } = card    

    if(card.length === 0){
      return <Shimmer/>
    }
  return (
    <div >
          <img src={card.thumbnail} alt='banner' className='my-video-banner'/>
          <div className='my-videos-details'>
            <h2 className='my-videos-title'>{ card.title }</h2>
            <div className='my-video-additional'>
              <div>{ card.date }</div>
              <div>{ card.duration } min</div>
              <div>{ card.view } views</div>
            </div>
          </div>
          <div className='description'>
            <p style={{color:"white"}}>Description</p>
            <p style={{color:"white"}}>{ card.description }</p>
          </div>
          <div className='options'>
            <div>
              <label htmlFor="category" className='label'>Category</label>
              <select id='category'>
              <option value={""}>Category</option>
                <option value={"action"} className='option'>Action</option>
                <option value={"drama"}>Drama</option>
                <option value={"romance"}>Romance</option>
                <option value={"comedy"}>Comedy</option>
              </select>
            </div>
            <div>
              <label htmlFor="visibility" className='label'>Visibility</label>
              <select id='visibility'>
              <option value={""}>Visibility</option>
                <option value={"public"}>Public</option>
                <option value={"private"}>Private</option>
              </select>
            </div>
            <div>
              <label htmlFor="other" className='label'>Other</label>
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