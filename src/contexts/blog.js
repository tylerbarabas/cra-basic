import React, { createContext, useState, useEffect, useRef } from 'react'
import Service from '../service'

export const BlogContext = createContext()

const DEFAULT = {
  isRequesting: false,
  isError: false,
  results: [],
}

const BlogProvider = props => {
  const [ blog, setBlog ] = useState(DEFAULT)

  const blogMethods = {
    getBlog: async ()=> {
      setBlog({
        ...blog,
        isRequesting: true,
        isError: false,
      })
      const res = await Service.getBlog()
      const data = await res.json()
      console.log('data', data)
      if (res.ok) {
        setBlog({
          ...blog,
          isRequesting: false,
          isError: false,
          results: data.results,
        })
      } else {
        setBlog({
          ...blog,
          isRequesting: false,
          isError: true,
        })
      }
    }
  }

  const _blogMethods = useRef(blogMethods)
  useEffect(()=>{
    _blogMethods.current.getBlog()
  },[])

  return (
    <BlogContext.Provider value={blog}>
      { props.children }
    </BlogContext.Provider>
  )
}

export default BlogProvider
