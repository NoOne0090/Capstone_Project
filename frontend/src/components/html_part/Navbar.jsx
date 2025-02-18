import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../css_part/navbar.css';
import Login from './Login';
import Modal from './Modal';

function Navbar() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [user, setUser] = useState(null); // Store logged-in user info
    
    // Modal Rendering
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeForm, setActiveForm] = useState('login'); 

    useEffect(() => {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser)); // Parse user data
      }
    }, []);
    
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

    // const handleLogout = () => {
    //     localStorage.removeItem("user"); // Clear user data
    //     setUser(null); // Reset state
    //     window.location.reload(); // Refresh page to reflect changes
    // };

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
                    {/* <Link to="/login">Log In</Link> */}
                    {/* ✅ Show Profile or Login based on user state */}
                    {user ? (
                      <>
                        <Link to="/profile" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                          </svg>
                        </Link>
                        {/* <button onClick={handleLogout} className="logout-btn">Logout</button> */}
                      </>
                    ) : (
                        // <Link to="/login">Log In</Link>
                        <>
                          <Link to="/" onClick={() => setIsModalOpen(true)}>
                            Login
                          </Link>
                          <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                        </>
                    )}
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
                  {/* <Link to="/login">Log In</Link> */}
                  {user ? (
                    <>
                      <Link to="/profile" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-person-circle profile-icon" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                      </Link>
                      {/* <button onClick={handleLogout} className="logout-btn">Logout</button> */}
                    </>
                  ) : (
                      // <Link to="/login">Log In</Link>
                      <>
                        <Link onClick={() => { setIsModalOpen(true); setActiveForm('login'); }}>
                          Login
                        </Link>
                        {/* Modal Component */}
                        {isModalOpen && (
                          <Modal 
                            isModalOpen={isModalOpen} 
                            setIsModalOpen={setIsModalOpen} 
                            activeForm={activeForm} 
                            setActiveForm={setActiveForm} 
                          />
                        )}
                        {/* <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
                      </>
                  )}
                </div>
            </div>

        </div>

      </header>
    </>
  )
}

export default Navbar;
