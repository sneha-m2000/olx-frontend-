import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Adjust as per your backend

// Service to handle forgot password request
const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data;
  } catch (error) {
    console.error('Forgot Password Error:', error); // Log the error for debugging
    throw error.response ? error.response.data : 'An error occurred';
  }
};

// Function to handle user login
const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const data = response.data;
    if (data.token) {
      localStorage.setItem('token', data.token);  // Store token in localStorage
    }
    return data;
  } catch (error) {
    console.error('Login Error:', error);  // Log the error for debugging
    throw new Error(error.response ? error.response.data.message : 'Something went wrong');
  }
};

// Function to handle user signup
const signUp = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { name, email, password });
    return response.data;
  } catch (error) {
    console.error('Signup Error:', error);  // Log the error for debugging
    throw new Error(error.response ? error.response.data.message : 'Something went wrong');
  }
};

export default {
  forgotPassword,
  login,
  signUp,
};
