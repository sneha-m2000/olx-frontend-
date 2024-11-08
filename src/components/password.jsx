import React, { useState } from 'react';
import './password.css';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitted(true);
    setError('');
    // Implement actual password reset logic here
    // Example: authService.resetPassword(token, newPassword);
  };

  return (
    <div className="password-reset-container">
      <div className="password-reset-box">
        <h2 className="heading">Reset Your Password</h2>
        <p className="subheading">
          Enter your email address and new password to reset it.
        </p>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                required
              />
            </div>
            
            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="reset-button">Reset Password</button>
          </form>
        ) : (
          <div className="confirmation-message">
            <p className="success">Password reset successful. You can now log in with your new password.</p>
          </div>
        )}

        <div className="back-link">
          <a href="/" className="back-link-text">Back to Login</a>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
