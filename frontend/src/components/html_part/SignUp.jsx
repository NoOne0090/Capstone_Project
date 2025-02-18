import React,  { useState } from 'react'
import axios from 'axios';
import '../css_part/signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState('');

    // handling password icon
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

    // handling password confirmation
    // const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    // ✅ Strong password validation function
    const isStrongPassword = (password) => {
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return strongPasswordRegex.test(password);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

         // ✅ Check if password meets strength requirements
         if (!isStrongPassword(password)) {
            toast.error("❌ Weak Password! Must contains 1 uppercase, 1 lowercase, 1 number & 1 special character!");
            return; // Stop form submission
        }


        if(password !== confirmPassword){
            toast.warning("⚠️ Passwords do not match!");
            // alert("Password is not matching!")
        }
        else if(firstName === lastName){
            toast.warning("⚠️ Firstname and Lastname are same!");
        }
        else{
            axios.post('http://localhost:3500/register', {firstName, lastName, email, password})
            .then((result) => {
                if(result.data.message === "email"){
                    // alert("Email already exists!");
                    toast.info("📧 Email already exists!");
                }
                else if(result.data.message === "password"){
                    // alert("Password Updated to the existing email!");
                    toast.warning("Password Updated to the existing email!")
                    navigate('/login');
                }
                else{
                    // alert('Sign Up Successfull!\nRedirecting to Login Page!')
                    toast.success("✅ Sign Up Successful! Redirecting to Login Page");
                    // navigate('/login');
                    setTimeout(() => {
                        navigate('/home');
                    }, 2500);
                }

                // console.log(result);
            })
            .catch(error => console.log(error))
        }
    }

  return (
    <>
    <div className="signup-body">
        <ToastContainer position="top-center" autoClose={7000} />
        <div className="sign-up-container">
            <div className="sign-up-form-container">
                <div>
                    <h1>Create New Account</h1>
                    <p>Join millions of users taking notes on Freelancify</p>
                </div>
                <form className='edit-form' onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="signUpFirstName" 
                        placeholder="First Name" 
                        minLength="3" 
                        maxLength="16"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input 
                        type="text" 
                        name="signUpLastName" 
                        placeholder="Last Name" 
                        onChange={(e) => setLastName(e.target.value)}
                        required 
                    />
                    <input 
                        type="email" 
                        name="signUpEmail"
                        placeholder="Email" 
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        // type="password" 
                        type={passwordVisible ? "text" : "password"} 
                        name="signUpPassword" 
                        aria-describedby="passwordHelpBlock" 
                        placeholder="Enter Password" 
                        minLength="8" 
                        maxLength="20"
                        // value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autocomplete="new-password" 
                        required
                        style={{marginBottom: '-11px'}}
                        />
                    <div style={{display:'flex', justifyContent: 'end'}}>
                        <i className={`bx ${passwordVisible ? "bx-show" : "bx-hide"} eye-icon`} style={{bottom: '12px'}} onClick={() => setPasswordVisible(!passwordVisible)}></i>
                    </div>

                    <input 
                        // type="password" 
                        type={passwordConfirmVisible ? "text" : "password"}
                        aria-describedby="passwordHelpBlock" 
                        placeholder="Confirm Password" 
                        minLength="8" 
                        maxLength="20"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        autocomplete="new-password" 
                        required
                        style={{marginBottom: '-11px'}}
                    />
                    
                    <div style={{display:'flex', justifyContent: 'end'}}>
                        <i className={`bx ${passwordConfirmVisible ? "bx-show" : "bx-hide"} eye-icon`} onClick={() => setPasswordConfirmVisible(!passwordConfirmVisible)}></i>
                    </div>
                    {/* <br /> */}
                    
                    <button className='signup-button' type="submit" name="SignUpSubmit">
                        Create Account
                    </button>
                </form>
                
                <br />

                <div>
                    <p>
                        Already have an account? 
                        <br />
                        {/* <a className='login-link' href="index.html"> */}
                        <Link className='login-link' to="/login">
                            Log in 
                        </Link>
                    </p>
                </div>
            </div>

            {/* <div className="signup-image">
                <img src="" alt="Error"/>
            </div> */}
        </div>
    </div>
    </>
  )
}

export default SignUp;
