import React, { useState, useEffect } from 'react'
import Header from './Header'
import Cards from './Cards'
import { getAllPosts } from './utils/helper'
import { useParams } from 'react-router'
import Shimmer from './Shimmer'
// import { MdWidthFull } from 'react-icons/md'

const VideoPlayer = () => {

    const { id } = useParams()
    const postId = id.split(":")[1]
    const [data, setData] = useState([]);
    const [videoData,setVideoData] = useState([]);
   
    const video = data.filter(video => video._id === postId)

    async function getAllVideoPosts(){
        const data = await getAllPosts()
        setData(data.videos.reverse())
        
    }

    function videoPlay(){
        return <video width = "900px" height = "400" controls autoPlay preload="auto" loop>
        <source src = {video[0].videoURL} type = "video/mp4"/>
        This browser doesn't support video tag.
        </video>
    }
      useEffect(()=> {
        getAllVideoPosts()        
      },[id])



  return (
    <>
        <Header/>
        {data.length === 0? <Shimmer/>
        :<div className='video-player'>
            <div className='player'>
                {/* <img src='https://wallpapercave.com/wp/wp10159564.jpg' className='video-img'/> */}
                {videoPlay()}
                <div style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                    <div style={{display:'flex', width:"18rem", justifyContent:"space-between"}}>
                        <img src={video[0].userImg} className='player-pub-img'/>
                        <p style={{fontSize:"1.5rem"}}>{video[0].title}</p>
                    </div>
                    <div style={{display:"flex", width:"15rem", justifyContent:"space-between", marginTop:"1.5rem"}}>
                        <div>{video[0].date}</div>
                        <div>{video[0].duration} min</div>
                        <div>{video[0].views} Views</div>
                    </div>
                </div>
            </div>
            <div className='suggestion'>
                {data.map(card => <Cards card={card}/>)}
            </div>
        </div>}
    </>
  )
}

export default VideoPlayer