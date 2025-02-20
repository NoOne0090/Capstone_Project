import React from 'react'
import BgImg from './BgImg'
import Services from './Services'
import '../css_part/main.css'
import Description from './Description'
import Explore from './Explore'
import Description2 from './Description2'

function Main() {
  return (
    <>
      <BgImg/>

      <br/>  <br/>

      <div className="services">
        <h1>Popular Services</h1>
        {/* <br /> */}
        <div className="display-services">
          <Services/>
        </div>
      </div>

      <br/>  <br/>

      <Description/>

      <br/>  <br/>

      <div className="explore">
        <h1>Explore the marketplace</h1>
        <br />
        <div className="display-explore">
          <Explore/>
        </div>
      </div>

      <br /> <br />

      <Description2/>
      
      <br /> <br />
    </>
  )
}

export default Main
