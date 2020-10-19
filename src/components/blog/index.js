import React, { useContext } from 'react'
import { MiscContext } from '../../contexts/misc'
import './index.scss'

const Blog = () => {
  const [ isIntroFinished ] = useContext(MiscContext).isIntroFinished
  const display = isIntroFinished ? '' : 'none'
  return (
    <div className="page blog animate__animated animate__fadeIn animate__slow" style={{display}}>
      <div className="paper">
        <img src="notebook-paper.png" className="paper-img" />
        <div className="paper-inner">
          <h1>And so I packed my shit and left...</h1>
          <p>Shes a child of satan. And theres no escapin. Once she put her little voice inside my head.Shes a child of satan. And theres no escapin. Once she put her little voice inside my head.Shes a child of satan. And theres no escapin. Once she put her little voice inside my head.Shes a child of satan. And theres no escapin. Once she put her little voice inside my head.Shes a child of satan. And theres no escapin. Once she put her little voice inside my head.Shes a child of satan. And theres no escapin. Once she put her little voice inside my head.Shes a child of satan. And theres no escapin. Once she put her little voice inside my head.Shes a child of satan. And theres no escapin. Once she put her little voice inside my head.</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
