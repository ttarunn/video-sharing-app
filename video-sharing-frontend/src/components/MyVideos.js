import React, { useEffect, useState } from 'react'
import Header from './Header'
import Cards from './Cards'
import { Link, useLocation, useParams } from 'react-router-dom'
import MyVideoRight from './MyVideoRight'
import Upload from './Upload'
import { getAllMyPosts } from './utils/helper'
import Shimmer from './Shimmer'
import { func } from 'prop-types'
import NoVideoFound from './NoVideoFound'
import Offline from './Offline'
import useOnline from './utils/useOnline'

const MyVideos = () => {
  
  const[token, setToken] = useState(localStorage.getItem('token'))
  const [data, setData] = useState([])
  const [postID, setPostID] = useState("")
  const [card, setCard] = useState([])
  const online = useOnline()
  const { id } = useParams()
  const headers = { 'Authorization': token }

  async function getAllMyVideos(){
      const data = await fetch(`${process.env.REACT_APP_API_SERVER}/api/video/myvideos`,{ headers })
      const json = await data.json()
      // const apiDATA = await getAllMyPosts({ headers })
      const apiData2 = json.videos.reverse()
      setData(apiData2);
      setCard(apiData2[0]);
  
  }
        
  
function singlePost(id){
  const cardData = data.filter(video => video._id === id);
  
  setPostID(cardData)
}




useEffect(()=> {
  setToken(localStorage.getItem('token'))
  
  console.log(token)
  if(token !== ''){
    getAllMyVideos();
  }
  if(id){
    singlePost(id.split(":")[1])
  };
  
},[id])


  const { pathname } = useLocation();
  if(!online){
    return <Offline/>
   }
  if(token === '' || data.length === 0){
    return <>
        <NoVideoFound/>
        {pathname === '/upload' ?<div><Upload/></div>:""}
    </>
  }
  return (
    <>
      <Header/>
      {data.length === 0 && card.length === 0? <Shimmer/>:
      <div className='my-videos-container'>
        <div className='my-videos-left'>
          <div className='left-info'>
            <p>Recent</p>
            <p style={{marginRight:"3rem"}}>My Videos</p>
          </div>
        {data.map((card) => {
                return <Link to={`/myvideos/:${card._id}`}><Cards card={card}/></Link>
              })}
        </div>
        <div className='my-videos-right'>
              {id !== undefined?(postID.length>0?<MyVideoRight card={postID[0]}/>:<Shimmer/>):(card._id !== undefined?<MyVideoRight card={card}/>:<Shimmer/>)}
              
        </div>
      </div>}
      {pathname === '/upload' ?<div><Upload/></div>:""}
    </>
    
  )
}

export default MyVideos