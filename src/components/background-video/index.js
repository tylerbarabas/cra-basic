import React, { useContext } from 'react'
import { MiscContext } from '../../contexts/misc'
import './index.scss'

const BackgroundVideo = () => {
  const [isIntroFinished,setIsIntroFinished] = useContext(MiscContext).isIntroFinished
  const colorClass = isIntroFinished ? 'intro-finished' : ''
  return (
    <video
      className={`background-video ${colorClass}`}
      src="./fire1.mp4"
      muted
      autoPlay
      onPlay={e=>{
        const { target } = e
        const interval = setInterval(()=>{
          if (target.currentTime > 3) {
            setIsIntroFinished(true)
            clearInterval(interval)
          }
        }, 100)
      }}
    />
  )
}

export default BackgroundVideo
