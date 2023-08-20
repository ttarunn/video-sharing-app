import React, { useEffect, useState } from 'react'

const Player = ({ videoURL }) => {
  return (
    <div>
        <video loop controls autoPlay preload="auto" className='player-compo'>
        <source src={videoURL} type="video/mp4" />
        This browser doesn't support video tag.
      </video>
    </div>
  )
}

export default Player