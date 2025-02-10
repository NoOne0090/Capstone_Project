import React from 'react'
import '../css_part/signup.css'

function SignUp() {
    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    // const [confirmPassword, setConfirmPassword] = useState('');

    // // handling password icon
    // const [passwordVisible, setPasswordVisible] = useState(false);
    // const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

    // // handling password confirmation
    // // const [passwordError, setPasswordError] = useState('');

    // const navigate = useNavigate();

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     if(password !== confirmPassword){
    //         alert("Password is not matching!")
    //     }
    //     else{
    //         axios.post('http://localhost:3500/register', {firstName, lastName, email, password})
    //         .then((result) => {
    //             if(result.data.message === "email"){
    //                 alert("Email already exists!");
    //             }
    //             else if(result.data.message === "password"){
    //                 alert("Password Updated to the existing email!");
    //                 navigate('/');
    //             }
    //             else{
    //                 alert('Sign Up Successfull!\nRedirecting to Login Page!')
    //                 navigate('/');
    //             }

    //             // console.log(result);
    //         })
    //         .catch(error => console.log(error))
    //     }
    // }

  return (
    <>
    <div className="signup-body">
        <div className="sign-up-container">
            <div className="sign-up-form-container">
                <div>
                    <h1>Create New Account</h1>
                    <p>Join millions of users taking notes on Bubble</p>
                </div>
                <form className='edit-form' >
                    <input 
                        type="text" 
                        name="signUpFirstName" 
                        placeholder="First Name" 
                        minLength="3" 
                        maxLength="16"
                        // onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input 
                        type="text" 
                        name="signUpLastName" 
                        placeholder="Last Name" 
                        // onChange={(e) => setLastName(e.target.value)}
                        required 
                    />
                    <input 
                        type="email" 
                        name="signUpEmail"
                        placeholder="Email" 
                        autoComplete="off"
                        // onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        type="password" 
                        // type={passwordVisible ? "text" : "password"} 
                        name="signUpPassword" 
                        aria-describedby="passwordHelpBlock" 
                        placeholder="Enter password" 
                        minLength="8" 
                        maxLength="20"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        autocomplete="new-password" 
                        required
                    />
                    {/* <i className={`bx ${passwordVisible ? "bx-show" : "bx-hide"} eye-icon`} onClick={() => setPasswordVisible(!passwordVisible)}></i> */}

                    <input 
                        type="password" 
                        // type={passwordConfirmVisible ? "text" : "password"}
                        aria-describedby="passwordHelpBlock" 
                        placeholder="Confirm password" 
                        minLength="8" 
                        maxLength="20"
                        // onChange={(e) => setConfirmPassword(e.target.value)}
                        autocomplete="new-password" 
                        required
                    />

                    {/* <i className={`bx ${passwordConfirmVisible ? "bx-show" : "bx-hide"} eye-icon`} onClick={() => setPasswordConfirmVisible(!passwordConfirmVisible)}></i> */}
                    
                    <button className='signup-button' type="submit" name="SignUpSubmit">
                        Create Account
                    </button>
                </form>
                
                <br />

                <div>
                    <p>
                        Already have an account? 
                        <a className='login-link' href="index.html">Log in </a>
                    </p>
                </div>
            </div>

            <div className="signup-image">
                <img src="" alt="Error"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default SignUp;
