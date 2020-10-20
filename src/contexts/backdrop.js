import React, { createContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const BackdropContext = createContext()

const DEFAULT = 'landing'

const BackdropProvider = props => {
  
  const [ key, setKey ] = useState(DEFAULT)
  const { pathname } = useLocation()

  useEffect(()=>{
    if (pathname === '/' && key !== DEFAULT) {
      setKey(DEFAULT)
      document.body.classList.remove('light')
    } else if (pathname === '/blog' && key !== 'blog') {
      setKey('blog')
      document.body.classList.add('light')
    } else if (pathname === '/epk' && key !== 'epk') {
      setKey('epk')
      document.body.classList.remove('light')
    }
  },[pathname, key])

  return (
    <BackdropContext.Provider value={key}>
      { props.children }
    </BackdropContext.Provider>
  )
}

export default BackdropProvider
