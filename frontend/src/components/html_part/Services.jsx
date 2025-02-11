import React from 'react'
import '../css_part/services.css'
import { services } from '../jsonFiles/services.js'

function Services() {

  return (
    <>
        {services.map(key => (
            <div class="card" style={{ backgroundImage: `url(${key.image})`}}>
                <div class="overlay"></div>
                
                <div class="content">
                    <h2 class="category">
                        {key.category}
                    </h2>
                    <p class="tagline">
                        {key.tagline}
                    </p>
                </div>
            </div>
        ))}
    </>
  )
}

export default Services
