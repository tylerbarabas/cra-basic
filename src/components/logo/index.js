import React, { useContext } from 'react'
import { MiscContext } from '../../contexts/misc'

const Logo = () => {
  const [ isIntroFinished ] = useContext(MiscContext).isIntroFinished
  const display = isIntroFinished ? '' : 'none'
  return (
    <img
      src="bg_logo_yellow.png"
      style={{
        position: 'absolute',
        top: '20px',
        left: '100px',
        height: '140px',
        display,
      }}
      className="animate__animated animate__fadeInDown"
    />
  )
}

export default Logo
