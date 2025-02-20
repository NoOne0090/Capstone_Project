import React from 'react'
import '../css_part/services.css'
import {Link} from 'react-router-dom';
import { services } from '../jsonFiles/services.js'

function Services() {

  return (
    <>
        {services.map(key => (
            <>
                <Link to={`${key.link}`}>
                    <div className="service-card" style={{ backgroundImage: `url(${key.image})`}}>
                        <div className="service-overlay"></div>
                        
                        <div className="service-content">
                            <h2 className="service-category">
                                {key.category}
                            </h2>
                            <p className="service-tagline">
                                {key.tagline}
                            </p>
                        </div>
                    </div>
                </Link>
            </>
        ))}
    </>
  )
}

export default Services
