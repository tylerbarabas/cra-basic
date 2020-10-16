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
