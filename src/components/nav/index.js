import React, { useContext } from 'react'
import { MiscContext } from '../../contexts/misc'
import './index.scss'

const Nav = () => {
  const [ isIntroFinished ] = useContext(MiscContext).isIntroFinished
  const display = isIntroFinished ? '' : 'none'
  return (
    <div className="nav animate__animated animate__fadeInDown animate__slow" style={{display}}>
      <span className="nav-link">Blog</span>
      <span>&bull;</span>
      <span className="nav-link">Press</span>
    </div>
  )
}

export default Nav
