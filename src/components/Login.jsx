import axios from 'axios';
import React, { useState } from 'react';
import authService from '../services/authService'; // Import your authService for API calls
import './Login.css';
import use_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Login = () => {
    const [action, setAction] = useState("Sign Up");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // Separate state for name
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            if (action === "Login") {
                const response = await authService.login(email, password);
                setMessage("Login successful");
                // Redirect or update UI as necessary
            } else {
                // Updated to include name in the signUp function
                const response = await authService.signUp(name, email, password);
                setMessage("Signup successful");
                // Redirect or update UI as necessary
            }
        } catch (error) {
            setMessage(error.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='container'> 
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div> 

            <div className='inputs'>
                {action === "Sign Up" && (
                    <div className='input'>
                        <img src={use_icon} alt='' />
                        <input
                            type='text'
                            placeholder='Name'
                            value={name} // Bind name state
                            onChange={(e) => setName(e.target.value)} // Update name only
                        />
                    </div>
                )}
                <div className='input'>
                    <img src={email_icon} alt='' />
                    <input
                        type='email'
                        placeholder='Email Id'
                        value={email} // Bind email state
                        onChange={(e) => setEmail(e.target.value)} // Update email independently
                    />
                </div>
                <div className='input'>
                    <img src={password_icon} alt='' />
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            {action === "Login" && (
                 <div className='forgot-password'>
                 Lost Password? <Link to="/forgot-password">Click Here!</Link> {/* Updated link */}
             </div>
            )}

            <div className='submit-container'>
                <button className='submit' onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? 'Processing...' : action === "Login" ? "Login" : "Sign Up"}
                </button>

                <button 
                    onClick={() => setAction(action === "Login" ? "Sign Up" : "Login")}
                >
                    {action === "Login" ? "Switch to Sign Up" : "Switch to Login"}
                </button>
            </div>
            {message && <div>{message}</div>}
        </div>
    );
};

export default Login;
