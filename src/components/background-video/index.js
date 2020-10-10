import React, { useState } from 'react'
import './index.scss'

const BackgroundVideo = () => {
  const [isHueRotate, setIsHueRotate] = useState(false)
  const hue = isHueRotate ? 'hue-rotate' : ''
  return (
    <video
      className={`background-video ${hue}`}
      src="./video1.mp4"
      muted
      onLoadedData={e=>{
        const video = e.target
        video.playbackRate = 2;
        video.play()
        const interval = setInterval(()=>{
          if (video.currentTime > 3) video.playbackRate = Math.max((video.playbackRate * 0.92).toFixed(1), 0.2)
          if (video.currentTime > 5) {
            video.pause()
            clearInterval(interval)
            setIsHueRotate(true)
          }
        }, 100)
      }}
    />
  )
}

export default BackgroundVideo
