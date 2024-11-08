import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import PasswordReset from './components/password';
import ForgotPassword from './components/forgotpassword'; // Import ForgotPassword component

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> {/* New route */}
        <Route path="/reset-password" element={<PasswordReset />} />
      </Routes>
    </Router>
  );
}

export default App;
