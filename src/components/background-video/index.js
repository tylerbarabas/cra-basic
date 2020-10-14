import React, { useContext } from 'react'
import { MiscContext } from '../../contexts/misc'
import './index.scss'

const BackgroundVideo = () => {
  const [,setIsIntroFinished] = useContext(MiscContext).isIntroFinished
  return (
    <video
      className="background-video"
      src="./fire1.mp4"
      muted
      autoPlay
      onPlay={e=>{
        const { target } = e
        const interval = setInterval(()=>{
          if (target.currentTime > 2.35) {
            setIsIntroFinished(true)
            clearInterval(interval)
          }
        }, 100)
      }}
    />
  )
}

export default BackgroundVideo
