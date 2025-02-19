import React from 'react'
import '../css_part/services.css'
import { services } from '../jsonFiles/services.js'

function Services() {

  return (
    <>
        {services.map(key => (
            <div className="card" style={{ backgroundImage: `url(${key.image})`}}>
                <div className="overlay"></div>
                
                <div className="content">
                    <h2 className="category">
                        {key.category}
                    </h2>
                    <p className="tagline">
                        {key.tagline}
                    </p>
                </div>
            </div>
        ))}
    </>
  )
}

export default Services
