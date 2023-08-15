import React, { useEffect, useState } from 'react'
import Header from './Header'
import Cards from './Cards'
import { Link, useLocation, useParams } from 'react-router-dom'
import MyVideoRight from './MyVideoRight'
import Upload from './Upload'
import { getAllPosts } from './utils/helper'
import Shimmer from './Shimmer'
import { func } from 'prop-types'

const MyVideos = () => {
  
  const[token, setToken] = useState('')
  const [data, setData] = useState([])
  const [postID, setPostID] = useState("")
  const [card, setCard] = useState([])

  const { id } = useParams()
  

  async function getAllVideoPosts(){
      const apiDATA = await getAllPosts()
      const apiData2 = apiDATA.videos.reverse()
      setData(apiData2);
      
      setCard(apiData2[0]);
      
  }
  
function singlePost(id){
  const cardData = data.filter(video => video._id === id);
  
  setPostID(cardData)
}



useEffect(()=> {
  getAllVideoPosts();
  if(id){
    singlePost(id.split(":")[1])
  };
  setToken(localStorage.getItem('token'))
},[id])


  const { pathname } = useLocation()
  if(token === ''){
    return <Shimmer/>
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