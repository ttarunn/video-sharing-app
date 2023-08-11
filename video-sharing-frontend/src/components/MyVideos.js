import React from 'react'
import Header from './Header'
import Cards from './Cards'
import { Link, useLocation, useParams } from 'react-router-dom'
import MyVideoRight from './MyVideoRight'
import Upload from './Upload'

const MyVideos = () => {
  const { id } = useParams()
  const card = [
    {
      title:"Avengers Infinity War",
      img:"https://e0.pxfuel.com/wallpapers/645/927/desktop-wallpaper-avengers-infinity-war-full-background-for-your-mobile-tablet-explore-1920-by-1080-windows-10-windows-7-avengers-infinity-war-pc.jpg",
      date:"10 June 2021",
      duration:"2 hrs",
      view:"2500",
      description:"The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.",
    },
    {
      title:"Avengers: Age of Ultron",
      img:"https://staticg.sportskeeda.com/editor/2023/03/1607c-16799944807971-1920.jpg",
      date:"10 June 2015",
      duration:"1 hrs",
      view:"250",
      description:"When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
    }
  ];
  const { pathname } = useLocation()
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
              <MyVideoRight card={card[id || 0]}/>
        </div>
      </div>
      {pathname === '/upload' ?<div><Upload/></div>:""}
    </>
    
  )
}

export default MyVideos