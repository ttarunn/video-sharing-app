import React from 'react'

const Shimmer = ({message}) => {
  return (
    // <div style={{fontSize:"2rem", color:"White", textAlign:"center", display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
    //     {/* Wait api is fetching data... */}
    //     {new Array(8).fill(0).map(card=> <div style={{height:"15rem", width:"15rem", backgroundColor:"gray", margin:"2rem"}}></div>)}
    // </div>
    <><p className='api-msg'>{message}</p>
    <div className="loader">
        <div className="loader-inner"></div>
    </div>
    </>
  )
}

export default Shimmer