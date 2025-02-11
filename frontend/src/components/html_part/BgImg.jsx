import React from 'react';
import '../css_part/bgImg.css'
import { Link } from 'react-router-dom';

function BgImg() {


  return (
    <>
      {/* Image Part */}
      <div className="image">

        {/* Text Part */}
        <div className="hero-section">
          <h1>Turn Your Ideas Into Reality With Our Services</h1>
          <br />

          <form >
            <input 
              className='service-input'
              type="search" 
              autoComplete="off"
              placeholder='Search for any services...'
            />
            <Link to="/pizza">
              <button>Search</button>
            </Link>
          </form>

        </div>
      </div>
    </>
  )
}

export default BgImg;