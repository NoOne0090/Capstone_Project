import React from 'react'
import { useLocation } from 'react-router-dom';
import '../css_part/continue.css'

function Continue() {
    const location = useLocation();
    const {img, name, price, description} = location.state || {};

    // console.log(img)
    // console.log(name)
    // console.log(price)
  return (
    <>
        <div className="continue-container">
            <div className="continue-left">
                <h1>{name}</h1>

                <div className="continue-image">
                    <img src={img} alt="Error" />
                </div>

                <h2>About this Gig</h2>
                <p>{description}</p>
                <p>{price}</p>

                <div className="continue-reviews">
                    <h2>Reviews</h2>
                </div>
                
            </div>

            <div className="continue-right">

            </div>
        </div>
    </>
  )
}

export default Continue
