import React from 'react'
import BgImg from './BgImg'
import Services from './Services'
import '../css_part/main.css'

function Main() {
  return (
    <>
      <BgImg/>

      <br/>  <br/>

      <div className="services">
        <h1>Popular Services</h1>
        <br />
        <div className="display-services">
          <Services/>
        </div>
      </div>

      <br/>  <br/>
    </>
  )
}

export default Main
