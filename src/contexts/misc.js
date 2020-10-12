import React, { useState, createContext } from 'react'

export const MiscContext = createContext('misc')

const DEFAULT = {
  isIntroFinished: false,
}

const MiscProvider = props => {
  const misc = {
    isIntroFinished: useState(DEFAULT.isIntroFinished)
  }
  return (
    <MiscContext.Provider value={misc}>
      { props.children }
    </MiscContext.Provider>
  )
}

export default MiscProvider
