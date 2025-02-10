import React from 'react'
import '../css_part/signup.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <div className="signup-body">
      <div class="sign-up-container">
        <section class="sign-up-form-container">
            <header>
                <h1>Log In</h1>
                <p>Millions of users are taking notes on Freelancify</p>
            </header>

            <form className='edit-form'>
              <input 
                type="email" 
                placeholder="Email" 
                value="johnsmith@gmail.com" 
                required
              />
              <input 
                type="password" 
                placeholder="Password" 
                value="********" 
                required
              />

              <Link className='login-link' to="/reset">
                Forgot password?
              </Link>
              
              <a href="hero.html">
                <button className='signup-button' type="submit">Log In</button>
              </a>
            </form>


            <br />

            <div>
                <p>Don't have an account? .
                  <Link className='login-link' to="/signup">Create a new account</Link>
                </p>
            </div>
        </section>

        <div class="signup-image">
            <img src="" alt="Error"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
