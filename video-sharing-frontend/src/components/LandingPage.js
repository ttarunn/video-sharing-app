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
  useEffect(async ()=> {
    const apiData = await fetch(`https://flickflow.onrender.com/api/video/getAllPosts`);
    // const json = await apiData.json();
    console.log(apiData.json())
    // setPostData(apiData);
    
  })
  

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
      {!viewMore ? postData.map((item, idx) => {
        return <Cards />;
      }) : new Array(10).fill(0).map((item, idx) => {
        return <Cards />;
      })}
    </div>

  </>;
}

export default LandingPage