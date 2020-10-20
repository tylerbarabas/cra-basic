import React, { useContext } from 'react'
import { MiscContext } from '../../contexts/misc'
import { BlogContext } from '../../contexts/blog'
import './index.scss'

const _listBlogPosts = results => results.map(result => (
  <div className="post-container">
    <h1>{result.title}</h1>
    <p>{result.body}</p>
  </div>
))

const Blog = () => {
  const [ isIntroFinished ] = useContext(MiscContext).isIntroFinished
  const { isRequesting, results } = useContext(BlogContext)
  const display = isIntroFinished ? '' : 'none'
  return (
    <div className="page blog animate__animated animate__fadeIn animate__slow" style={{display}}>
      {_listBlogPosts(results)}
    </div>
  )
}

export default Blog
