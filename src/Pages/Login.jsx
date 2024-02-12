import React, { useState } from 'react';
import axios from 'axios';
import LoginLogo from "../Assets/Uni_photo_3.jpg";
import { Link, useNavigate } from 'react-router-dom';

function Login({ role }) {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put('http://localhost:8080/api/v1/login/LoginUser', loginData);
      console.log(response.data);

      console.log('Before navigation');

      if (response.data === 'Login successful') {
        console.log('Role:', role);
        navigate(`/${role}Home`);
      } else {
        setErrorMessage(response.data || 'Login failed. Please try again!.');
      }

      // Log after navigation
      console.log('After navigation');

    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data || 'Login failed. Please try again.');
      } else {
        setErrorMessage('Login failed. Please try again.');
      }
    }
  };

  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="mb-12 md:mb-0 md:col-span-1 hidden md:block">
            <img src={LoginLogo} className="w-full" alt="Sample image" />
          </div>
          <div className="mb-12 md:mb-0 md:col-span-1">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full flex flex-col justify-center">
              <h2 className="text-2xl mb-4 font-bold">User Login</h2>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {errorMessage && <p className="text-red-500 text-xs italic mb-4">{errorMessage}</p>}

              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </div>
            
            <div className="text-m font-bold text-gray-600 flex justify-between mt-4">
              <Link to="/ForgotPassword" className="mr-4">Forgot Password?</Link>
              <Link to="/Signup">Don't have an account? Register</Link>
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;


