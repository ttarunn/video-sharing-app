import React, { useEffect, useState } from 'react'

const Player = ({ videoURL }) => {
  return (
    <div>
        <video width="900px" height="400" controls autoPlay preload="auto" loop>
        <source src={videoURL} type="video/mp4" />
        This browser doesn't support video tag.
      </video>
    </div>
  )
}

export default Player