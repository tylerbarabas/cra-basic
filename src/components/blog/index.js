import React, { useContext } from 'react'
import { MiscContext } from '../../contexts/misc'
import { BlogContext } from '../../contexts/blog'
import './index.scss'

const _listBlogPosts = results => results.map((result, i) => (
  <div className="post-container" key={`${result.title}-${i}`}>
    <h1>{result.title}</h1>
    <p>
      <img src={result.image} alt={result.alt} className="blog-image" />
      {result.body}
    </p>
  </div>
))

const Blog = () => {
  const [ isIntroFinished ] = useContext(MiscContext).isIntroFinished
  const { isRequesting, results } = useContext(BlogContext)
  const display = isIntroFinished ? '' : 'none'
  if (isRequesting) return 'Loading...'
  return (
    <div className="page blog animate__animated animate__fadeIn animate__slow" style={{display}}>
      {_listBlogPosts(results)}
    </div>
  )
}

export default Blog
