import React, { createContext, useEffect, useState } from 'react'
import Cards from './Cards'
import Banner from './Banner'
import StickyBanner from './StickyBanner';
import Header from './Header'
import SearchResult from './SearchPage';
import { getAllPosts } from './utils/helper';

export const searchContext = createContext({
  search: [],
  setSearch:()=> {}
});


function LandingPage() {
  const [viewMore, setViewMore] = useState(false);
  const [search, setSearch] = useState([])
  const [postData, setPostData] = useState([])

  async function getAllVideoPosts(){
    const data = await getAllPosts()

    setPostData(data.videos)
    
  }
  useEffect(()=> {
    getAllVideoPosts()
  },[])
  

  if(search.length){
    return <SearchResult search={search}/>
  }
  return <>
    <searchContext.Provider value={{search, setSearch}}>
      <Header />
    </searchContext.Provider>
    {!viewMore ? <Banner /> : <StickyBanner />}

    <div className='action'>
      <div className='recent'>Recent</div>
      <div className='view-more' onClick={() => setViewMore(viewMore ? false : true)}>{!viewMore ? "View All" : "View Less"}</div>
    </div>
    <div className='card-div'>
      {!viewMore ? postData.map((card) => {
        return <Cards card={card}/>;
      }) : new Array(10).fill(0).map((card) => {
        return <Cards card={card}/>;
      })}
    </div>

  </>;
}

export default LandingPage