import React, { useState } from 'react'
import Cards from './Cards'
import Banner from './Banner'
import StickyBanner from './StickyBanner';

import Header from './Header'
// import '../App.css'
function LandingPage() {
  const [viewMore, setViewMore] = useState(false);

  return <>
    <Header />
    {!viewMore ? <Banner /> : <StickyBanner />}

    <div className='action'>
      <div className='recent'>Recent</div>
      <div className='view-more' onClick={() => setViewMore(viewMore ? false : true)}>{!viewMore ? "View All" : "View Less"}</div>
    </div>
    <div className='card-div'>
      {!viewMore ? new Array(4).fill(0).map((item, idx) => {
        return <Cards />;
      }) : new Array(10).fill(0).map((item, idx) => {
        return <Cards />;
      })}
    </div>

  </>;
}

export default LandingPage