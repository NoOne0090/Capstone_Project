import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../css_part/navbar.css';
import '../css_part/dropdown.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal';
// import DropDownMenu from './DropDownMenu';

function Navbar() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [user, setUser] = useState(null); // Store logged-in user info
    // const [profileOpen, setProfileOpen] = useState(false);
    
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

    const handleLogout = () => {
        localStorage.removeItem("user"); // Clear user data
        toast.success(" Logged Out Successfully!...");
        setTimeout(() => {
          setUser(null); // Reset state
          window.location.reload(); // Refresh page to reflect changes
        }, 2100);
    };

  return (
    <>
      <ToastContainer position="top-center" autoClose={7000} />
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
                    {/* ✅ Show Profile or Login based on user state */}
                    {user ? (
                      <>
                        <div class="dropdown">
                          {/* <button class="dropbtn">Dropdown</button> */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-person-circle profile-icon" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                          </svg>
                          <div class="dropdown-content">
                            <Link to="/profile">View Profile</Link>
                            <Link onClick={handleLogout}>Log Out</Link>
                          </div>
                        </div>
                      </>
                    ) : (
                        <>
                          <Link className='nav-login-link' onClick={() => { setIsModalOpen(true); setActiveForm('login'); }}>
                            Login
                          </Link>
                        </>
                    )}
                  </div>
                </div>

                <div className="nav-logo-heading">
                  <h2>Freelancify</h2>
                </div>

                <div className="toggle-links toggle1 display-links">
                    <Link to="/home">
                      <div className="nav-link nav-link-home">
                        Home
                      </div>
                    </Link>
                    <Link to="/profile">
                      <div className="nav-link">
                        About Us
                      </div>
                    </Link>
                    <Link to="/home">
                      <div className="nav-link">
                        Explore
                      </div>
                    </Link>
                    <Link to="/home">
                      <div className="nav-link">
                        Contact Us
                      </div>
                    </Link>
                  {/* <div className="nav-link nav-link-home">
                    <Link to="/home">Home</Link>
                  </div>
                  <div className="nav-link">
                    <Link to="/home">About Us</Link>
                  </div>
                  <div className="nav-link">
                    <Link to="/home">Explore</Link>
                  </div>
                  <div className="nav-link">
                    <Link to="/home">Contact Us</Link>
                  </div> */}
                </div>
            </div>

            <div className="navbar-part-2">
                <div className="toggle-links toggle1">
                  <div className="nav-link nav-link-home">
                    <Link to="/home">Home</Link>
                  </div>
                  <div className="nav-link">
                    <Link to="/home">About Us</Link>
                  </div>
                  <div className="nav-link">
                    <Link to="/home">Explore</Link>
                  </div>
                  <div className="nav-link">
                    <Link to="/home">Contact Us</Link>
                  </div>
                </div>
                {/* <div className="nav-search">
                  <label htmlFor="search">Search </label>
                  <input type="search" />
                </div> */}
                <div className="nav-login">
                  {user ? (
                    <>
                        <div class="dropdown">
                          {/* <button class="dropbtn">Dropdown</button> */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-person-circle profile-icon" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                          </svg>
                          <div class="dropdown-content">
                            <Link to="/profile" className='dropdown-profile'>View Profile</Link>
                            <Link onClick={handleLogout}  className='dropdown-logout'>Log Out</Link>
                          </div>
                        </div>
                    </>
                  ) : (
                      <>
                        <Link className='nav-login-link' onClick={() => { setIsModalOpen(true); setActiveForm('login'); }}>
                          Login
                        </Link>
                      </>
                  )}
                </div>
            </div>

            {/* Modal Component */}
            {isModalOpen && (
              <Modal 
                isModalOpen={isModalOpen} 
                setIsModalOpen={setIsModalOpen} 
                activeForm={activeForm} 
                setActiveForm={setActiveForm} 
              />
            )}
        </div>

      </header>

    </>
  )
}

export default Navbar;
