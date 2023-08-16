import React from 'react'

const Shimmer = () => {
  return (
    // <div style={{fontSize:"2rem", color:"White", textAlign:"center", display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
    //     {/* Wait api is fetching data... */}
    //     {new Array(8).fill(0).map(card=> <div style={{height:"15rem", width:"15rem", backgroundColor:"gray", margin:"2rem"}}></div>)}
    // </div>
    <div class="loader">
        <div class="loader-inner"></div>
    </div>
  )
}

export default Shimmer