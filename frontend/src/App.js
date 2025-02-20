import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/html_part/Main';
import ScrollToTop from './components/html_part/ScrollToTop';
import Navbar from './components/html_part/Navbar';
import Footer from './components/html_part/Footer';
import Profile from './components/html_part/Profile';
import About from './components/html_part/About';
import LogoDesign from './components/html_part/services/LogoDesign';
import Wordpress from './components/html_part/services/Wordpress';
import Voice from './components/html_part/services/Voice';
// import SignUp from './components/html_part/SignUp';
// import Login from './components/html_part/Login';
// import ResetPassword from './components/html_part/ResetPassword';

function App() {
  // const location = useLocation();
  // const handleSignUp = location.pathname !== '/signup';
  // const handlelogin = location.pathname !== '/login';
  // const handleResetPassword = location.pathname !== '/reset';

  return (
    <>  
      {/* {handleSignUp && handlelogin && handleResetPassword && <Navbar/>} */}
      <Navbar/>

      <ScrollToTop/>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<Main/>}/>
        {/* <Route path='/signup' element={<SignUp/>}/> */}
        {/* <Route path='/login' element={<Login/>}/> */}
        {/* <Route path='/reset' element={<ResetPassword/>}/> */}
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/logo' element={<LogoDesign/>}/>
        <Route path='/wordpress' element={<Wordpress/>}/>
        <Route path='/voice' element={<Voice/>}/>
      </Routes>

      <Footer/>
      {/* {handleSignUp && handlelogin && handleResetPassword && <Footer/>} */}
    </>
  );
}

export default App;
