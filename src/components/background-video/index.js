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
      onEnded={()=>{
        setIsIntroFinished(true)
      }}
    />
  )
}

export default BackgroundVideo
