import React, { useContext } from 'react'
import { MiscContext } from '../../contexts/misc'
import { BackdropContext } from '../../contexts/backdrop'

const Logo = () => {
  const [ isIntroFinished ] = useContext(MiscContext).isIntroFinished
  const key = useContext(BackdropContext) 
  const display = isIntroFinished ? '' : 'none'
  const src = (key === 'blog') ? 'bg_logo_blue.png' : 'bg_logo_yellow.png'
  return (
    <img
      src={src}
      style={{
        position: 'absolute',
        top: '30px',
        left: '100px',
        height: '10%',
        display,
      }}
      className="animate__animated animate__fadeInDown animate__slow"
      alt="Bill Godfrey"
    />
  )
}

export default Logo
