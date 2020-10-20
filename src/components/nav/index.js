import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MiscContext } from '../../contexts/misc'
import { BackdropContext } from '../../contexts/backdrop'
import './index.scss'

const Nav = () => {
  const [ isIntroFinished ] = useContext(MiscContext).isIntroFinished
  const key = useContext(BackdropContext)
  const display = isIntroFinished ? '' : 'none'
  const invert = (key === 'blog') ? 'invert' : ''
  return (
    <div className="nav animate__animated animate__fadeInDown animate__slow" style={{display}}>
      <Link className={`nav-link ${invert}`} to="/blog">Blog</Link>
      <span className={invert}>&bull;</span>
      <Link className={`nav-link ${invert}`} to="/epk">EPK</Link>
    </div>
  )
}

export default Nav
