import React from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '../assets/login-image.jpg'; 


function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex">
      {/* Image Section */}
      <div className="hidden md:flex w-1/2 bg-gray-100">
        <img
          src={loginImage}
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col w-full md:w-1/2 justify-center items-center bg-white px-8 py-16 shadow-lg">
        {/* Slogan */}
        <h1 className="text-4xl font-bold text-blue-500 mb-2 text-center">
          Lay your own Brik!
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Join the revolution of fractional real estate ownership.
        </p>

        {/* Login Form */}
        <form className="w-full max-w-md">
          {/* Email */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="haris@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Login Button */}
          <div className="flex items-center justify-center">
            <button
              //type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => navigate('/')}
            >
              Login
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-gray-600 text-sm mt-6">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
