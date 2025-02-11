import React from 'react'
import '../css_part/explore.css'
import { explore } from '../jsonFiles/explore.js'

function Explore() {
  return (
    <>
      {explore.map(key => (
        <div className="explore-item">
            <img className='explore-img' src={key.image} alt="Error" />
            <div className="explore-line"></div>
            <span>{key.heading}</span>
        </div>
      ))}
    </>
  )
}

export default Explore
