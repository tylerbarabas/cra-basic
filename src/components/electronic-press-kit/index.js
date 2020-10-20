import React, { useContext } from 'react'
import { MiscContext } from '../../contexts/misc'

const ElectronicPressKit = () => {
  const [ isIntroFinished ] = useContext(MiscContext).isIntroFinished
  const display = isIntroFinished ? '' : 'none'
  return (
    <div className="page electronic-press-kit animate__animated animate__fadeIn" style={{display}}>
      <img src="terlingua.jpeg" style={{height: '50vh'}} />
    </div>
  )
}

export default ElectronicPressKit
