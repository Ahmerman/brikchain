import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          {/* Brand and Slogan */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">BrikChain</h1>
            <p className="text-gray-400 text-sm">Lay your own Brik!</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap space-x-6">
            <Link to="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link to="/marketplace" className="text-gray-400 hover:text-white">
              Marketplace
            </Link>
            <Link to="/community" className="text-gray-400 hover:text-white">
              Community
            </Link>
            <Link to="/wallet" className="text-gray-400 hover:text-white">
              Wallet
            </Link>
            <Link to="/login" className="text-gray-400 hover:text-white">
              Login
            </Link>
            <Link to="/signup" className="text-gray-400 hover:text-white">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Contact Information */}
          <div>
            <p className="text-gray-400 text-sm">Contact us: support@brikchain.com</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © 2024 BrikChain. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;