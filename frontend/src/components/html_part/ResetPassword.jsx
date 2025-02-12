import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../css_part/signup.css'

function ResetPassword() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState('');

    // handling password icon
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Password is not matching!")
        }
        else{
            axios.post('http://localhost:3500/reset', { email, password})
            .then((result) => {
                if(result.data.message === "email"){
                    alert("Email does not exists!");
                }
                else if(result.data.message === "same"){
                    alert("Password is same for the existing email!");
                }
                else if(result.data.message === "password"){
                    alert("Password Updated!");
                    navigate('/login');
                }
            })
            .catch(error => console.log(error))
        }
    }
  return (
    <>
    <div className="signup-body">
      <div class="sign-up-container">
        <section class="sign-up-form-container">
            <div>
                <h1>Reset Password</h1>
                <p>Enter your email to create new password</p>
            </div>
            {/* <br /> */}

            <form className='edit-form' onSubmit={handleSubmit}>
              <input 
                type="email" 
                name="loginEmail" 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <input 
                // type="password" 
                type={passwordVisible ? "text" : "password"} 
                name="signUpPassword" 
                aria-describedby="passwordHelpBlock" 
                placeholder="New password" 
                minLength="8" 
                maxLength="20"
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
                autocomplete="new-password" 
                required
              />
              <i className={`bx ${passwordVisible ? "bx-show" : "bx-hide"} eye-icon`}
                onClick={() => setPasswordVisible(!passwordVisible)}
                >
              </i>
              <input 
                // type="password" 
                type={passwordConfirmVisible ? "text" : "password"}
                aria-describedby="passwordHelpBlock" 
                placeholder="Confirm password" 
                minLength="8" 
                maxLength="20"
                onChange={(e) => setConfirmPassword(e.target.value)}
                autocomplete="new-password" 
                required
              />
              <i className={`bx ${passwordConfirmVisible ? "bx-show" : "bx-hide"} eye-icon`} onClick={() => setPasswordConfirmVisible(!passwordConfirmVisible)}></i>

              
              {/* <a href="hero.html"> */}
                <button className='signup-button' type="submit" name="loginSubmit">Reset Password</button>
              {/* </a> */}
            </form>


            <br />

            <div>
                <p>Remembered your password?
                    <br />
                    <Link className='login-link' to="/login">
                        Log In
                    </Link>
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

export default ResetPassword;

