import React, { useContext } from 'react'
import { MiscContext } from '../../contexts/misc'

const Logo = () => {
  const [ isIntroFinished ] = useContext(MiscContext).isIntroFinished
  const display = isIntroFinished ? '' : 'none'
  return (
    <h1
      style={{
        color: 'white',
        position: 'absolute',
        top: 0,
        left: '100px',
        display,
      }}
      className="animate__animated animate__fadeInDown"
    >
      Bill Godfrey
    </h1>
  )
}

export default Logo
