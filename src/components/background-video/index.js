import React from 'react'
import './index.scss'

const BackgroundVideo = () => {
  return (
    <video
      className="background-video"
      src="./video1.mp4"
      muted
      onLoadedData={e=>{
        const video = e.target
        video.playbackRate = 1.5;
        video.play()
        const interval = setInterval(()=>{
          if (video.currentTime > 5) {
            video.pause()
            clearInterval(interval)
          }
        }, 100)
      }}
    />
  )
}

export default BackgroundVideo
