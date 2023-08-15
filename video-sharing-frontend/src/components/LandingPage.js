import React, { createContext, useEffect, useState } from 'react'
import Cards from './Cards'
import Banner from './Banner'
import StickyBanner from './StickyBanner';
import Header from './Header'
import SearchResult from './SearchPage';
import { getAllPosts } from './utils/helper';
import Shimmer from './Shimmer';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export const searchContext = createContext({
  search: [],
  setSearch:()=> {}
});


function LandingPage() {
  const [viewMore, setViewMore] = useState(false);
  const [search, setSearch] = useState([])
  const [postData, setPostData] = useState([])
  
  const navigate = useNavigate()

  async function getAllVideoPosts(){
    const data = await getAllPosts()
    setPostData(data.videos.reverse())
  }
  useEffect(()=> {
    getAllVideoPosts()
  },[])
  

  if(search.length){
    return <SearchResult search={search}/>
  }
  if(postData.length === 0){
    return <Shimmer/>
  }
  return <>
    <searchContext.Provider value={{search, setSearch}}>
      <Header />
    </searchContext.Provider>
    {!viewMore ? <Banner postData={postData[0]}/> : <StickyBanner postData={postData[0]}/>}
  
    <div className='action'>
      <div className='recent'>Recent</div>
      <div className='view-more' onClick={() => setViewMore(viewMore ? false : true)}>{!viewMore ? "View All" : "View Less"}</div>
    </div>
    <div className='card-div'>
      {!viewMore ? postData.map((item, idx) => {
        return <Link to={`/myvideos/:${postData[idx]._id}`}><Cards card={postData[idx]}/></Link>;
      }) : postData.map((card) => {
        return <Cards card={card}/>;
      })}
    </div>

  </>;
}

export default LandingPage