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
import Video from './components/html_part/services/Video';
import Programming from './components/html_part/services/Programming';
import SEO from './components/html_part/services/SEO';
import Illustration from './components/html_part/services/Illustration';
import Translation from './components/html_part/services/Translation';
import Book from './components/html_part/services/Book';
import Data from './components/html_part/services/Data';
import Photography from './components/html_part/services/Photography';
import Social from './components/html_part/services/Social';
import Graphics from './components/html_part/services/Graphics';
import Digital from './components/html_part/services/Digital';
import Writing from './components/html_part/services/Writing';
import Music from './components/html_part/services/Music';
import Continue from './components/html_part/Continue';
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
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/about' element={<About/>}/>
        {/* Serivices part */}
        <Route path='/logo' element={<LogoDesign/>}/>
        <Route path='/wordpress' element={<Wordpress/>}/>
        <Route path='/voice' element={<Voice/>}/>
        <Route path='/video' element={<Video/>}/>
        <Route path='/programming' element={<Programming/>}/>
        <Route path='/seo' element={<SEO/>}/>
        <Route path='/illustration' element={<Illustration/>}/>
        <Route path='/translation' element={<Translation/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/photography' element={<Photography/>}/>
        <Route path='/social' element={<Social/>}/>
        <Route path='/graphics' element={<Graphics/>}/>
        <Route path='/digital' element={<Digital/>}/>
        <Route path='/writing' element={<Writing/>}/>
        <Route path='/music' element={<Music/>}/>
        {/* Serivices part */}
        <Route path='/continue' element={<Continue/>}/>
      </Routes>

      <Footer/>
      {/* {handleSignUp && handlelogin && handleResetPassword && <Footer/>} */}
    </>
  );
}

export default App;
