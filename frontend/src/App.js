import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import SignUp from './components/html_part/SignUp';
import Main from './components/html_part/Main';
import ScrollToTop from './components/html_part/ScrollToTop';
import Login from './components/html_part/Login';
import Navbar from './components/html_part/Navbar';
import Footer from './components/html_part/Footer';
import ResetPassword from './components/html_part/ResetPassword';
import Profile from './components/html_part/Profile';

function App() {
  const location = useLocation();
  const handleSignUp = location.pathname !== '/signup';
  const handlelogin = location.pathname !== '/login';
  const handleResetPassword = location.pathname !== '/reset';

  return (
    <>  
      {handleSignUp && handlelogin && handleResetPassword && <Navbar/>}


      <ScrollToTop/>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<Main/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/reset' element={<ResetPassword/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>


      {handleSignUp && handlelogin && handleResetPassword && <Footer/>}
    </>
  );
}

export default App;
