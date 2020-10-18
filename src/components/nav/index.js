import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MiscContext } from '../../contexts/misc'
import './index.scss'

const Nav = () => {
  const [ isIntroFinished ] = useContext(MiscContext).isIntroFinished
  const display = isIntroFinished ? '' : 'none'
  return (
    <div className="nav animate__animated animate__fadeInDown animate__slow" style={{display}}>
      <Link className="nav-link" to="/blog">Blog</Link>
      <span>&bull;</span>
      <Link className="nav-link" to="/epk">EPK</Link>
    </div>
  )
}

export default Nav
