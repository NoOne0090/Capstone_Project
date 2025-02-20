import React from 'react'
import '../css_part/explore.css'
import { explore } from '../jsonFiles/explore.js'
import { Link } from 'react-router-dom'

function Explore() {
  return (
    <>
      {explore.map(key => (
        <>
          <Link to={`/${key.link}`}>
            <div className="explore-item">
              <img className='explore-img' src={key.image} alt="Error" />
              <div className="explore-line"></div>
              <span>{key.heading}</span>
            </div>
          </Link>
        </>
      ))}
    </>
  )
}

export default Explore
