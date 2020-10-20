import React, { useContext, useEffect, useState } from 'react'
import { MiscContext } from '../../contexts/misc'
import './index.scss'

const _getNowStreaming = () => [
        (<h1 className="listen-now animate__animated animate__fadeIn">Now streaming!</h1>),
        (
        <div className="call-msg animate__animated animate__fadeIn">
          <img className="sm-icon" src="spotify.svg" alt="Listen to Bill Godfrey on Spotify" />
          <img className="sm-icon" src="apple_music.svg" alt="Listen to Bill Godfrey on Apple Music" />
          <img className="sm-icon" src="amazon_music.svg" alt="Listen to Bill Godfrey on Amazon Music" />
          <img className="sm-icon" src="pandora.svg" alt="Listen to Bill Godfrey on Pandora" />
        </div>
      )]

const _getMusicVideo = () => (
  <div style={{textAlign: 'center'}}>
    <h1 className="touch-video animate__animated animate__fadeIn">Experience the touch video!</h1>
    <a href="https://hypnotized.billgodfrey.com" target="_blank">
      <button className="watch-now animate__animated animate__fadeIn">
        Watch now
      </button>
    </a>
  </div>
)

const CallToAction = () => {
  const [ isIntroFinished ] = useContext(MiscContext).isIntroFinished
  const display = isIntroFinished ? '' : 'none'
  const [ isNowStreaming, setIsNowStreaming ] = useState(false)
  const bottomTemplate = isNowStreaming ? _getNowStreaming() : _getMusicVideo()
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setIsNowStreaming(!isNowStreaming)
    },5000)
    return ()=>{
      clearTimeout(timeout)
    }
  })
  return (
    <div className="page call-to-action animate__animated animate__zoomInUp animate__slow" style={{display}}>
        <img className="album-cover" src="hypnotized-album-cover.png" alt="Album cover of the debut album Hypnotized" />
        { bottomTemplate }
    </div>
  )
}

export default CallToAction
