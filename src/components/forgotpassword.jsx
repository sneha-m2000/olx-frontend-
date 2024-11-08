import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import axios for API calls
import './forgotpassword.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Function to handle forgot password request
  const forgotPassword = async (email) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      console.log(response.data);  // handle success response
      return response.data;
    } catch (error) {
      console.error(error.response ? error.response.data : 'An error occurred');
      throw error.response ? error.response.data : 'An error occurred';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Call the forgotPassword function with the email input
      const result = await forgotPassword(email);
      setMessage('A password reset link has been sent to your email.');
      setTimeout(() => navigate('/login'), 3000); // Redirect to login after success
    } catch (error) {
      setMessage(error.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>Enter your email address to receive a password reset link.</p>

      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>

      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default ForgotPassword;
