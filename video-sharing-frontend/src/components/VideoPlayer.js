import React, { useState } from 'react'
import Header from './Header'
import Cards from './Cards'
// import { MdWidthFull } from 'react-icons/md'

const VideoPlayer = () => {
    const [data, setData] = useState([1,2,3,4,5,6,7,8,9,0])
  return (
    <>
        <Header/>
        <div className='video-player'>
            <div className='player'>
                {/* <img src='https://wallpapercave.com/wp/wp10159564.jpg' className='video-img'/> */}
                <video width = "900px" height = "400" controls autoPlay preload="auto" loop>
                    <source src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type = "video/mp4"/>
                    This browser doesn't support video tag.
                </video>
                <div style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                    <div style={{display:'flex', width:"18rem", justifyContent:"space-between"}}>
                        <img src='https://wallpapercave.com/wp/wp10159564.jpg' className='player-pub-img'/>
                        <p style={{fontSize:"1.5rem"}}>Avengers Infinity War</p>
                    </div>
                    <div style={{display:"flex", width:"15rem", justifyContent:"space-between", marginTop:"1.5rem"}}>
                        <div>Date</div>
                        <div>Duration</div>
                        <div>Views</div>
                    </div>
                </div>
            </div>
            <div className='suggestion'>
                {data.map(item => <Cards/>)}
            </div>
        </div>
    </>
  )
}

export default VideoPlayer