import React, { useState } from 'react'
import '../css_part/signup.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // handling password icon
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
      e.preventDefault();

      axios.post('http://localhost:3500/loginCheck', {email, password})
      .then((result) => {
          console.log(result.data.message);

          if(result.data.message === "Login successfull!"){
            // alert('Login Successfull!\nRedirecting to home page!');
            toast.success(" Login Successful! Redirecting to home page!");

            localStorage.setItem("user", JSON.stringify(result.data.user));
            
            setTimeout(() => {
                navigate('/home');
            }, 2500);  // Delay of 2 seconds (2000ms)
          }
          else if(result.data.message === "password incorrect"){
            // alert("Password is incorrect!");
            toast.warning("⚠️ Passwords is incorrect!");
          }
          else if(result.data.message === "No record found!"){
            // alert("Email does not exists!");
            toast.warning("Email does not exists!");
          }
      })
      .catch(error => console.log(error))
  }


  return (
    <>
    <div className="signup-body">
      <ToastContainer position="top-center" autoClose={7000} />
      <div className="sign-up-container">
        <section className="sign-up-form-container">
            <div>
                <h1>Log In</h1>
                <p>Millions of users are taking notes on Freelancify</p>
            </div>

            <form  className='edit-form' onSubmit={handleSubmit}>
              <input 
                type="email" 
                name="loginUserEmail" 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                autoComplete="email"
                required
              />
              <input 
                // className="password"
                type={passwordVisible ? "text" : "password"} 
                name="loginUserPassword" 
                placeholder="Password"
                // autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i 
                  className={`bx ${passwordVisible ? "bx-show" : "bx-hide"} eye-icon`}
                  onClick={() => setPasswordVisible(!passwordVisible)}
              >
              </i>

              <Link className='login-link' to="/reset">
                Forgot password?
              </Link>
              
              {/* <a href="hero.html"> */}
                <button className='signup-button' type="submit" name="loginSubmit">Log In</button>
              {/* </a> */}
            </form>


            <br />

            <div>
                <p>Don't have an account? 
                  <Link className='login-link' to="/signup" style={{marginLeft: '7px'}}>Create a new account</Link>
                </p>
            </div>
        </section>

        <div className="signup-image">
            <img src="" alt="Error"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
