import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../css_part/navbar.css';

function Navbar() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    // if(location.pathname !== '/' || location.pathname !== '/home'){
    //   setScrolled(true);
    // }
    
    // setScrolled(location.pathname !== '/')
    
    useEffect(()=>{
      const handleScroll = () => {
        setScrolled(window.scrollY > 11);
      }
    
      if(location.pathname !== '/' && location.pathname !== '/home'){
        setScrolled(true);
      }
      else{
        window.addEventListener('scroll', handleScroll);
      }
      
      // window.addEventListener('scroll', handleScroll);

      return ()=>{
        window.removeEventListener('scroll', handleScroll);
      }
    }, [location.pathname]);

    const handleResponsive = () => {
      let getToggle = document.querySelector('.toggle1');
  
      getToggle.classList.toggle('toggle2');
      console.log('success');
    }

  return (
    <>
      <header className={`${scrolled? 'header-scroll': 'header-default'}`}>
        <div className="navbar">

            <div className="navbar-part-1">

                <div className="nav-logo">
                  <div className='responsive-logo-edit'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list nav-size-icon" viewBox="0 0 16 16" onClick={handleResponsive}>
                      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    <h2 className='nav-logo-visible'>Freelancify</h2>
                  </div>

                  <div className='nav-login-visible'>
                    <Link to="/login">Log In</Link>
                  </div>
                </div>

                <div className="nav-logo-heading">
                  <h2>Freelancify</h2>
                </div>

                <div className="toggle-links toggle1 display-links">
                  <div className="nav-link nav-link-home">
                    <Link to="/home">Home</Link>
                  </div>
                  <div className="nav-link">
                    <a href="https://www.google.com">About Us</a>
                  </div>
                  <div className="nav-link">
                    <a href="https://www.google.com">Explore</a>
                  </div>
                  <div className="nav-link">
                    <a href="https://www.google.com">Contact Us</a>
                  </div>
                </div>
            </div>

            <div className="navbar-part-2">
                <div className="toggle-links toggle1">
                  <div className="nav-link nav-link-home">
                    <Link to="/home">Home</Link>
                  </div>
                  <div className="nav-link">
                    <a href="https://www.google.com">About Us</a>
                  </div>
                  <div className="nav-link">
                    <a href="https://www.google.com">Explore</a>
                  </div>
                  <div className="nav-link">
                    <a href="https://www.google.com">Contact Us</a>
                  </div>
                </div>
                {/* <div className="nav-search">
                  <label htmlFor="search">Search </label>
                  <input type="search" />
                </div> */}
                <div className="nav-login">
                  <Link to="/login">Log In</Link>
                </div>
            </div>

        </div>

      </header>
    </>
  )
}

export default Navbar;
