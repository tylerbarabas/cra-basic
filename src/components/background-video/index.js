import React from 'react'
import './index.scss'

const BackgroundVideo = () => {
  return (
    <video
      className="background-video"
      src="./fire1.mp4"
      muted
      autoPlay
    />
  )
}

export default BackgroundVideo
