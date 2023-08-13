import React from 'react'

const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className='progress-bar'>
        <div className='progress-bar-fill' style={{transform:`translate(${progress - 100}%)`}}>{progress !== 100 ? parseInt(progress) + "%" : "Completed"}</div>
    </div>
  )
}

export default ProgressBar