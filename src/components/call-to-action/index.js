import React, { useContext } from 'react'
import { MiscContext } from '../../contexts/misc'
import './index.scss'

const CallToAction = () => {
  const [ isIntroFinished ] = useContext(MiscContext).isIntroFinished
  const display = isIntroFinished ? '' : 'none'
  return (
    <div className="call-to-action animate__animated animate__zoomInUp animate__slow" style={{display}}>
        <img className="album-cover" src="hypnotized-album-cover.png" alt="Album cover of the debut album Hypnotized" />
        <h1 className="listen-now">Now streaming!</h1>
        <div className="call-msg">
          <img className="sm-icon" src="spotify.svg" alt="Listen to Bill Godfrey on Spotify" />
          <img className="sm-icon" src="apple_music.svg" alt="Listen to Bill Godfrey on Apple Music" />
          <img className="sm-icon" src="amazon_music.svg" alt="Listen to Bill Godfrey on Amazon Music" />
          <img className="sm-icon" src="pandora.svg" alt="Listen to Bill Godfrey on Pandora" />
        </div>
    </div>
  )
}

export default CallToAction
